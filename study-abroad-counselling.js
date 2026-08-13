/* ============================================================
   STUDY ABROAD COUNSELLING INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.sac-faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.sac-faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all items
        faqItems.forEach(i => i.classList.remove('active'));

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
});
