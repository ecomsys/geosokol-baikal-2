import '@/css/main.css'

import { BaseHelpers } from "./utils/base-helpers";
BaseHelpers.addLoadedClass();
BaseHelpers.calcScrollbarWidth();
BaseHelpers.addTouchClass();

// Базовые скрипты для автомастабирования и больших экранов с dpr
import initAutoRem from './utils/autorem';
initAutoRem({
  baseSiteWidth: 1440,
  baseFontSize: 16
});

import { initViewport } from "@/js/utils/viewport";
initViewport({
  breakpoint: 1440,
  designWidth: 1440
});
