// =====================================================
// ISMS GLOBAL — Interactivity & Data Population with Flag Images
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  // Update year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initialize Lucide Icons if loaded
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  /* ---------- Header scroll state ---------- */
  const siteHeader = document.getElementById('siteHeader') || document.getElementById('header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ---------- Debounce Helper ---------- */
  function debounce(fn, delay = 100) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  /* ---------- Mobile Nav Toggle & Responsive Submenus ---------- */
  const navToggle = document.getElementById('navToggle') || document.getElementById('hamburger-menu') || document.querySelector('.nav-toggle');
  const mainNav = document.getElementById('mainNav') || document.getElementById('nav-menu') || document.querySelector('.main-nav');
  
  if (navToggle && mainNav && !navToggle._hasNavListener) {
    navToggle._hasNavListener = true;
    const toggleMenu = (state) => {
      const open = state !== undefined ? state : !mainNav.classList.contains('open');
      mainNav.classList.toggle('open', open);
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (window.innerWidth <= 1080) {
        document.body.style.overflow = open ? 'hidden' : '';
      }
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mainNav.classList.contains('open') && !mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        toggleMenu(false);
      }
    });

    // Handle dropdown toggles on mobile / touch
    document.querySelectorAll('.nav-dropdown-toggle, .dropdown-toggle, .nav-dropdown > a').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          const parent = btn.closest('.nav-dropdown') || btn.parentElement;
          if (parent) {
            e.preventDefault();
            e.stopPropagation();
            parent.classList.toggle('open');
          }
        }
      });
    });

    // Close menu when clicking normal nav links
    mainNav.querySelectorAll('a:not(.nav-dropdown-toggle)').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth <= 1024) {
          toggleMenu(false);
        }
      });
    });

    // Handle window resize with debounce
    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth > 1024) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        document.querySelectorAll('.nav-dropdown.open').forEach(el => el.classList.remove('open'));
      }
    }, 150));
  }

  /* ---------- Auto-wrap Tables in .table-responsive Containers ---------- */
  document.querySelectorAll('table').forEach(table => {
    if (!table.parentElement.classList.contains('table-responsive')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'table-responsive';
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }
  });

  /* =====================================================     CMS-STYLE REPEATER DATA (Real flag images from FlagCDN)
     ============================================================ */
  const destinations = [
    { flagCode:'gb', name:'United Kingdom', linkName:'UK', img:'assets/img_photo-1513635269975-59663e0ac1ad.jpg', link:'uk-destination.html', text:"World-renowned universities, diverse culture, and excellent career opportunities.", facts:['120+ Universities','Top Ranked Degrees'] },
    { flagCode:'ie', name:'Ireland', linkName:'Ireland', img:'assets/ireland.png', link:'ireland-destination.html', text:"Tech hub of Europe offering excellent career links, warm culture, and 2-year post-study work visa.", facts:['35+ Universities','European Tech Hub'] },
    { flagCode:'ae', name:'Dubai', linkName:'Dubai', img:'assets/canada.png', link:'dubai-destination.html', text:"Fastest growing international business and education hub with global branch campuses.", facts:['40+ Branch Campuses','Zero Tax Opportunities'] },
    { flagCode:'fr', name:'France', linkName:'France', img:'assets/img_photo-1502602898657-3e91760cbb34.jpg', link:'france-destination.html', text:"Excellence in business, engineering, fashion, and art with rich European cultural exposure.", facts:['80+ Universities','Top Business Schools'] },
    { flagCode:'de', name:'Germany', linkName:'Germany', img:'assets/germany.png', link:'germany-destination.html', text:"Tuition-free or low-cost public education with excellent career prospects in Europe.", facts:['400+ Universities','Affordable Education'] },
    { flagCode:'au', name:'Australia', linkName:'Australia', img:'assets/australia.png', link:'australia-destination.html', text:"World-class education, vibrant lifestyle, and post-study work opportunities.", facts:['90+ Universities','High Visa Success Rate'] }
  ];

  const courses = [
    { imgIcon:'assets/Screenshot 2026-08-04 162646.png', title:'MBA', text:'Develop executive leadership, strategic thinking, and global business acumen.', flagCodes:['us','ca','gb','au','de'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162709.png', title:'MSc Data Science', text:'Master machine learning, predictive modeling, and data-driven strategy.', flagCodes:['us','gb','ca','au','de'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162651.png', title:'MSc Business Analytics', text:'Bridge data insights with corporate decision-making and executive analytics.', flagCodes:['us','gb','au','ca','ie'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162656.png', title:'MSc Nursing', text:'Pursue an impactful career in healthcare management, clinical practice, and medical sciences.', flagCodes:['us','ca','gb','au','ie'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162646.png', title:'MSc Computer Science', text:'Build a strong foundation in software engineering, cloud computing, and system architecture.', flagCodes:['us','de','gb','au','ca'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162701.png', title:'MSc Cyber Security', text:'Protect digital infrastructures, cloud systems, and network security globally.', flagCodes:['us','gb','ca','au','de'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162719.png', title:'BSc in Psychology', text:'Explore human behavior, cognitive science, and clinical psychological practices.', flagCodes:['gb','au','ca','us','sg'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162651.png', title:'B.Sc. in Finance', text:'Master corporate finance, investment banking, and global financial markets.', flagCodes:['us','gb','au','ca','ie'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162651.png', title:'Bachelor of Business Administration (BBA)', text:'Build foundational knowledge in global trade, management, and entrepreneurship.', flagCodes:['us','gb','au','sg','fr'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162719.png', title:'BA in Psychology', text:'Understand behavioral dynamics, organizational psychology, and mental health sciences.', flagCodes:['gb','us','ca','au','fr'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162725.png', title:'BA in Journalism & Media', text:'Excel in modern journalism, digital media production, and global communications.', flagCodes:['gb','us','ca','au','fr'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162719.png', title:'Law (LLB)', text:'Master international jurisprudence, policy frameworks, and corporate legal studies.', flagCodes:['gb','au','ca','us','sg'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162656.png', title:'Public Health', text:'Drive global health policy, epidemiology, and community healthcare initiatives.', flagCodes:['us','ca','gb','au','ie'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162715.png', title:'Sports Business Management', text:'Lead sports marketing, event management, and athletic organization logistics.', flagCodes:['us','gb','au','sg','fr'] },
    { imgIcon:'assets/Screenshot 2026-08-04 162701.png', title:'Artificial Intelligence', text:'Pioneer machine intelligence, deep learning, neural networks, and automation.', flagCodes:['us','de','gb','au','ca'] }
  ];

  const universities = [
    { name:'Leeds Beckett University', logoImg:'assets/leeds_beckett_logo.jpg', country:'Leeds, UK (England)', flagCode:'gb', rank:'Premier UK University', img:'assets/img_photo-1541829070764-84a7d30dd3f3.jpg', desc:'Leeds Beckett is one of the most prestigious modern universities in the UK, providing academic excellence and student support.' },
    { name:'Cardiff Metropolitan University', logoImg:'assets/cardiff_met_logo.jpg', country:'Wales, England', flagCode:'gb', rank:'Accredited UK Degrees', img:'assets/img_photo-1467269204594-9661b134dd2b.jpg', desc:'Cardiff Metropolitan University offers professionally accredited degrees in art, design, business, and technology.' },
    { name:'Queensland University of Technology', logoImg:'assets/logo_melbourne.jpg', country:'Australia', flagCode:'au', rank:'Top Australian University', img:'assets/img_photo-1523240795612-9a054b0db644.jpg', desc:'QUT is a major Australian university with a real-world focus equipping students with skills for a changing world.' },
    { name:'NEOMA Business School', logoImg:'assets/logo_psl.jpg', country:'France', flagCode:'fr', rank:'Triple Accredited France', img:'assets/img_photo-1502602898657-3e91760cbb34.jpg', desc:'Offers programmes across Reims, Rouen and Paris campuses from Bachelor’s and Master’s to Executive Education.' },
    { name:'Trinity College Dublin', logoImg:'assets/logo_mit.jpg', country:'Dublin, Ireland', flagCode:'ie', rank:'Ireland #1 University', img:'assets/img_photo-1562774053-701939374585.jpg', desc:"Trinity College Dublin is Ireland's oldest and most prestigious university, known for academic excellence and research." },
    { name:'De Montfort University, Dubai', logoImg:'assets/logo_tum.jpg', country:'Dubai, UAE', flagCode:'ae', rank:'UK Degree in Dubai', img:'assets/img_photo-1512453979798-5ea266f8880c.jpg', desc:'DMU Dubai offers foundation, undergraduate, and postgraduate courses with high-quality teaching and facilities.' }
  ];

  const scholarships = [
    {
      flagCode: 'gb',
      country: 'United Kingdom (UK)',
      title: 'Top Scholarships',
      img: 'assets/img_photo-1513635269975-59663e0ac1ad.jpg',
      items: [
        'Chevening Scholarships',
        'Commonwealth Scholarships',
        'GREAT Scholarships',
        'Gates Cambridge Scholarship',
        'Rhodes Scholarship'
      ]
    },
    {
      flagCode: 'us',
      country: 'United States (USA)',
      title: 'Top Scholarships',
      img: 'assets/img_photo-1485738422979-f5c462d49f74.jpg',
      items: [
        'Fulbright Foreign Student Program',
        'Knight-Hennessy Scholars',
        'Hubert H. Humphrey Fellowship',
        'Yale University Scholarships',
        'AAUW International Fellowships'
      ]
    },
    {
      flagCode: 'fr',
      country: 'France',
      title: 'Top Scholarships',
      img: 'assets/img_photo-1502602898657-3e91760cbb34.jpg',
      items: [
        'Eiffel Excellence Scholarship Programme',
        'Emile Boutmy Scholarship',
        'Erasmus Mundus Scholarship',
        'ENS International Selection Scholarship',
        'Ampère Excellence Scholarships'
      ]
    },
    {
      flagCode: 'de',
      country: 'Germany',
      title: 'Top Scholarships',
      img: 'assets/germany.png',
      items: [
        'DAAD Scholarships',
        'Deutschlandstipendium',
        'Heinrich Böll Foundation Scholarship',
        'Konrad-Adenauer-Stiftung Scholarship',
        'Friedrich Ebert Foundation Scholarship'
      ]
    },
    {
      flagCode: 'ie',
      country: 'Ireland',
      title: 'Top Scholarships',
      img: 'assets/ireland.png',
      items: [
        'Government of Ireland International Education Scholarship (GOI-IES)',
        'Trinity College Dublin Global Excellence Scholarship',
        'University College Dublin Global Excellence Scholarship',
        'Maynooth University Scholarships',
        'University of Galway International Scholarships'
      ]
    },
    {
      flagCode: 'ae',
      country: 'Dubai',
      title: 'Top Scholarships',
      img: 'assets/dubai_skyline_hub.png',
      items: [
        'MBZUAI Scholarship',
        'Mohammed Bin Rashid University (MBRU) Scholarships',
        'University of Birmingham Dubai Scholarships',
        'Heriot-Watt Dubai Scholarships',
        'Canadian University Dubai Scholarships'
      ]
    },
    {
      flagCode: 'nz',
      country: 'New Zealand',
      title: 'Top Scholarships',
      img: 'assets/new_zealand.jpg',
      items: [
        'Manaaki New Zealand Scholarships',
        'University of Auckland International Student Excellence Scholarship',
        'Tongarewa Scholarship (Victoria University of Wellington)',
        'University of Otago International Scholarships',
        'University of Waikato International Excellence Scholarship'
      ]
    },
    {
      flagCode: 'nl',
      country: 'Netherlands',
      title: 'Top Scholarships',
      img: 'assets/img_photo-1512470876302-972faa2aa9a4.jpg',
      items: [
        'NL Scholarship',
        'Erasmus Mundus Scholarship',
        'Orange Knowledge Programme (OKP)',
        'Utrecht Excellence Scholarship',
        'Leiden University Excellence Scholarship (LExS)'
      ]
    },
    {
      flagCode: 'au',
      country: 'Australia',
      title: 'Top Scholarships',
      img: 'assets/australia.png',
      items: [
        'Australia Awards Scholarships',
        'Destination Australia Scholarship',
        'Research Training Program (RTP)',
        'Melbourne International Undergraduate Scholarship',
        'Monash International Merit Scholarship'
      ]
    },
    {
      flagCode: 'es',
      country: 'Spain',
      title: 'Top Scholarships',
      img: 'assets/img_photo-1541829070764-84a7d30dd3f3.jpg',
      items: [
        'Fundación Carolina Scholarships',
        'Erasmus Mundus Scholarship',
        'Universidad Europea Scholarships',
        'Barcelona Graduate School of Economics Scholarships',
        'La Caixa Foundation Fellowships'
      ]
    }
  ];

  const testimonials = [
    { name:'Sujal', flagCode:'ae', course:'Undergraduate Studies', uni:'De Montfort University, Dubai', text:'Thanks to ISMS Global Education for the smooth handling of my DMU Dubai process. Special thanks to Shalini Ma’am for her guidance and constant support.', img:'assets/Sujal.jpeg', amount:'AED 15,000' },
    { name:'Tejas Rokhade', flagCode:'gb', course:'Postgraduate Degree', uni:'UK Partner University', text:'The process of going abroad felt overwhelming until I met Shalini Ma’am. Her excellent guidance and constant support helped me secure admission to a UK university, adding great value to my career.', img:'assets/Tejas Rokhade.jpeg', amount:'£5,000' },
    { name:'Urvashi Ravindra Parche', flagCode:'gb', course:'MSc Physiotherapy', uni:'Leeds Beckett University', text:'Grateful to Shalini Ma’am for her guidance during my MSc at Leeds Beckett University, which helped me build strong skills and achieve my role as a Band 7 Physiotherapist at the NHS.', img:'assets/Urvashi Parche.jpg.jpeg', amount:'£6,500' },
    { name:'Azhaar Ahmed', flagCode:'ae', course:'Degree & Internship', uni:'Dubai Partner University', text:'Grateful to ISMS Global Education for guiding me from university selection to admission. Her constant support helped me study in Dubai and complete my internship.', img:'assets/Azhaar Ahmed.jpeg', amount:'AED 12,000' },
    { name:'Ebrahim Lakdawala', flagCode:'gb', course:'Global Education Program', uni:'Premier Abroad University', text:'Grateful to ISMS Global Education—the counselling team helped me make the right choices, cleared my doubts, saved time, and supported me in achieving my global goals.', img:'assets/Ebrahim ladkawala.jpg.jpeg', amount:'£4,500' },
    { name:'Asutosh Patil', flagCode:'gb', course:'Master Program with Scholarship', uni:'UK Dream University', text:'ISMS Global Education guided me from university selection to visa processing with expert support. Thanks to their team, I secured admission to my dream UK University with a scholarship. Highly recommended!', img:'assets/Asutosh Patil.png', amount:'£4,000' },
    { name:'Rahul Sharma', flagCode:'de', course:'MSc Automotive Engineering', uni:'TU Munich, Germany', text:'Studying in Germany was my top priority. ISMS Global Education handled my university documentation and block account process seamlessly. Truly professional support!', img:'assets/img_photo-1507003211169-0a1dd7228f2d.jpg', amount:'€5,000' },
    { name:'Pooja Verma', flagCode:'fr', course:'Master in International Business', uni:'NEOMA Business School, France', text:'From SOP drafting to visa mock interviews, Shalini Ma’am and the ISMS team guided me every single day. I secured admission with a merit scholarship!', img:'assets/img_photo-1534528741775-53994a69daeb.jpg', amount:'€4,500' },
    { name:'Aniket Deshmukh', flagCode:'au', course:'Master of Data Science', uni:'QUT Australia', text:'Extremely grateful to ISMS Global Education for helping me get into Queensland University of Technology with a high visa success rate and scholarship award.', img:'assets/img_photo-1500648767791-00dcc994a43e.jpg', amount:'AUD 2,000' }
  ];

  const events = [
    { badge:'Live Webinar', badgeClass:'live', title:'Study in UK: Admissions & Visa Updates 2026', date:'31 May 2026, Saturday', time:'04:00 PM – 05:30 PM (IST)', loc:'Online (Zoom)', img:'assets/img_photo-1434030216411-0b793f4b4173.jpg' },
    { badge:'On Campus', badgeClass:'campus', title:'Scholarships & Funding Opportunities for International Students', date:'07 June 2026, Saturday', time:'11:00 AM – 01:00 PM (IST)', loc:'ISMS Pune Office', img:'assets/img_photo-1515187029135-18ee286d815b.jpg' },
    { badge:'Live Webinar', badgeClass:'live', title:'How to Write a Winning SOP & Personal Statement', date:'14 June 2026, Saturday', time:'03:00 PM – 04:30 PM (IST)', loc:'Online (Zoom)', img:'assets/img_photo-1455390582262-044cdead277a.jpg' }
  ];

  const blogPosts = [
    { cat:'Visa & Immigration', catClass:'badge-green', title:'Student Visa Process: A Step-by-Step Guide', text:'Understand the complete student visa process, requirements and tips for a smooth application.', date:'May 18, 2026', read:'5 min read', img:'assets/img_photo-1544717305-2782549b5136.jpg' },
    { cat:'Scholarships', catClass:'badge-purple', title:'How to Find and Apply for International Scholarships', text:'A complete guide to finding scholarships, eligibility criteria and winning applications.', date:'May 15, 2026', read:'4 min read', img:'assets/img_photo-1523240795612-9a054b0db644.jpg' },
    { cat:'Universities', catClass:'badge-orange', title:'Top Universities in Canada for International Students', text:'Discover top-ranked universities in Canada offering world-class education and amazing career opportunities.', date:'May 12, 2026', read:'5 min read', img:'assets/img_photo-1503614472-8c93d56e92ce.jpg' },
    { cat:'Career', catClass:'badge-pink', title:'Career Opportunities After Studying Abroad', text:'Explore work opportunities, post-study work visa options and how to build a global career.', date:'May 10, 2026', read:'4 min read', img:'assets/img_photo-1522071820081-009f0129c71c.jpg' }
  ];

  /* ---------- Render helpers ---------- */
  function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  const destGrid = document.getElementById('destinationGrid');
  if (destGrid) {
    destGrid.innerHTML = '';
    destGrid.append(...destinations.map(d => el(`
      <article class="dest-card" data-reveal>
        <div class="dest-card-img"><img src="${d.img}" alt="${d.name} skyline" loading="lazy"></div>
        <div class="dest-card-body">
          <div class="flagname"><img src="assets/flag_w40_${d.flagCode}.png" class="flag-icon" alt="${d.name} Flag"> ${d.name}</div>
          <p>${d.text}</p>
          <div class="dest-facts">
            <span><i class="fa-solid fa-building-columns"></i> ${d.facts[0]}</span>
            <span><i class="fa-regular fa-star"></i> ${d.facts[1]}</span>
          </div>
          <a href="${d.link || '#'}" class="link-arrow">Explore ${d.linkName || d.name.split(' ')[0]} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </article>`)));
  }

  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid) {
    courseGrid.innerHTML = '';
    courseGrid.append(...courses.map(c => el(`
      <article class="course-card" data-reveal>
        <div class="course-card-body">
          <div class="course-card-head">
            <img src="${c.imgIcon}" class="card-img-icon" alt="${c.title}">
            <span class="arrow-chip"><i class="fa-solid fa-arrow-right"></i></span>
          </div>
          <h4>${c.title}</h4>
          <p>${c.text}</p>
          <div class="course-flags">${c.flagCodes.map(fc => `<img src="assets/flag_w40_${fc}.png" class="flag-icon" alt="${fc}">`).join('')}</div>
        </div>
      </article>`)));
  }

  const uniGrid = document.getElementById('universityGrid');
  if (uniGrid) {
    uniGrid.innerHTML = '';
    uniGrid.append(...universities.map(u => el(`
      <article class="uni-card" data-reveal>
        <div class="uni-card-top-img"><img src="${u.img}" alt="${u.name} campus" loading="lazy"></div>
        <div class="uni-logo-box"><img src="${u.logoImg}" class="uni-logo-img" alt="${u.name} Logo"></div>
        <div class="uni-card-body">
          <h4 style="font-size: 14.5px; font-weight: 700; color: #1E293B; margin-bottom: 4px; line-height: 1.35;">${u.name}</h4>
          <span class="uni-loc" style="display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 12px; color: #2563EB; font-weight: 600; margin-bottom: 6px;"><img src="assets/flag_w40_${u.flagCode}.png" class="flag-icon" alt="${u.country}"> ${u.country}</span>
          <p style="font-size: 11px; color: #64748B; line-height: 1.45; margin-bottom: 10px; flex: 1;">${u.desc}</p>
          <span class="uni-rank" style="font-size: 11.5px; color: #2563EB; font-weight: 700; margin-top: auto;">${u.rank}</span>
        </div>
      </article>`)));
  }

  const scholarGrid = document.getElementById('scholarshipGrid');
  if (scholarGrid) {
    scholarGrid.innerHTML = '';
    scholarGrid.append(...scholarships.map(s => el(`
      <article class="scholar-card" data-reveal>
        <div class="scholar-card-img">
          <img src="${s.img}" class="scholar-cover-photo" alt="${s.country} scholarships" loading="lazy">
          <img src="assets/flag_w80_${s.flagCode}.png" class="scholar-flag-badge" alt="${s.country} flag">
        </div>
        <div class="scholar-card-body">
          <h3 class="scholar-country">${s.country}</h3>
          <span class="scholar-sub">${s.title}</span>
          <ul>${s.items.map(i => `<li><i class="fa-solid fa-circle-check"></i> <span>${i}</span></li>`).join('')}</ul>
        </div>
      </article>`)));

    // Auto-scroll controller for scholarship cards horizontal slider
    const scholarWrapper = document.getElementById('scholarshipScrollWrapper');
    if (scholarWrapper) {
      let isPaused = false;
      const speed = 2.5;

      scholarWrapper.addEventListener('mouseenter', () => { isPaused = true; });
      scholarWrapper.addEventListener('mouseleave', () => { isPaused = false; });
      scholarWrapper.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
      scholarWrapper.addEventListener('touchend', () => { isPaused = false; }, { passive: true });

      function stepAutoScroll() {
        if (!isPaused) {
          scholarWrapper.scrollLeft += speed;
          if (scholarWrapper.scrollLeft + scholarWrapper.clientWidth >= scholarWrapper.scrollWidth - 2) {
            scholarWrapper.scrollLeft = 0;
          }
        }
        requestAnimationFrame(stepAutoScroll);
      }

      setTimeout(() => {
        requestAnimationFrame(stepAutoScroll);
      }, 500);
    }
  }

  const testGrid = document.getElementById('testimonialGrid');
  if (testGrid) {
    function renderTestimonialsList(showAll = false) {
      testGrid.innerHTML = '';
      const list = showAll ? testimonials : testimonials.slice(0, 5);
      testGrid.append(...list.map(t => el(`
        <article class="testimonial-card" data-reveal>
          <div class="testimonial-card-head">
            <img src="${t.img}" alt="${t.name}">
            <div><strong>${t.name} <img src="assets/flag_w40_${t.flagCode}.png" class="flag-icon" alt="Flag"></strong><span>${t.course}</span></div>
          </div>
          <p style="font-size: 12.5px; color: #475569; margin: 10px 0 6px; line-height: 1.5; flex: 1;">"${t.text}"</p>
          <span style="font-size:12px;color:var(--body-gray);font-weight:600;">${t.uni}</span>
          <div class="scholarship-tag" style="margin-top: 10px; background: #EEF4FF; border: 1px solid #BFDBFE; border-radius: 8px; padding: 6px 10px; font-size: 12px; color: #0D47D8; font-weight: 700; display: flex; justify-content: space-between;">Scholarship Received <strong>${t.amount}</strong></div>
        </article>`)));

      if (!showAll) {
        const moreCard = el(`
          <article class="testimonial-card more-reviews-card" id="btnViewMoreReviews" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: linear-gradient(135deg, #EEF4FF 0%, #FFFFFF 100%); border: 2px dashed #BFDBFE; border-radius: 20px; padding: 24px; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; min-height: 240px;">
            <div style="width: 54px; height: 54px; border-radius: 50%; background: #2563EB; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-bottom: 12px; box-shadow: 0 6px 16px rgba(37,99,235,0.25);">
              <i class="fa-solid fa-comments"></i>
            </div>
            <strong style="font-size: 17px; color: #1E293B; margin-bottom: 4px; font-weight: 700;">More Reviews</strong>
            <p style="font-size: 12px; color: #64748B; margin-bottom: 14px; line-height: 1.45;">Explore more inspirational success stories from our global alumni</p>
            <span class="btn btn-primary btn-sm" style="border-radius: 50px; padding: 8px 18px; font-size: 12.5px; font-weight: 600;">
              View All Reviews <i class="fa-solid fa-arrow-right" style="margin-left: 6px;"></i>
            </span>
          </article>
        `);
        moreCard.addEventListener('click', () => {
          renderTestimonialsList(true);
        });
        testGrid.appendChild(moreCard);
      }
    }

    renderTestimonialsList(false);
  }

  const eventGrid = document.getElementById('eventGrid');
  if (eventGrid) {
    eventGrid.innerHTML = '';
    eventGrid.append(...events.map(e => el(`
      <article class="event-card" data-reveal>
        <img src="${e.img}" alt="${e.title}">
        <div class="event-card-body">
          <span class="event-badge ${e.badgeClass}">${e.badge}</span>
          <h5>${e.title}</h5>
          <div class="meta-line"><span><i class="fa-regular fa-calendar"></i> ${e.date}</span><span><i class="fa-regular fa-clock"></i> ${e.time}</span><span><i class="fa-solid fa-location-dot"></i> ${e.loc}</span></div>
          <a href="#contact" class="btn btn-secondary btn-block">Register Now <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </article>`)));
  }

  const blogGrid = document.getElementById('blogGrid');
  if (blogGrid) {
    blogGrid.innerHTML = '';
    blogGrid.append(...blogPosts.map(b => el(`
      <article class="blog-subcard" data-reveal>
        <div class="subcard-media">
          <img src="${b.img}" alt="${b.title}">
          <span class="blog-badge ${b.catClass}">${b.cat}</span>
        </div>
        <div class="subcard-body">
          <h5>${b.title}</h5>
          <p>${b.text}</p>
          <div class="blog-card-footer">
            <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${b.read}</span>
            <a href="#" class="read-more-link">Read More <i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </article>`)));
  }

  const faqs = [
    { q:'How can ISMS Global Education help me choose the right university?', a:'ISMS Global Education is a trusted overseas education consultancy that helps students achieve their academic dream of studying abroad. We offer end-to-end support, including career counselling, university selection, admissions, scholarship assistance, visa guidance, pre-departure and post-arrival guidance.', open:true },
    { q:'Will ISMS Global Education support me after I reach my study destination?', a:'Absolutely! ISMS Global Education provides post-arrival support, helping you with accommodation, banking, and settling into your new environment.' },
    { q:'Will I have to do anything for the application process?', a:'Exclusive attention to each student. Our Study Abroad program is 100% free service, so that the student has no hesitation and complete information to make the big decision.' },
    { q:'Are there any scholarships to study abroad for Indian students?', a:'Yes, ISMS Global Education provides guidance on scholarship to study abroad for Indian students and financial aid opportunities to help ease the financial burden of studying abroad.' },
    { q:'Will I get a Visa?', a:'We have had a 100% Visa success rate for the last 10 years. So, you don’t have to be unsure of your future planning, and you can be confident about your study in the UK' },
    { q:'Is IELTS Mandatory?', a:'Apply with or without IELTS for escalating the process. Exclusive attention to each student. Our Study Abroad program is 100% free service, so that the student has no hesitation and complete information to make the big decision.' }
  ];

  const faqList = document.getElementById('faqList');
  if (faqList) {
    const items = faqList.querySelectorAll('.faq-item');
    items.forEach(item => {
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        // Close all other items
        items.forEach(el => {
          if (el !== item) {
            el.classList.remove('open');
            const elBtn = el.querySelector('.faq-q');
            if (elBtn) elBtn.setAttribute('aria-expanded', 'false');
            const elIcon = el.querySelector('.faq-icon-badge i');
            if (elIcon) elIcon.className = 'fa-solid fa-plus';
          }
        });
        
        // Toggle the clicked one
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen);
        const icon = item.querySelector('.faq-icon-badge i');
        if (icon) {
          icon.className = isOpen ? 'fa-solid fa-minus' : 'fa-solid fa-plus';
        }
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    document.querySelectorAll('[data-reveal], .reveal').forEach(elm => elm.classList.add('in-view', 'active'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view', 'active');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal], .reveal').forEach(elm => io.observe(elm));
  }

  /* ---------- Counter animation ---------- */
  function animateCounter(node) {
    const target = parseInt(node.dataset.counter || node.getAttribute('data-val'), 10);
    if (isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      node.textContent = Math.round(eased * target).toLocaleString() + (progress >= 1 ? '+' : '');
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (reduceMotion) {
    document.querySelectorAll('[data-counter], .stat-num, .excel-num').forEach(n => {
      const val = parseInt(n.dataset.counter || n.getAttribute('data-val'), 10);
      if (!isNaN(val)) n.textContent = val.toLocaleString() + '+';
    });
  } else {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateCounter(entry.target); counterIO.unobserve(entry.target); }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('[data-counter], .stat-num, .excel-num').forEach(n => counterIO.observe(n));
  }

  /* ---------- Counselling Modal Handler ---------- */
  const modalOverlay = document.getElementById('counsellingModalOverlay');
  const closeBtn = document.getElementById('modalCloseBtn');
  function openCounsellingModal(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      modalOverlay.style.opacity = '1';
      modalOverlay.style.visibility = 'visible';
      document.body.style.overflow = 'hidden';
    }
  }
  function closeCounsellingModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      modalOverlay.style.opacity = '0';
      modalOverlay.style.visibility = 'hidden';
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeCounsellingModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeCounsellingModal();
    });
  }

  document.querySelectorAll('.open-counselling-modal, [data-modal="counselling"]').forEach(btn => {
    btn.addEventListener('click', openCounsellingModal);
  });
});


