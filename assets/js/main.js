// ── NAV SCROLL BEHAVIOR ────────────────────────────

const nav = document.getElementById('nav');

function handleNavScroll() {
  if (window.scrollY > 80) {
    nav.classList.add('nav--scrolled');
    nav.classList.remove('nav--top');
  } else {
    nav.classList.add('nav--top');
    nav.classList.remove('nav--scrolled');
  }
}

// Initialize on load
handleNavScroll();
window.addEventListener('scroll', handleNavScroll, { passive: true });


// ── MOBILE MENU ────────────────────────────────────

const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

function openMenu() {
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
  isOpen ? closeMenu() : openMenu();
});

// Close on link click
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});


// ── ACTIVE NAV LINK ────────────────────────────────

const currentPage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav__links a');

navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPage ||
     (currentPage === '/' && linkPath === '/index.html')) {
    link.classList.add('active');
  }
});


// ── PAGE TRANSITION PADDING ────────────────────────
// Prevent fixed nav from overlapping page content

document.body.style.paddingTop = nav.offsetHeight + 'px';

window.addEventListener('resize', () => {
  document.body.style.paddingTop = nav.offsetHeight + 'px';
});