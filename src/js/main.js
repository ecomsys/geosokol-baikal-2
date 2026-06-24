import '@/css/main.css'

import { BaseHelpers } from "./utils/base-helpers";
BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();

// Базовые скрипты для автомастабирования и больших экранов с dpr
// import initAutoRem from './utils/autorem';
// initAutoRem({
//   baseSiteWidth: 1440,
//   baseFontSize: 16
// });

// import { initViewport } from "@/js/utils/viewport";
// initViewport({
//   breakpoint: 1440,
//   designWidth: 1440
// });

/*======================================================================================================================
Основной js
========================================================================================================================*/
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('closeDrawer');
  
  let isOpen = false;

  function openDrawer() {
    isOpen = true;
    drawer.classList.remove('translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
    burgerBtn.classList.add('burger-open');
  }

  function closeDrawer() {
    isOpen = false;
    drawer.classList.add('translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    document.body.classList.remove('overflow-hidden');
    burgerBtn.classList.remove('burger-open');
  }

  burgerBtn.addEventListener('click', () => {
    isOpen ? closeDrawer() : openDrawer();
  });

  closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) closeDrawer();
  });
});