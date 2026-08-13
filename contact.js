/* ============================================================
   CONTACT US INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.ct-faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.ct-faq-question');
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

  // 2. Contact Form Submission Handler
  const contactForm = document.getElementById('ctEnquiryForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('.btn-submit-enquiry');
      if (submitBtn) {
        submitBtn.innerHTML = 'Submitting... <i class="fa-solid fa-spinner fa-spin"></i>';

        setTimeout(() => {
          alert('Thank you for contacting ISMS Global! Your enquiry has been submitted successfully. Our expert counsellor will reach out to you within 24 hours.');
          contactForm.reset();
          submitBtn.innerHTML = 'Submit Enquiry <i class="fa-solid fa-paper-plane"></i>';
        }, 1000);
      }
    });
  }
});
