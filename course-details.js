/* ============================================================
   COURSE DETAILS INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Sub-Nav Smooth Scroll & Active State Highlighting
  const subnavItems = document.querySelectorAll('.cd-subnav-item');

  subnavItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        subnavItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 140;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scrollspy for Sub-Nav active link
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;
    const sections = document.querySelectorAll('.cd-section-box');

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

  // 2. Counselling Form Submit Handler
  const form = document.getElementById('cdCounsellingForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.btn-cd-form-submit');
      if (submitBtn) {
        submitBtn.textContent = 'Submitting...';
        setTimeout(() => {
          alert('Thank you! Our expert counsellor will reach out to you within 24 hours.');
          form.reset();
          submitBtn.textContent = 'Book Free Counselling';
        }, 800);
      }
    });
  }

  // 3. Shortlist / Bookmark Toggle
  const shortlistBtn = document.getElementById('btnShortlistCourse');
  if (shortlistBtn) {
    shortlistBtn.addEventListener('click', () => {
      const isSaved = shortlistBtn.classList.toggle('saved');
      const icon = shortlistBtn.querySelector('i');
      if (isSaved) {
        shortlistBtn.style.color = '#0D47D8';
        if (icon) icon.className = 'fa-solid fa-bookmark';
        alert('Course saved to your shortlist!');
      } else {
        shortlistBtn.style.color = '#475569';
        if (icon) icon.className = 'fa-regular fa-bookmark';
      }
    });
  }

  // 4. Copy Link Button Handler
  const copyLinkBtn = document.getElementById('btnCopyLink');
  if (copyLinkBtn) {
    copyLinkBtn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Course link copied to clipboard!');
      });
    });
  }
});
