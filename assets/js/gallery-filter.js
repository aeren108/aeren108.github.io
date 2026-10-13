document.addEventListener('DOMContentLoaded', function () {
  var filterNav = document.querySelector('.year-filter-nav');
  var photoStream = document.querySelector('.photo-stream');
  if (!filterNav || !photoStream) return;

  var filterBtns = filterNav.querySelectorAll('.filter-btn');

  function applyFilter(selectedYear, updateHash) {
    // 1. Update button states
    filterBtns.forEach(function (btn) {
      if (btn.getAttribute('data-year') === selectedYear) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });

    // 2. Filter photo cards and roll elements
    var items = photoStream.querySelectorAll('[data-year]');
    items.forEach(function (item) {
      var itemYear = item.getAttribute('data-year');
      if (selectedYear === 'all' || itemYear === selectedYear) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    // 3. Update URL hash if requested
    if (updateHash) {
      var newHash = selectedYear === 'all' ? '#all' : '#' + selectedYear;
      if (window.location.hash !== newHash) {
        history.pushState(null, '', newHash);
      }
    }
  }

  // Handle button clicks
  filterNav.addEventListener('click', function (e) {
    var btn = e.target.closest('.filter-btn');
    if (!btn) return;

    e.preventDefault();
    var year = btn.getAttribute('data-year');
    applyFilter(year, true);
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function () {
    var hash = window.location.hash.replace('#', '');
    if (hash === '2026' || hash === '2025' || hash === '2024') {
      applyFilter(hash, false);
    } else {
      applyFilter('all', false);
    }
  });

  // Initial load check from hash
  var initialHash = window.location.hash.replace('#', '');
  if (initialHash === '2026' || initialHash === '2025' || initialHash === '2024') {
    applyFilter(initialHash, false);
  } else {
    applyFilter('all', false);
  }

  // Floating back to top button
  var backToTop = document.getElementById('floating-back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // -------------------------------------------------------------
  // Minimal Lightbox Implementation
  // -------------------------------------------------------------
  var lightbox = document.getElementById('photo-lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('.lightbox-img');
    var lightboxCounter = lightbox.querySelector('.lightbox-counter');
    var lightboxCaptionText = lightbox.querySelector('.lightbox-caption-text');
    var lightboxCaptionMeta = lightbox.querySelector('.lightbox-caption-meta');
    var closeBtn = lightbox.querySelector('.lightbox-close');
    var prevBtn = lightbox.querySelector('.lightbox-prev');
    var nextBtn = lightbox.querySelector('.lightbox-next');
    var backdrop = lightbox.querySelector('.lightbox-backdrop');

    var currentVisibleCards = [];
    var currentIndex = -1;

    function getVisibleCards() {
      var cards = Array.from(photoStream.querySelectorAll('.photo-card'));
      return cards.filter(function (card) {
        return card.style.display !== 'none';
      });
    }

    function showPhotoAtIndex(index) {
      if (index < 0 || index >= currentVisibleCards.length) return;
      currentIndex = index;
      var card = currentVisibleCards[index];
      var link = card.querySelector('.photo-link');
      var fullImgUrl = link ? link.getAttribute('href') : '';
      var idxSpan = card.querySelector('.caption-idx');
      var metaSpan = card.querySelector('.caption-meta');
      var textSpan = card.querySelector('.caption-text');

      var idxStr = idxSpan ? idxSpan.textContent.trim() : '';
      var metaStr = metaSpan ? metaSpan.textContent.trim() : '';
      var textStr = textSpan ? textSpan.textContent.trim() : '';

      lightboxImg.src = fullImgUrl;
      lightboxCounter.textContent = idxStr + '  (' + (index + 1) + ' / ' + currentVisibleCards.length + ')';
      lightboxCaptionMeta.textContent = metaStr;
      lightboxCaptionText.textContent = textStr;
    }

    function openLightbox(card) {
      currentVisibleCards = getVisibleCards();
      var index = currentVisibleCards.indexOf(card);
      if (index === -1) index = 0;
      showPhotoAtIndex(index);
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    }

    function showPrev() {
      if (currentVisibleCards.length === 0) return;
      var prevIndex = (currentIndex - 1 + currentVisibleCards.length) % currentVisibleCards.length;
      showPhotoAtIndex(prevIndex);
    }

    function showNext() {
      if (currentVisibleCards.length === 0) return;
      var nextIndex = (currentIndex + 1) % currentVisibleCards.length;
      showPhotoAtIndex(nextIndex);
    }

    // Click on any photo-link opens the lightbox
    photoStream.addEventListener('click', function (e) {
      var link = e.target.closest('.photo-link');
      if (!link) return;
      e.preventDefault();
      var card = link.closest('.photo-card');
      if (card) openLightbox(card);
    });

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Keyboard controls: Escape, ArrowLeft, ArrowRight
    window.addEventListener('keydown', function (e) {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      } else if (e.key === 'ArrowRight') {
        showNext();
      }
    });
  }
});
