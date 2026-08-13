/* ============================================================
   OUR SERVICES PAGE INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Stepper Bar Smooth Scroll
  const stepPills = document.querySelectorAll('.svc-step-item');

  stepPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = pill.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        stepPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Centering clicked pill horizontally inside stepper bar
        const stepperBar = document.querySelector('.svc-stepper-bar');
        if (stepperBar) {
          const barHalfWidth = stepperBar.offsetWidth / 2;
          const pillHalfWidth = pill.offsetWidth / 2;
          const scrollTarget = pill.offsetLeft - barHalfWidth + pillHalfWidth;
          stepperBar.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
          });
        }

        const offsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - 130;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // 2. Scrollspy for Stepper Bar Active State Highlighting
  let currentActiveId = null;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 160;
    const stepCards = document.querySelectorAll('.svc-step-card');

    stepCards.forEach(card => {
      const top = card.offsetTop;
      const height = card.offsetHeight;
      const id = card.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        if (currentActiveId !== id) {
          currentActiveId = id;
          stepPills.forEach(pill => {
            pill.classList.remove('active');
            if (pill.getAttribute('href') === `#${id}`) {
              pill.classList.add('active');

              // Centering active pill horizontally inside stepper bar
              const stepperBar = document.querySelector('.svc-stepper-bar');
              if (stepperBar) {
                const barHalfWidth = stepperBar.offsetWidth / 2;
                const pillHalfWidth = pill.offsetWidth / 2;
                const scrollTarget = pill.offsetLeft - barHalfWidth + pillHalfWidth;
                stepperBar.scrollTo({
                  left: scrollTarget,
                  behavior: 'smooth'
                });
              }
            }
          });
        }
      }
    });
  });
});
