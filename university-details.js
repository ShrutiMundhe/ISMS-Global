/* ============================================================
   UNIVERSITY DETAILS INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Sub-Nav Smooth Scroll
  const subnavItems = document.querySelectorAll('.ud-subnav-item');

  subnavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        subnavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 130;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Scrollspy for Sub-Nav Active State Highlighting
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 150;
    const sections = document.querySelectorAll('.ud-section-box');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        subnavItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });

  // 3. Sidebar Form Submit Handler
  const form = document.getElementById('udMiniForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-ud-form-submit');
      if (submitBtn) {
        submitBtn.textContent = 'Submitting...';
        setTimeout(() => {
          alert('Thank you! Our expert counsellor will reach out to you shortly.');
          form.reset();
          submitBtn.textContent = 'Book Free Counselling';
        }, 800);
      }
    });
  }

  // 4. Shortlist Bookmark Toggle
  const shortlistBtn = document.getElementById('btnUdShortlist');
  if (shortlistBtn) {
    shortlistBtn.addEventListener('click', () => {
      const isSaved = shortlistBtn.classList.toggle('saved');
      const icon = shortlistBtn.querySelector('i');
      if (isSaved) {
        shortlistBtn.style.color = '#0D47D8';
        if (icon) icon.className = 'fa-solid fa-bookmark';
        alert('University of Oxford saved to your shortlist!');
      } else {
        shortlistBtn.style.color = '#475569';
        if (icon) icon.className = 'fa-regular fa-bookmark';
      }
    });
  }
});
