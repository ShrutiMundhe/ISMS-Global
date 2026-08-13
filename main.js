/**
 * =========================================================================================
 * ISMS GLOBAL EDUCATION — Main Layout & Responsiveness Engine (main.js)
 * =========================================================================================
 * Injects the exact original Homepage Header and Footer into any page simply by including:
 *   <script src="main.js"></script>
 * =========================================================================================
 */

(function () {
  "use strict";

  // Prevent multiple executions
  if (window.__ISMS_MAIN_JS_INITIALIZED__) return;
  window.__ISMS_MAIN_JS_INITIALIZED__ = true;

  /* =========================================================================================
     1. CSS STYLES, RESPONSIVE.CSS, INLINE OVERRIDES & FONTS INJECTION
     ========================================================================================= */
  function injectStylesAndFonts() {
    // 1.1 Google Fonts (Inter)
    if (
      !document.querySelector(
        'link[href*="fonts.googleapis.com/css2?family=Inter"]',
      )
    ) {
      const preconnect1 = document.createElement("link");
      preconnect1.rel = "preconnect";
      preconnect1.href = "https://fonts.googleapis.com";
      document.head.appendChild(preconnect1);

      const preconnect2 = document.createElement("link");
      preconnect2.rel = "preconnect";
      preconnect2.href = "https://fonts.gstatic.com";
      preconnect2.crossOrigin = "anonymous";
      document.head.appendChild(preconnect2);

      const fontLink = document.createElement("link");
      fontLink.rel = "stylesheet";
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap";
      document.head.appendChild(fontLink);
    }

    // 1.2 Font Awesome 6.5.1
    if (
      !document.querySelector('link[href*="font-awesome"]') &&
      !document.querySelector('link[href*="fontawesome"]')
    ) {
      const faLink = document.createElement("link");
      faLink.rel = "stylesheet";
      faLink.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
      document.head.appendChild(faLink);
    }

    // 1.3 Auto-link responsive.css if not already present
    if (!document.querySelector('link[href*="responsive.css"]')) {
      const respLink = document.createElement("link");
      respLink.rel = "stylesheet";
      respLink.href = "responsive.css";
      document.head.appendChild(respLink);
    }

    // 1.4 Guaranteed High-Priority Mobile Drawer Style Tag (Injected at End of Head)
    let dynamicStyle = document.getElementById("isms-dynamic-mobile-override");
    if (!dynamicStyle) {
      dynamicStyle = document.createElement("style");
      dynamicStyle.id = "isms-dynamic-mobile-override";
      document.head.appendChild(dynamicStyle);
    }

    dynamicStyle.textContent = `
      @media (min-width: 1201px) {
        html body .main-nav > a,
        html body .nav-dropdown-toggle {
          position: relative !important;
          border-bottom: none !important;
        }

        html body .main-nav > a::after,
        html body .nav-dropdown-toggle::after {
          content: '' !important;
          position: absolute !important;
          bottom: 4px !important;
          left: 11px !important;
          right: 11px !important;
          height: 3px !important;
          background-color: #0D47D8 !important;
          transform: scaleX(0) !important;
          transition: transform 0.2s ease !important;
          transform-origin: center !important;
          border-radius: 2px !important;
        }

        html body .main-nav > a:hover::after,
        html body .main-nav > a.active::after,
        html body .nav-dropdown:hover > .nav-dropdown-toggle::after,
        html body .nav-dropdown-toggle.active::after {
          transform: scaleX(1) !important;
        }

        html body .main-nav > a:hover,
        html body .main-nav > a.active,
        html body .nav-dropdown:hover > .nav-dropdown-toggle,
        html body .nav-dropdown-toggle.active {
          background: transparent !important;
          border-bottom: none !important;
        }

        html body .main-nav .nav-dropdown-menu a,
        html body .main-nav .dest-mega-menu a,
        html body .main-nav .uni-drop-menu a {
          border-bottom: none !important;
        }
      }

      @media (max-width: 1200px) {
        html body .site-header,
        html body #siteHeader {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          width: 100% !important;
          height: 72px !important;
          z-index: 10000 !important;
          background: #F4F8FF !important;
          border-bottom: 1px solid #DCE5F3 !important;
        }

        html body .site-header .header-actions .header-phone,
        html body .site-header .header-actions .btn,
        html body #siteHeader .header-actions .header-phone,
        html body #siteHeader .header-actions .btn {
          display: none !important;
        }

        html body .site-header .main-nav,
        html body #siteHeader #mainNav,
        html body .main-nav,
        html body #mainNav {
          position: fixed !important;
          top: 72px !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          width: 100% !important;
          height: calc(100vh - 72px) !important;
          height: calc(100dvh - 72px) !important;
          max-height: calc(100vh - 72px) !important;
          max-height: calc(100dvh - 72px) !important;
          background: #FFFFFF !important;
          flex-direction: column !important;
          align-items: stretch !important;
          justify-content: flex-start !important;
          padding: 16px 16px 120px 16px !important;
          gap: 4px !important;
          overflow-y: scroll !important;
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior-y: contain !important;
          touch-action: pan-y !important;
          transform: translateX(100%) !important;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
          z-index: 9999 !important;
          display: flex !important;
          box-sizing: border-box !important;
        }

        html body .site-header .main-nav.open,
        html body #siteHeader #mainNav.open,
        html body .main-nav.open,
        html body #mainNav.open {
          transform: translateX(0) !important;
          visibility: visible !important;
          opacity: 1 !important;
          pointer-events: auto !important;
        }

        html body .main-nav a:not(.dest-drop-item):not(.uni-drop-item):not(.mobile-phone-btn):not(.mobile-cta-btn),
        html body .nav-dropdown-toggle {
          display: flex !important;
          width: 100% !important;
          padding: 12px 14px !important;
          font-size: 14.5px !important;
          font-weight: 600 !important;
          color: #11172A !important;
          border-bottom: 1px solid #EEF2F6 !important;
          border-radius: 8px !important;
          background: transparent !important;
          box-sizing: border-box !important;
          flex-shrink: 0 !important;
          text-decoration: none !important;
          visibility: visible !important;
          opacity: 1 !important;
          justify-content: space-between !important;
          align-items: center !important;
        }

        html body .nav-dropdown {
          width: 100% !important;
          display: flex !important;
          flex-direction: column !important;
          position: static !important;
          flex-shrink: 0 !important;
        }

        html body .nav-dropdown:not(.open) > .nav-dropdown-menu,
        html body .nav-dropdown:not(.open) > .dest-mega-menu,
        html body .nav-dropdown:not(.open) > .uni-drop-menu {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          height: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          overflow: hidden !important;
          pointer-events: none !important;
        }

        html body .nav-dropdown.open > .nav-dropdown-menu,
        html body .nav-dropdown.open > .dest-mega-menu,
        html body .nav-dropdown.open > .uni-drop-menu {
          display: flex !important;
          flex-direction: column !important;
          position: static !important;
          transform: none !important;
          -webkit-transform: none !important;
          left: auto !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          width: 100% !important;
          min-width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          max-height: none !important;
          overflow: visible !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
          background: #F8FAFC !important;
          border: 1.5px solid #E2E8F0 !important;
          border-left: 3px solid #0D47D8 !important;
          border-radius: 10px !important;
          padding: 6px !important;
          margin: 4px 0 8px 0 !important;
          gap: 4px !important;
          box-sizing: border-box !important;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03) !important;
        }
      }
    `;
  }

  /* =========================================================================================
     2. EXACT HOMEPAGE HEADER TEMPLATE HTML (WITH REORDERED PRIORITY DESTINATIONS)
     ========================================================================================= */
  function getHeaderHTML() {
    return `
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <img src="assets/logo.png" alt="ISMS Global Education Logo" class="brand-logo-img">
      </a>

      <nav class="main-nav" id="mainNav">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <div class="nav-dropdown">
          <a href="Study_Destination.html" class="nav-dropdown-toggle">Study Destinations <i class="fa-solid fa-chevron-down"></i></a>
          <div class="nav-dropdown-menu dest-mega-menu">
            <!-- 1. UK -->
            <a href="uk-destination.html" class="dest-drop-item">
              <img src="assets/flag_w40_gb.png" alt="UK Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>United Kingdom</strong>
                <span>Top-ranked universities</span>
              </div>
            </a>
            <!-- 2. Ireland -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_ie.png" alt="Ireland Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Ireland</strong>
                <span>EU residency gateway</span>
              </div>
            </a>
            <!-- 3. Dubai -->
            <a href="dubai-destination.html" class="dest-drop-item">
              <img src="assets/flag_w40_ae.png" alt="Dubai Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Dubai</strong>
                <span>Global business hub</span>
              </div>
            </a>
            <!-- 4. France -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_fr.png" alt="France Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>France</strong>
                <span>Art, culture &amp; innovation</span>
              </div>
            </a>
            <!-- 5. Germany -->
            <a href="germany-destination.html" class="dest-drop-item">
              <img src="assets/flag_w40_de.png" alt="Germany Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Germany</strong>
                <span>Engineering excellence</span>
              </div>
            </a>
            <!-- 6. Australia -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_au.png" alt="Australia Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Australia</strong>
                <span>World-class education</span>
              </div>
            </a>
            <!-- 7. Spain -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_es.png" alt="Spain Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Spain</strong>
                <span>Vibrant student culture</span>
              </div>
            </a>
            <!-- 8. Netherlands -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_nl.png" alt="Netherlands Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Netherlands</strong>
                <span>English-taught programmes</span>
              </div>
            </a>
            <!-- 9. New Zealand -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_nz.png" alt="New Zealand Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>New Zealand</strong>
                <span>Safe, scenic, welcoming</span>
              </div>
            </a>
            <!-- 10. USA -->
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_us.png" alt="USA Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>USA</strong>
                <span>Leading research institutions</span>
              </div>
            </a>
            <!-- Canada (Commented Out)
            <a href="index.html#destinations" class="dest-drop-item">
              <img src="assets/flag_w40_ca.png" alt="Canada Flag" class="dest-drop-flag">
              <div class="dest-drop-text">
                <strong>Canada</strong>
                <span>Post-study work &amp; PR</span>
              </div>
            </a>
            -->
          </div>
        </div>

        <div class="nav-dropdown">
          <a href="universities.html" class="nav-dropdown-toggle">Universities <i class="fa-solid fa-chevron-down"></i></a>
          <div class="nav-dropdown-menu uni-drop-menu">
            <a href="universities.html" class="uni-drop-item">
              <i class="fa-solid fa-globe uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Browse by Country</strong><span>Find universities by destination</span></div>
            </a>
            <a href="universities.html?filter=ranking" class="uni-drop-item">
              <i class="fa-solid fa-ranking-star uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Browse by Ranking</strong><span>Top QS &amp; World ranked universities</span></div>
            </a>
            <a href="universities.html?filter=course" class="uni-drop-item">
              <i class="fa-solid fa-book-open uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Browse by Course</strong><span>Find universities by your subject</span></div>
            </a>
            <a href="universities.html?filter=top25" class="uni-drop-item">
              <i class="fa-solid fa-award uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Top 25 Universities</strong><span>World's best institutions</span></div>
            </a>
          </div>
        </div>

        <a href="services.html">Services</a>
        <a href="ielts.html">IELTS</a>

        <div class="nav-dropdown">
          <a href="#" class="nav-dropdown-toggle">Resources <i class="fa-solid fa-chevron-down"></i></a>
          <div class="nav-dropdown-menu">
            <a href="Blog.html" class="uni-drop-item">
              <i class="fa-regular fa-newspaper uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Blog</strong><span>Articles &amp; study abroad guides</span></div>
            </a>
            <a href="index.html#testimonials" class="uni-drop-item">
              <i class="fa-solid fa-graduation-cap uni-drop-icon"></i>
              <div class="uni-drop-text"><strong>Success Stories</strong><span>Real student achievements</span></div>
            </a>
          </div>
        </div>

        <a href="contact.html">Contact Us</a>

        <!-- Mobile Drawer Action Buttons -->
        <div class="mobile-nav-actions">
          <a href="tel:+919561776600" class="mobile-phone-btn">
            <i class="fa-solid fa-phone"></i>
            <span>Call Now</span>
          </a>
          <a href="index.html#contact" class="btn btn-primary open-counselling-modal mobile-cta-btn">Get FREE Counselling</a>
        </div>
      </nav>

      <div class="header-actions">
        <a href="tel:+919561776600" class="header-phone">
          <i class="fa-solid fa-phone"></i>
          <span><strong>Call Now</strong></span>
        </a>
        <a href="index.html#contact" class="btn btn-primary btn-sm open-counselling-modal" style="font-size:12px; padding: 0 14px; height: 36px;">Get FREE Counselling</a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    `;
  }

  /* =========================================================================================
     3. EXACT ORIGINAL HOMEPAGE FOOTER TEMPLATE HTML
     ========================================================================================= */
  function getFooterHTML() {
    return `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo logo-footer">
          <img src="assets/logo.png" alt="ISMS Global Education Logo" class="brand-logo-img footer-logo-img">
        </a>
        <p>ISMS Global is your trusted partner for studying abroad. We provide end-to-end support for admissions, visas, scholarships and a successful international education journey.</p>
        <ul class="footer-highlights">
          <li>
            <i class="fa-solid fa-earth-americas"></i>
            <div><strong>Global Expertise</strong><span>Years of experience in international education and student success.</span></div>
          </li>
          <li>
            <i class="fa-solid fa-user-group"></i>
            <div><strong>Student First</strong><span>Personalized guidance and support at every step of your journey.</span></div>
          </li>
          <li>
            <i class="fa-solid fa-shield-halved"></i>
            <div><strong>Integrity &amp; Trust</strong><span>Transparent processes and honest advice you can rely on.</span></div>
          </li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Our Services</a></li>
          <li><a href="study-abroad-counselling.html">Study Abroad Counselling</a></li>
          <li><a href="index.html#destinations">Study Destinations</a></li>
          <li><a href="universities.html">Universities</a></li>
          <li><a href="courses.html">Courses</a></li>
          <li><a href="Scholarship.html">Scholarships</a></li>
          <li><a href="Blog.html">Blogs &amp; Resources</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="sitemap.html">Sitemap</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Study Destinations</h5>
        <ul>
          <!-- 1. UK -->
          <li><a href="uk-destination.html"><img src="assets/flag_w40_gb.png" class="flag-icon" alt="UK Flag"> UK</a></li>
          <!-- 2. Ireland -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_ie.png" class="flag-icon" alt="Ireland Flag"> Ireland</a></li>
          <!-- 3. Dubai -->
          <li><a href="dubai-destination.html"><img src="assets/flag_w40_ae.png" class="flag-icon" alt="Dubai Flag"> Dubai</a></li>
          <!-- 4. France -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_fr.png" class="flag-icon" alt="France Flag"> France</a></li>
          <!-- 5. Germany -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_de.png" class="flag-icon" alt="Germany Flag"> Germany</a></li>
          <!-- 6. Australia -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_au.png" class="flag-icon" alt="Australia Flag"> Australia</a></li>
          <!-- 7. Spain -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_es.png" class="flag-icon" alt="Spain Flag"> Spain</a></li>
          <!-- 8. Netherlands -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_nl.png" class="flag-icon" alt="Netherlands Flag"> Netherlands</a></li>
          <!-- 9. New Zealand -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_nz.png" class="flag-icon" alt="New Zealand Flag"> New Zealand</a></li>
          <!-- 10. USA -->
          <li><a href="index.html#destinations"><img src="assets/flag_w40_us.png" class="flag-icon" alt="USA Flag"> USA</a></li>
          <!-- Canada (Commented Out)
          <li><a href="index.html#destinations"><img src="assets/flag_w40_ca.png" class="flag-icon" alt="Canada Flag"> Canada</a></li>
          -->
        </ul>
      </div>

      <div class="footer-col">
        <h5>Popular Courses</h5>
        <ul>
          <li><a href="courses.html">Business &amp; Management</a></li>
          <li><a href="courses.html">Engineering</a></li>
          <li><a href="courses.html">Information Technology</a></li>
          <li><a href="courses.html">Health &amp; Medicine</a></li>
          <li><a href="courses.html">Data Science &amp; AI</a></li>
          <li><a href="courses.html">Hospitality Management</a></li>
          <li><a href="courses.html">Design &amp; Media</a></li>
          <li><a href="courses.html">Law</a></li>
          <li><a href="courses.html">Finance &amp; Accounting</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Our Services</h5>
        <ul>
          <li><a href="services.html#step-01">University Selection</a></li>
          <li><a href="services.html#step-02">Admission Guidance</a></li>
          <li><a href="services.html#step-05">Visa Assistance</a></li>
          <li><a href="services.html#step-04">Scholarships &amp; Loans</a></li>
          <li><a href="services.html#step-03">Accommodation</a></li>
          <li><a href="services.html#step-03">Pre-Departure Support</a></li>
          <li><a href="study-abroad-counselling.html">Study Abroad Counselling</a></li>
          <li><a href="services.html">Post Arrival Support</a></li>
          <li><a href="study-abroad-counselling.html">Career Guidance</a></li>
        </ul>
      </div>

      <div class="footer-col footer-newsletter">
        <h5>Newsletter</h5>
        <p>Stay updated with the latest study abroad news, scholarships, events and useful resources.</p>
        <form class="newsletter-form" onsubmit="event.preventDefault(); alert('Thank you for subscribing to ISMS Global Newsletter!');">
          <input type="email" placeholder="Enter your email address" required>
          <button type="submit" aria-label="Subscribe"><i class="fa-solid fa-paper-plane"></i></button>
        </form>
        <label class="checkbox-row small">
          <input type="checkbox" checked>
          <span>I agree to receive emails from ISMS Global.</span>
        </label>
        <h6>Follow Us</h6>
        <div class="social-row">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
          <a href="https://wa.me/917066028888" target="_blank" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
        <div class="need-help-card">
          <i class="fa-solid fa-headset"></i>
          <div>
            <strong>Need Help? Talk to our experts</strong>
            <span>+91 70660 28888</span>
            <small>Mon – Sat | 9AM – 7PM IST</small>
          </div>
        </div>
      </div>
    </div>

    <div class="container footer-offices">
      <div class="offices-col">
        <h5>Our Offices</h5>
        <div class="office">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>India – Head Office</strong>
            <span>ISMS Global Education Pvt. Ltd. Baner, Pune, Maharashtra 411045, India</span>
            <small>info@ismsglobal.org | +91 70660 28888</small>
          </div>
        </div>
        <div class="office">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>UK Office</strong>
            <span>85 Great Portland Street, London, W1W 7LT, United Kingdom</span>
            <small>uk@ismsglobal.org | +44 20 4566 0470</small>
          </div>
        </div>
        <div class="office">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>Canada Office</strong>
            <span>100 Consilium Place, Suite 200, Scarborough, ON M1H 3E3, Canada</span>
            <small>canada@ismsglobal.org | +1 437 800 3888</small>
          </div>
        </div>
      </div>

      <div class="offices-col">
        <h5>Accreditations &amp; Partnerships</h5>
        <div class="accred-grid">
          <div class="accred-badge"><i class="fa-solid fa-circle-nodes"></i>ICEF<small>Connect. Recruit. Grow.</small></div>
          <div class="accred-badge"><i class="fa-regular fa-circle"></i>British Council<small>Certified Agent</small></div>
          <div class="accred-badge"><i class="fa-solid fa-award"></i>QEAC Australia<small>Qualified Education Agent</small></div>
          <div class="accred-badge"><i class="fa-solid fa-award"></i>AAERI<small>Member</small></div>
          <div class="accred-badge"><i class="fa-solid fa-compass"></i>PIER<small>Professional Int'l Education</small></div>
          <div class="accred-badge"><i class="fa-solid fa-globe"></i>WEBA<small>Education &amp; Branding</small></div>
        </div>
      </div>

      <div class="offices-col">
        <h5>Why Choose ISMS Global?</h5>
        <div class="mini-stat-grid">
          <div><strong>10,000+</strong><span>Students Guided</span></div>
          <div><strong>500+</strong><span>Partner Universities</span></div>
          <div><strong>15+</strong><span>Countries</span></div>
          <div><strong>17+</strong><span>Years of Excellence</span></div>
        </div>
        <div class="google-badge">
          <span>We are rated 4.9 out of 5</span>
          <div>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <span>Based on 200+ Google Reviews</span>
        </div>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>&copy; <span id="year">${new Date().getFullYear()}</span> ISMS Global Education Pvt. Ltd. All Rights Reserved.</span>
      <nav>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="privacy-policy.html#terms">Terms &amp; Conditions</a>
        <a href="privacy-policy.html#refund">Refund Policy</a>
        <a href="privacy-policy.html#cookies">Cookie Policy</a>
        <a href="sitemap.html">Sitemap</a>
      </nav>
    </div>
    `;
  }

  /* =========================================================================================
     4. MODAL & FLOATING BUTTONS HTML
     ========================================================================================= */
  function getModalAndFabsHTML() {
    return `
    <a href="https://wa.me/917066028888" class="whatsapp-fab" target="_blank" aria-label="Chat on WhatsApp">
      <i class="fa-brands fa-whatsapp"></i>
    </a>

    <button class="scroll-top-fab" id="scrollTopBtn" aria-label="Scroll to top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
      <i class="fa-solid fa-arrow-up"></i>
    </button>

    <div class="counselling-modal-overlay" id="counsellingModalOverlay" style="position: fixed; inset: 0; background: rgba(15, 23, 42, 0.75); backdrop-filter: blur(4px); z-index: 100000; display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: all 0.3s ease; padding: 20px; box-sizing: border-box;">
      <div class="counselling-modal" style="background: #ffffff; width: 100%; max-width: 520px; border-radius: 20px; box-shadow: 0 25px 50px rgba(0,0,0,0.25); overflow: hidden; position: relative;">
        <div style="background: linear-gradient(135deg, #0D47D8 0%, #032B8C 100%); color: #ffffff; padding: 24px 28px; position: relative;">
          <button type="button" id="modalCloseBtn" style="position: absolute; top: 18px; right: 20px; background: rgba(255,255,255,0.2); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 700;">&times;</button>
          <h3 style="font-size: 20px; font-weight: 800; margin: 0 0 4px; color: #fff;">Get FREE Counselling</h3>
          <p style="font-size: 13px; color: rgba(255,255,255,0.85); margin: 0;">Speak with our senior overseas education experts today.</p>
        </div>
        <div style="padding: 26px 28px;">
          <form id="modalCounsellingForm" onsubmit="event.preventDefault(); alert('Thank you! Your request for free counselling has been received. Our expert will contact you shortly.'); document.getElementById('counsellingModalOverlay').style.opacity='0'; document.getElementById('counsellingModalOverlay').style.visibility='hidden';">
            <div style="margin-bottom: 14px;">
              <label style="display: block; font-size: 12.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">Full Name *</label>
              <input type="text" style="width: 100%; padding: 12px 14px; border: 1.5px solid #E2E8F0; border-radius: 10px; font-size: 14px; box-sizing: border-box;" placeholder="Enter your full name" required>
            </div>
            <div style="margin-bottom: 14px;">
              <label style="display: block; font-size: 12.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">Email Address *</label>
              <input type="email" style="width: 100%; padding: 12px 14px; border: 1.5px solid #E2E8F0; border-radius: 10px; font-size: 14px; box-sizing: border-box;" placeholder="Enter your email" required>
            </div>
            <div style="margin-bottom: 14px;">
              <label style="display: block; font-size: 12.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">Phone Number *</label>
              <input type="tel" style="width: 100%; padding: 12px 14px; border: 1.5px solid #E2E8F0; border-radius: 10px; font-size: 14px; box-sizing: border-box;" placeholder="Enter 10-digit mobile number" required>
            </div>
            <div style="margin-bottom: 18px;">
              <label style="display: block; font-size: 12.5px; font-weight: 700; color: #1E293B; margin-bottom: 6px;">Preferred Study Destination</label>
              <select style="width: 100%; padding: 12px 14px; border: 1.5px solid #E2E8F0; border-radius: 10px; font-size: 14px; box-sizing: border-box; background: #fff;">
                <option>United Kingdom</option>
                <option>Ireland</option>
                <option>Dubai</option>
                <option>France</option>
                <option>Germany</option>
                <option>Australia</option>
                <option>Spain</option>
                <option>Netherlands</option>
                <option>New Zealand</option>
                <option>USA</option>
              </select>
            </div>
            <button type="submit" style="width: 100%; background: #C79A3C; color: #fff; border: none; padding: 14px; border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer; transition: background 0.2s ease;">Book My Free Session</button>
          </form>
        </div>
      </div>
    </div>
    `;
  }

  /* =========================================================================================
     5. INJECTION ENGINE
     ========================================================================================= */
  function injectHeader() {
    let headerEl =
      document.getElementById("siteHeader") ||
      document.querySelector("header.site-header") ||
      document.getElementById("header");
    if (!headerEl) {
      headerEl = document.createElement("header");
      headerEl.className = "site-header";
      headerEl.id = "siteHeader";
      document.body.insertBefore(headerEl, document.body.firstChild);
    } else {
      headerEl.className = "site-header";
      headerEl.id = "siteHeader";
    }
    headerEl.innerHTML = getHeaderHTML();
  }

  function injectFooter() {
    let footerEl =
      document.getElementById("siteFooter") ||
      document.querySelector("footer.site-footer") ||
      document.querySelector("footer") ||
      document.getElementById("footer");
    if (!footerEl) {
      footerEl = document.createElement("footer");
      footerEl.className = "site-footer";
      footerEl.id = "siteFooter";
      document.body.appendChild(footerEl);
    } else {
      footerEl.className = "site-footer";
      footerEl.id = "siteFooter";
    }
    footerEl.innerHTML = getFooterHTML();
  }

  function injectModalsAndFabs() {
    if (!document.getElementById("counsellingModalOverlay")) {
      const container = document.createElement("div");
      container.id = "isms-injected-modals-and-fabs";
      container.innerHTML = getModalAndFabsHTML();
      document.body.appendChild(container);
    }
  }

  /* =========================================================================================
     6. PRECISE ACTIVE LINK HIGHLIGHTING (ONLY THE CURRENTLY OPENED PAGE)
     ========================================================================================= */
  function setActiveNavLink() {
    let currentFile = window.location.pathname
      .split("/")
      .pop()
      .split("?")[0]
      .split("#")[0]
      .toLowerCase();
    if (!currentFile || currentFile === "" || currentFile === "/") {
      currentFile = "index.html";
    }
    try {
      currentFile = decodeURIComponent(currentFile);
    } catch (e) {}

    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    document
      .querySelectorAll(".nav-dropdown-toggle")
      .forEach((t) => t.classList.remove("active"));

    // 6.1 Homepage: ONLY match exact "Home" (index.html) link
    if (currentFile === "index.html") {
      navLinks.forEach((link) => {
        const rawHref = link.getAttribute("href");
        if (rawHref === "index.html") {
          link.classList.add("active");
        }
      });
      return;
    }

    // 6.2 Destination Pages: Highlight destination item + Study Destinations toggle
    if (
      currentFile.includes("destination") ||
      currentFile.includes("dubai") ||
      currentFile.includes("uk-")
    ) {
      navLinks.forEach((link) => {
        const rawHref = link.getAttribute("href");
        if (!rawHref) return;
        let linkFile = rawHref.split("?")[0].split("#")[0].toLowerCase();
        try {
          linkFile = decodeURIComponent(linkFile);
        } catch (e) {}

        if (linkFile === currentFile && !rawHref.includes("#")) {
          link.classList.add("active");
        }
      });
      const destToggle = document.querySelector(
        '.nav-dropdown-toggle[href*="Destination"], .nav-dropdown-toggle[href*="destination"]',
      );
      if (destToggle) destToggle.classList.add("active");
      return;
    }

    // 6.3 University Pages: Highlight Universities toggle
    if (currentFile.includes("universit")) {
      const uniToggle = document.querySelector(
        '.nav-dropdown-toggle[href*="universities"]',
      );
      if (uniToggle) uniToggle.classList.add("active");
      return;
    }

    // 6.4 General Pages: Match exact file without # hash anchors
    navLinks.forEach((link) => {
      const rawHref = link.getAttribute("href");
      if (
        !rawHref ||
        rawHref === "#" ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("mailto:")
      )
        return;
      if (rawHref.includes("#") && !rawHref.endsWith("#")) return;

      let linkFile = rawHref.split("?")[0].split("#")[0].toLowerCase();
      try {
        linkFile = decodeURIComponent(linkFile);
      } catch (e) {}

      if (linkFile === currentFile) {
        link.classList.add("active");
        const parentDropdown = link.closest(".nav-dropdown");
        if (parentDropdown) {
          const toggle = parentDropdown.querySelector(".nav-dropdown-toggle");
          if (toggle && toggle !== link) toggle.classList.add("active");
        }
      }
    });
  }

  /* =========================================================================================
     7. ROBUST CAPTURE-PHASE EVENT LISTENERS & ZERO-JUMP ACCORDIONS
     ========================================================================================= */
  function applyDropdownVisibility(parent, isOpen) {
    const dropMenu = parent.querySelector(
      ".nav-dropdown-menu, .dest-mega-menu, .uni-drop-menu",
    );
    if (dropMenu) {
      if (isOpen) {
        dropMenu.style.setProperty("display", "flex", "important");
        dropMenu.style.setProperty("flex-direction", "column", "important");
        dropMenu.style.setProperty("position", "static", "important");
        dropMenu.style.setProperty("transform", "none", "important");
        dropMenu.style.setProperty("-webkit-transform", "none", "important");
        dropMenu.style.setProperty("top", "auto", "important");
        dropMenu.style.setProperty("left", "auto", "important");
        dropMenu.style.setProperty("right", "auto", "important");
        dropMenu.style.setProperty("bottom", "auto", "important");
        dropMenu.style.setProperty("width", "100%", "important");
        dropMenu.style.setProperty("min-width", "100%", "important");
        dropMenu.style.setProperty("max-width", "100%", "important");
        dropMenu.style.setProperty("max-height", "none", "important");
        dropMenu.style.setProperty("height", "auto", "important");
        dropMenu.style.setProperty("overflow", "visible", "important");
        dropMenu.style.setProperty("opacity", "1", "important");
        dropMenu.style.setProperty("visibility", "visible", "important");
        dropMenu.style.setProperty("pointer-events", "auto", "important");
        dropMenu.style.setProperty("box-sizing", "border-box", "important");
      } else {
        dropMenu.style.setProperty("display", "none", "important");
        dropMenu.style.setProperty("opacity", "0", "important");
        dropMenu.style.setProperty("visibility", "hidden", "important");
        dropMenu.style.setProperty("pointer-events", "none", "important");
      }
    }
  }

  function bindEvents() {
    // Ensure Hamburger Button has 3 spans
    document.querySelectorAll(".nav-toggle, #navToggle").forEach((btn) => {
      if (!btn.querySelector("span")) {
        btn.innerHTML = "<span></span><span></span><span></span>";
      }
    });

    // 7.1 Global Delegated Click Listener in Capture Phase
    document.addEventListener(
      "click",
      function (e) {
        // 1. Toggle Hamburger Menu Button
        const toggleBtn = e.target.closest("#navToggle, .nav-toggle");
        if (toggleBtn) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          const mainNav =
            document.getElementById("mainNav") ||
            document.querySelector(".main-nav");
          if (mainNav) {
            const isNowOpen = mainNav.classList.toggle("open");
            toggleBtn.classList.toggle("active", isNowOpen);
            toggleBtn.setAttribute(
              "aria-expanded",
              isNowOpen ? "true" : "false",
            );
            if (isNowOpen) {
              mainNav.scrollTop = 0; // Always start clean at the top so Home & About Us are visible
            }
          }
          return;
        }

        // 2. Mobile Dropdown Accordion Toggle (Open AND Close in place with ZERO unexpected jumps)
        const dropToggle = e.target.closest(
          ".nav-dropdown-toggle, .dropdown-toggle",
        );
        if (dropToggle && window.innerWidth <= 1200) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();

          const parent =
            dropToggle.closest(".nav-dropdown") || dropToggle.parentElement;
          if (parent) {
            const isAlreadyOpen = parent.classList.contains("open");

            // Close all other dropdowns
            document.querySelectorAll(".nav-dropdown.open").forEach((el) => {
              if (el !== parent) {
                el.classList.remove("open");
                applyDropdownVisibility(el, false);
              }
            });

            // Toggle this dropdown: If already open -> Close it! If closed -> Open it!
            if (isAlreadyOpen) {
              parent.classList.remove("open");
              applyDropdownVisibility(parent, false);
            } else {
              parent.classList.add("open");
              applyDropdownVisibility(parent, true);
            }
          }
          return;
        }

        // 3. Navigation leaf links close the menu drawer
        const navLink = e.target.closest(
          ".main-nav a:not(.nav-dropdown-toggle)",
        );
        if (navLink && window.innerWidth <= 1200) {
          const mainNav =
            document.getElementById("mainNav") ||
            document.querySelector(".main-nav");
          const navToggle =
            document.getElementById("navToggle") ||
            document.querySelector(".nav-toggle");
          if (mainNav) mainNav.classList.remove("open");
          if (navToggle) {
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
          }
        }

        // 4. Clicking outside mainNav closes mobile menu
        const mainNav =
          document.getElementById("mainNav") ||
          document.querySelector(".main-nav");
        if (mainNav && mainNav.classList.contains("open")) {
          const navToggle =
            document.getElementById("navToggle") ||
            document.querySelector(".nav-toggle");
          if (
            !mainNav.contains(e.target) &&
            (!navToggle || !navToggle.contains(e.target))
          ) {
            mainNav.classList.remove("open");
            if (navToggle) {
              navToggle.classList.remove("active");
              navToggle.setAttribute("aria-expanded", "false");
            }
          }
        }

        // 5. Open Counselling Modal
        const counselBtn = e.target.closest(
          'a[href*="#contact"], a[href*="#consultation"], .open-counselling-modal, .mobile-cta-btn',
        );
        if (
          counselBtn &&
          (counselBtn.textContent.indexOf("Counselling") !== -1 ||
            counselBtn.classList.contains("open-counselling-modal") ||
            counselBtn.classList.contains("mobile-cta-btn"))
        ) {
          e.preventDefault();
          const modal = document.getElementById("counsellingModalOverlay");
          if (modal) {
            modal.style.opacity = "1";
            modal.style.visibility = "visible";
          }
        }

        // 6. Close Counselling Modal
        if (
          e.target.id === "modalCloseBtn" ||
          e.target.id === "counsellingModalOverlay"
        ) {
          const modal = document.getElementById("counsellingModalOverlay");
          if (modal) {
            modal.style.opacity = "0";
            modal.style.visibility = "hidden";
          }
        }
      },
      true,
    ); // TRUE = CAPTURE PHASE

    // 7.2 Escape Key Handler
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        const mainNav =
          document.getElementById("mainNav") ||
          document.querySelector(".main-nav");
        const navToggle =
          document.getElementById("navToggle") ||
          document.querySelector(".nav-toggle");
        if (mainNav && mainNav.classList.contains("open")) {
          mainNav.classList.remove("open");
          if (navToggle) {
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
        const modal = document.getElementById("counsellingModalOverlay");
        if (modal && modal.style.visibility === "visible") {
          modal.style.opacity = "0";
          modal.style.visibility = "hidden";
        }
      }
    });

    // 7.3 Window Resize Handler
    window.addEventListener(
      "resize",
      function () {
        if (window.innerWidth > 1200) {
          const mainNav =
            document.getElementById("mainNav") ||
            document.querySelector(".main-nav");
          const navToggle =
            document.getElementById("navToggle") ||
            document.querySelector(".nav-toggle");
          if (mainNav) mainNav.classList.remove("open");
          if (navToggle) {
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
      },
      { passive: true },
    );

    // 7.4 Dynamic Year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  /* =========================================================================================
     8. INITIALIZATION RUNNER
     ========================================================================================= */
  function init() {
    injectStylesAndFonts();
    injectHeader();
    injectFooter();
    injectModalsAndFabs();
    setActiveNavLink();
    bindEvents();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.ISMS = {
    injectHeader: injectHeader,
    injectFooter: injectFooter,
    injectModals: injectModalsAndFabs,
    injectStyles: injectStylesAndFonts,
    init: init,
  };
})();
