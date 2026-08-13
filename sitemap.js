/* ============================================================
   SITEMAP INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('sitemapSearchInput');
  const linkItems = document.querySelectorAll('.sm-link-item');
  const categoryCards = document.querySelectorAll('.sm-category-card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();

      if (query === '') {
        // Show all links and cards
        linkItems.forEach(item => item.style.display = 'flex');
        categoryCards.forEach(card => card.style.display = 'block');
        return;
      }

      categoryCards.forEach(card => {
        const cardLinks = card.querySelectorAll('.sm-link-item');
        let hasMatch = false;

        cardLinks.forEach(link => {
          const text = link.textContent.toLowerCase();
          if (text.includes(query)) {
            link.style.display = 'flex';
            hasMatch = true;
          } else {
            link.style.display = 'none';
          }
        });

        if (hasMatch) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
