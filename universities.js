/* ============================================================
   UNIVERSITIES PAGE INTERACTIVITY SCRIPT - ISMS GLOBAL
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('uniSearchInput');
  const destSelect = document.getElementById('uniDestSelect');
  const levelSelect = document.getElementById('uniLevelSelect');
  const btnSearch = document.getElementById('btnUniSearch');
  const cardsContainer = document.getElementById('uniCardsContainer');
  const cards = document.querySelectorAll('.uni-card-item');
  const resultsCountText = document.getElementById('uniResultsCountText');
  const qsRangeInput = document.getElementById('qsRangeInput');
  const qsRangeValue = document.getElementById('qsRangeValue');

  // URL Filter params check (e.g. ?filter=top25)
  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get('filter');
  if (filterParam === 'top25' && qsRangeInput) {
    qsRangeInput.value = 25;
    if (qsRangeValue) qsRangeValue.textContent = '25';
  }

  // 1. Filter Logic
  function applyFilters() {
    const searchText = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedDest = destSelect ? destSelect.value : 'all';
    const selectedLevel = levelSelect ? levelSelect.value : 'all';
    const maxQsRank = qsRangeInput ? parseInt(qsRangeInput.value) : 500;

    let visibleCount = 0;

    cards.forEach(card => {
      const title = card.getAttribute('data-name').toLowerCase();
      const dest = card.getAttribute('data-dest');
      const level = card.getAttribute('data-level');
      const rank = parseInt(card.getAttribute('data-qs'));

      const matchesSearch = searchText === '' || title.includes(searchText);
      const matchesDest = selectedDest === 'all' || dest === selectedDest;
      const matchesLevel = selectedLevel === 'all' || level === selectedLevel || level === 'all';
      const matchesRank = rank <= maxQsRank;

      if (matchesSearch && matchesDest && matchesLevel && matchesRank) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCountText) {
      resultsCountText.textContent = `Showing 1-${visibleCount} of ${visibleCount} Universities`;
    }
  }

  if (btnSearch) btnSearch.addEventListener('click', applyFilters);
  if (searchInput) searchInput.addEventListener('input', applyFilters);
  if (destSelect) destSelect.addEventListener('change', applyFilters);
  if (levelSelect) levelSelect.addEventListener('change', applyFilters);

  // Range Slider Value Handler
  if (qsRangeInput && qsRangeValue) {
    qsRangeInput.addEventListener('input', (e) => {
      qsRangeValue.textContent = e.target.value;
      applyFilters();
    });
  }

  // 2. Bookmark Toggle Handler
  const bookmarkBtns = document.querySelectorAll('.btn-uni-bookmark');
  bookmarkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      const isSaved = btn.classList.toggle('saved');
      if (isSaved) {
        btn.style.backgroundColor = '#EEF4FF';
        if (icon) icon.className = 'fa-solid fa-bookmark';
      } else {
        btn.style.backgroundColor = '#FFFFFF';
        if (icon) icon.className = 'fa-regular fa-bookmark';
      }
    });
  });

  // 3. Grid / List View Mode Switcher
  const btnGrid = document.getElementById('btnUniGridView');
  const btnList = document.getElementById('btnUniListView');

  if (btnGrid && btnList && cardsContainer) {
    btnGrid.addEventListener('click', () => {
      btnGrid.classList.add('active');
      btnList.classList.remove('active');
      cardsContainer.classList.remove('list-view');
    });

    btnList.addEventListener('click', () => {
      btnList.classList.add('active');
      btnGrid.classList.remove('active');
      cardsContainer.classList.add('list-view');
    });
  }
});
