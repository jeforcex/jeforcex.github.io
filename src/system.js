/* -------------------------------------------------------------
PRODUCT : JΞFØRCΞX Website
WHAT    : System Function Library
WHY     : Repository of Standard System Function
------------------------------------------------------------- */

import { ui } from './interface.js';

export const sys = {

  /* ---- System Starter ---- */
  start: () => { 
    ui.load();
    sys.global_listener();
  },

  /* ---- Global Event Listener ---- */
  global_listener: () => {
    // Transfer Mouse Click Event to Global Event Router
    document.addEventListener('click', (event) => { sys.global_router(event); } );
  },

  /* ---- Global Event Router ---- */
  global_router: (event) => {
    // Define Target as Interacted Element Identification Data (ID)
    let target = event.target.id;

    // Target Handler
    switch (target) {

      // Mobile Menu Button Toggle
      case 'mobile-menu-btn':
        ui.mobileMenuToggle();
        break;

      // Mobile Option Button Toggle
      case 'mobile-option-btn':
        ui.mobileOptionToggle();
        break;
    }
  },

  /* ---- Web Browser Redirector ---- */
  redirector: (target) => {
    window.location.href = target;
  },

  /* ---- Time Lapsed Calculator ---- */
  timeLapsed: (input) => {
    let startDate = new Date(input);
    let endDate = new Date();
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) { years--; months += 12; }
    let displayYear = years <= 1 ? "year" : "years";
    let displayMonth = months <= 1 ? "month" : "months";

    return `${years} ${displayYear} ${months} ${displayMonth}`;
  }
}