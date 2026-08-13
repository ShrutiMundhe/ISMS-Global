/* ============================================================
   PRIVACY POLICY INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. "On This Page" Smooth Scroll
  const navItems = document.querySelectorAll('.on-page-nav-item');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 140;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Scrollspy for Sidebar Links Highlighting
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;
    const sections = document.querySelectorAll('.pp-section-item');

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  });
});
