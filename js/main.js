/* ═══════════════════════════════════════════════════════════
   Santiago-Pontones · Sierra de Segura · Jaén
   main.js — Scripts de interactividad
   Autor: José Francisco Martínez Martínez · 2025
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── 1. AÑO DINÁMICO EN FOOTER ───────────────────────── */
  var anioEl = document.getElementById('anio');
  if (anioEl) {
    anioEl.textContent = new Date().getFullYear();
  }

  /* ── 2. HERO BG PARALLAX / LOAD ──────────────────────── */
  window.addEventListener('load', function () {
    var heroBg = document.getElementById('heroBg');
    if (heroBg) heroBg.classList.add('loaded');
  });

  /* ── 3. NAV SCROLL EFFECT ────────────────────────────── */
  var navbar = document.getElementById('navbar');
  var lastScroll = 0;

  function onScroll() {
    var currentScroll = window.scrollY || window.pageYOffset;
    if (navbar) {
      if (currentScroll > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── 4. SMOOTH SCROLL PARA NAV LINKS ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var navH = navbar ? navbar.offsetHeight : 0;
        var targetY = target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top: targetY, behavior: 'smooth' });
      }
    });
  });

  /* ── 5. REVEAL ON SCROLL (IntersectionObserver) ──────── */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    /* Fallback: mostrar todo si no hay soporte */
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── 6. CONTADOR ANIMADO PARA TARJETAS DE DATOS ──────── */
  function animateCounter(el, target, duration) {
    var startTime = null;
    var startVal = 0;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      /* easeOut */
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(startVal + (target - startVal) * ease);
      el.textContent = current.toLocaleString('es-ES');
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString('es-ES');
      }
    }

    requestAnimationFrame(step);
  }

  var counterEls = document.querySelectorAll('[data-counter]');

  if ('IntersectionObserver' in window && counterEls.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-counter'), 10);
          var duration = parseInt(el.getAttribute('data-duration') || '1600', 10);
          animateCounter(el, target, duration);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(function (el) {
      counterObserver.observe(el);
    });
  }

  /* ── 7. MENÚ MÓVIL (HAMBURGER TOGGLE) ────────────────── */
  var menuToggle = document.getElementById('menuToggle');
  var navLinks   = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Cerrar al hacer click en un enlace */
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

})();
