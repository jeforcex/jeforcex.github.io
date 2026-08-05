/* -------------------------------------------------------------
PRODUCT : JΞFØRCΞX Website
WHAT : System Function Library
WHY  : Repository of Standard System Functions
------------------------------------------------------------- */

export const sys = {

  /* ---- System Starter ---- */
  start: () => { 
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
        sys.mobileMenuToggle();
        break;

      // Mobile Option Button Toggle
      case 'mobile-option-btn':
        sys.mobileOptionToggle();
        break;
    }
  },

  /* ---- Mobile Menu Toggle ---- */
  mobileMenuToggle: () => {
    let button = document.getElementById('mobile-menu-btn');
    let buttonIcon = document.getElementById('mobile-menu-icon');
    let buttonState = button.dataset.state;
    let mobileMenu = document.getElementById('mobile-menu');
    if (buttonState !== "open") {
      button.setAttribute('data-state', 'open');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-close.png');
      mobileMenu.style.display = 'block';
    } else {
      button.setAttribute('data-state', 'closed');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-menu.png');
      mobileMenu.style.display = 'none';
    }
  },

  /* ---- Mobile Option Toggle ---- */
  mobileOptionToggle: () => {
    let button = document.getElementById('mobile-option-btn');
    let buttonIcon = document.getElementById('mobile-option-icon');
    let buttonState = button.dataset.state;
    let mobileMenu = document.getElementById('mobile-option');
    if (buttonState !== "open") {
      button.setAttribute('data-state', 'open');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-close.png');
      mobileMenu.style.display = 'block';
    } else {
      button.setAttribute('data-state', 'closed');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-option.png');
      mobileMenu.style.display = 'none';
    }
  }
}