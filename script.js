/* ============================================================
   DUMKIN — JavaScript
   ============================================================ */

'use strict';

// ---- Sticky nav shadow on scroll ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ---- Mobile burger menu ----
const burger = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  burger.classList.toggle('active', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', false);
  });
});

// ---- Scroll Reveal ----
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Apply reveal class to key sections
const revealTargets = [
  '#featured-grid .food-card',
  '.sig-card',
  '.menu-category',
  '.review-card',
  '.gallery-item',
];

document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  const delay = (i % 4);
  if (delay > 0) el.classList.add(`reveal-delay-${delay}`);
  revealObserver.observe(el);
});

// Also observe section headings
document.querySelectorAll('.section-title, .about__para, .section-sub').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ---- Active nav link on scroll ----
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav__link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(link => link.style.color = '');
      const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.style.color = 'var(--dumkin-orange)';
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));
