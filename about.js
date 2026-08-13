// ============================================================
// ISMS GLOBAL — Interactivity & Data Population with Flag Images
// ============================================================
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

  /* ---------- Mobile nav toggle (Handled centrally in script.js) ---------- */
  const navToggle = document.getElementById('navToggle') || document.getElementById('hamburger-menu');
  const mainNav = document.getElementById('mainNav') || document.getElementById('nav-menu');
  if (navToggle && mainNav && !navToggle._hasNavListener) {
    navToggle._hasNavListener = true;
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = mainNav.classList.toggle('open');
      navToggle.classList.toggle('active', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (window.innerWidth <= 1080) {
        document.body.style.overflow = open ? 'hidden' : '';
      }
    });

    document.querySelectorAll('.nav-dropdown-toggle, .dropdown-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 1080) {
          e.preventDefault();
          e.stopPropagation();
          const parent = btn.closest('.nav-dropdown') || btn.parentElement;
          if (parent) parent.classList.toggle('open');
        }
      });
    });

    mainNav.querySelectorAll('a:not(.nav-dropdown-toggle)').forEach(a => a.addEventListener('click', () => {
      if (window.innerWidth <= 1080) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    }));
  }

  /* ============================================================
     CMS-STYLE REPEATER DATA (Real flag images from FlagCDN)
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
    { icon:'fa-laptop-code', color:'#2563EB', title:'Computer Science & IT', text:'Build a strong foundation in technology, software engineering, and AI innovation.', flagCodes:['us','ca','gb','au','de'], img:'assets/img_photo-1517694712202-14dd9538aa97.jpg' },
    { icon:'fa-chart-line', color:'#16A34A', title:'Business & Management', text:'Develop executive leadership, strategic thinking, and global business acumen.', flagCodes:['us','gb','au','ca','ie'], img:'assets/img_photo-1460925895917-afdab827c52f.jpg' },
    { icon:'fa-stethoscope', color:'#7C3AED', title:'Health Sciences & Medicine', text:'Pursue a rewarding career in healthcare, biotechnology, and medical sciences.', flagCodes:['us','ca','gb','au','ie'], img:'assets/img_photo-1576091160399-112ba8d25d1d.jpg' },
    { icon:'fa-gear', color:'#D97706', title:'Engineering & Robotics', text:'Innovate, design, and engineer sustainable solutions for a technological future.', flagCodes:['us','de','gb','au','ca'], img:'assets/img_photo-1581092160607-ee22621dd758.jpg' },
    { icon:'fa-chart-pie', color:'#16A34A', title:'Data Science & Analytics', text:'Master machine learning, predictive modeling, and data-driven strategy.', flagCodes:['us','gb','ca','au','de'], img:'assets/img_photo-1551288049-bebda4e38f71.jpg' },
    { icon:'fa-plane', color:'#D97706', title:'Hospitality & Tourism', text:'Create world-class experiences in global hotel management & luxury tourism.', flagCodes:['us','gb','au','sg','fr'], img:'assets/img_photo-1566073771259-6a8506099945.jpg' },
    { icon:'fa-scale-balanced', color:'#DC2626', title:'Law & Corporate Legal Studies', text:'Master international jurisprudence, policy frameworks, and corporate law.', flagCodes:['gb','au','ca','us','sg'], img:'assets/img_photo-1589829545856-d10d557cf95f.jpg' },
    { icon:'fa-palette', color:'#2563EB', title:'Design & Digital Media Arts', text:'Unleash creative design, UI/UX, animation, and multimedia production.', flagCodes:['gb','us','ca','au','fr'], img:'assets/img_photo-1513542789411-b6a5d4f31634.jpg' }
  ];

  const universities = [
    { name:'Harvard University', country:'United States', flagCode:'us', rank:'QS Ranking: #4', img:'assets/img_photo-1562774053-701939374585.jpg' },
    { name:'University of Oxford', country:'United Kingdom', flagCode:'gb', rank:'QS Ranking: #3', img:'assets/img_photo-1541829070764-84a7d30dd3f3.jpg' },
    { name:'University of Toronto', country:'Canada', flagCode:'ca', rank:'QS Ranking: #21', img:'assets/img_photo-1564981797816-1043664bf78d.jpg' },
    { name:'The University of Melbourne', country:'Australia', flagCode:'au', rank:'QS Ranking: #14', img:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
    { name:'Technische Universität München', country:'Germany', flagCode:'de', rank:'QS Ranking: #28', img:'assets/img_photo-1592280771190-3e2e4d571952.jpg' },
    { name:'National University of Singapore', country:'Singapore', flagCode:'sg', rank:'QS Ranking: #8', img:'assets/img_photo-1565967511849-76a60a516170.jpg' },
    { name:'Imperial College London', country:'United Kingdom', flagCode:'gb', rank:'QS Ranking: #6', img:'assets/img_photo-1526778548025-fa2f459cd5c1.jpg' },
    { name:'University of Sydney', country:'Australia', flagCode:'au', rank:'QS Ranking: #19', img:'assets/img_photo-1544717305-2782549b5136.jpg' },
    { name:'Trinity College Dublin', country:'Ireland', flagCode:'ie', rank:'QS Ranking: #81', img:'assets/img_photo-1568605117036-5fe5e7bab0b7.jpg' },
    { name:'University of Waterloo', country:'Canada', flagCode:'ca', rank:'QS Ranking: #112', img:'assets/img_photo-1523240795612-9a054b0db644.jpg' },
    { name:'PSL Université Paris', country:'France', flagCode:'fr', rank:'QS Ranking: #24', img:'assets/img_photo-1502602898657-3e91760cbb34.jpg' },
    { name:'Massachusetts Institute of Technology', country:'United States', flagCode:'us', rank:'QS Ranking: #1', img:'assets/img_photo-1509062522246-3755977927d7.jpg' }
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
    { name:'Rohan Mehta', flagCode:'us', course:'MS in Computer Science', uni:'Massachusetts Institute of Technology', amount:'$25,000', img:'assets/img_photo-1539571696357-5a69c17a67c6.jpg' },
    { name:'Priya Nair', flagCode:'gb', course:'MSc in Data Science', uni:'University of Oxford', amount:'£15,000', img:'assets/img_photo-1517841905240-472988babdf9.jpg' },
    { name:'Arjun Patel', flagCode:'ca', course:'MBA (Global)', uni:'University of Toronto', amount:'CAD 20,000', img:'assets/img_photo-1507003211169-0a1dd7228f2d.jpg' },
    { name:'Sneha Iyer', flagCode:'au', course:'Master of Engineering', uni:'The University of Sydney', amount:'AUD 18,000', img:'assets/img_photo-1494790108377-be9c29b29330.jpg' },
    { name:'Karan Singh', flagCode:'de', course:'MS in Artificial Intelligence', uni:'Technical University of Munich', amount:'€12,000', img:'assets/img_photo-1500648767791-00dcc994a43e.jpg' },
    { name:'Meera Reddy', flagCode:'fr', course:'MSc in International Business', uni:'PSL Université Paris', amount:'€2,000', img:'assets/img_photo-1524504388940-b1c1722653e1.jpg' }
  ];

  const events = [
    { badge:'Live Webinar', badgeClass:'live', title:'Study in UK: Admissions & Visa Updates 2026', date:'31 May 2026, Saturday', time:'04:00 PM – 05:30 PM (IST)', loc:'Online (Zoom)', img:'assets/img_photo-1434030216411-0b793f4b4173.jpg' },
    { badge:'On Campus', badgeClass:'campus', title:'Scholarships & Funding Opportunities for International Students', date:'07 June 2026, Saturday', time:'11:00 AM – 01:00 PM (IST)', loc:'ISMS Pune Office', img:'assets/img_photo-1515187029135-18ee286d815b.jpg' },
    { badge:'Live Webinar', badgeClass:'live', title:'How to Write a Winning SOP & Personal Statement', date:'14 June 2026, Saturday', time:'03:00 PM – 04:30 PM (IST)', loc:'Online (Zoom)', img:'assets/img_photo-1455390582262-044cdead277a.jpg' }
  ];

  const blogPosts = [
    { cat:'Visa & Immigration', title:'Student Visa Process: A Step-by-Step Guide', text:'Understand the complete student visa process, requirements and tips for a smooth application.', date:'May 18, 2026', read:'5 min read', img:'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=400&q=80' },
    { cat:'Scholarships', title:'How to Find and Apply for International Scholarships', text:'A complete guide to finding scholarships, eligibility criteria and winning applications.', date:'May 15, 2026', read:'4 min read', img:'assets/img_photo-1523240795612-9a054b0db644.jpg' },
    { cat:'Universities', title:'Top Universities in Canada for International Students', text:'Discover top-ranked universities in Canada offering world-class education and amazing career opportunities.', date:'May 12, 2026', read:'5 min read', img:'https://images.unsplash.com/photo-1517935703635-27c7078861d6?auto=format&fit=crop&w=400&q=80' },
    { cat:'Study Abroad', title:'Complete SOP & Personal Statement Writing Guide', text:'Key structure, tips, and common mistakes to avoid when drafting your university SOP.', date:'May 08, 2026', read:'6 min read', img:'assets/img_photo-1455390582262-044cdead277a.jpg' },
    { cat:'Student Life', title:'Managing Living Expenses & Part-Time Jobs Abroad', text:'Practical guide for students on managing budgets, finding part-time jobs, and student discounts.', date:'May 05, 2026', read:'4 min read', img:'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80' },
    { cat:'Career', title:'Post-Study Work Visa Rules 2026: UK, USA & Canada', text:'Latest updates on post-study work rights and pathways to permanent residency after graduation.', date:'May 01, 2026', read:'7 min read', img:'assets/img_photo-1522071820081-009f0129c71c.jpg' }
  ];

  const faqs = [
    { q:'What services does ISMS Global provide?', a:'We offer end-to-end support for studying abroad including university selection, admissions, visa assistance, scholarships, accommodation, travel guidance and post-arrival support.', open:true },
    { q:'Which countries and universities do you work with?', a:'We work directly with 500+ partner universities across 10+ countries including the USA, UK, Canada, Australia, Germany, Ireland and Singapore.' },
    { q:'How much does it cost to use your services?', a:'Initial counselling is completely free. Any service-specific fees are shared transparently before you commit to anything.' },
    { q:'Do you help with scholarships and financial aid?', a:'Yes, our counsellors help you identify and apply for relevant scholarships and financial aid options for your destination.' },
    { q:'How long does the admission process take?', a:'Timelines vary by country and university, but our team keeps you updated at every stage from application to offer letter.' },
    { q:'Do you assist with visa applications?', a:'Yes, we provide complete visa guidance including documentation, filing and interview preparation.' },
    { q:'What support do you provide after I reach my destination?', a:'We offer airport pickup coordination, accommodation support, orientation guidance and ongoing academic and career support.' },
    { q:'Can you help if I want to change my course or university?', a:'Yes, our counsellors can help you re-evaluate your options and guide you through the updated application process.' },
  ];

  /* ---------- Render helpers ---------- */
  function el(html){ const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; }

  const destGrid = document.getElementById('destinationGrid');
  if (destGrid) {
    destGrid.append(...destinations.map(d => el(`
      <article class="dest-card" data-reveal>
        <div class="dest-card-img"><img src="${d.img}" alt="${d.name} skyline" loading="lazy"></div>
        <div class="dest-card-body">
          <div class="flagname"><img src="assets/flag_w40_${d.flagCode}.png" class="flag-icon" alt="${d.name} Flag"> ${d.name}</div>
          <p>${d.text}</p>
          <div class="dest-facts">${d.facts.map(f => `<span><i class="fa-solid fa-circle-check"></i>${f}</span>`).join('')}</div>
          <a href="#" class="link-arrow">Explore ${d.name.split(' ')[0]} <i class="fa-solid fa-arrow-right"></i></a>
        </div>
      </article>`)));
  }

  const courseGrid = document.getElementById('courseGrid');
  if (courseGrid) {
    courseGrid.append(...courses.map(c => el(`
      <article class="course-card" data-reveal>
        <div class="course-card-img"><img src="${c.img}" alt="${c.title}"></div>
        <div class="course-card-body">
          <div class="course-card-head">
            <div class="course-icon" style="background:${c.color}1A;color:${c.color}"><i class="fa-solid ${c.icon}"></i></div>
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
    uniGrid.append(...universities.map(u => el(`
      <article class="uni-card" data-reveal>
        <div class="uni-logo-wrap"><img src="${u.img}" alt="${u.name} campus"></div>
        <div class="uni-card-body">
          <strong>${u.name}</strong>
          <span class="uni-loc"><img src="assets/flag_w40_${u.flagCode}.png" class="flag-icon" alt="${u.country}"> ${u.country}</span>
          <span class="uni-rank">${u.rank}</span>
        </div>
      </article>`)));
  }

  const scholarGrid = document.getElementById('scholarshipGrid');
  if (scholarGrid) {
    scholarGrid.append(...scholarships.map(s => el(`
      <article class="scholar-card" data-reveal>
        <img src="${s.img}" alt="${s.country} scholarships">
        <div class="scholar-card-body">
          <div class="flagname"><img src="assets/flag_w40_${s.flagCode}.png" class="flag-icon" alt="${s.country}"> ${s.country}</div>
          <small>${s.title}</small>
          <ul>${s.items.map(i => `<li><i class="fa-solid fa-circle-check"></i>${i}</li>`).join('')}</ul>
        </div>
      </article>`)));
  }

  const testGrid = document.getElementById('testimonialGrid');
  if (testGrid) {
    testGrid.append(...testimonials.map(t => el(`
      <article class="testimonial-card" data-reveal>
        <div class="testimonial-card-head">
          <img src="${t.img}" alt="${t.name}">
          <div><strong>${t.name} <img src="assets/flag_w40_${t.flagCode}.png" class="flag-icon" alt="Flag"></strong><span>${t.course}</span></div>
        </div>
        <span style="font-size:13px;color:var(--body-gray)">${t.uni}</span>
        <div class="scholarship-tag">Scholarship Received<strong>${t.amount}</strong></div>
        <a href="#" class="read-more">Read Full Story <i class="fa-solid fa-arrow-right"></i></a>
      </article>`)));
  }

  const eventGrid = document.getElementById('eventGrid');
  if (eventGrid) {
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
    blogGrid.append(...blogPosts.map(b => el(`
      <article class="blog-card" data-reveal>
        <img src="${b.img}" alt="${b.title}">
        <div class="blog-card-body">
          <span class="blog-cat" style="margin:0 0 6px">${b.cat}</span>
          <h5>${b.title}</h5>
          <div class="meta-line"><span><i class="fa-regular fa-calendar"></i> ${b.date}</span><span><i class="fa-regular fa-clock"></i> ${b.read}</span></div>
        </div>
      </article>`)));
  }

  const faqList = document.getElementById('faqList');
  if (faqList) {
    faqs.forEach(f => {
      const item = el(`
        <div class="faq-item ${f.open ? 'open' : ''}">
          <button class="faq-q" aria-expanded="${!!f.open}"><span>${f.q}</span><i class="fa-solid fa-plus"></i></button>
          <div class="faq-a"><p>${f.a}</p></div>
        </div>`);
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); i.querySelector('.faq-q').setAttribute('aria-expanded','false'); });
        if (!isOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
      });
      faqList.appendChild(item);
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

  /* ---------- Forms ---------- */
  const counsellingForm = document.getElementById('counsellingForm') || document.getElementById('isms-contact-form');
  const formSuccess = document.getElementById('formSuccess') || document.getElementById('toast-success');
  if (counsellingForm) {
    counsellingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      counsellingForm.hidden = true;
      if (formSuccess) {
        formSuccess.hidden = false;
        formSuccess.classList.add('show');
      }
    });
  }
});
