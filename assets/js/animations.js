// KornerShop — Scroll Reveal via Intersection Observer
// Targets any element with class "reveal"
// Usage: add class="reveal" to any element you want to animate in

const revealElements = document.querySelectorAll('.reveal');

if (revealElements.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger delay for grouped elements (cards, grids)
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        const siblingIndex = Array.from(siblings).indexOf(entry.target);
        const delay = Math.min(siblingIndex * 80, 400); // max 400ms stagger

        setTimeout(() => {
          entry.target.classList.add('is-revealed');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}