/* -------------------------------------------------------------
PRODUCT : JΞFØRCΞX Innovation Brand Portfolio Website
WHAT    : User Interface Template Library
WHY     : Repository of Standard User Interface Components for
          Positive Developer Experience (DX)
------------------------------------------------------------- */

export const ui = {

  /* ---- Site Template Loader ---- */
  load: () => {
    ui.header();
    ui.footer();
    ui.social();
  },

  /* ---- Site Header ---- */
  header: () => {
    document.getElementById('site-header').innerHTML = `
      <div class="content">
        <div class="mobile-button" id="mobile-menu-btn" data-state="closed">
          <img src="asset/icon/mobile-menu.png" id="mobile-menu-icon">
        </div>
        <div>
          <a href="/" class="muted" title="JΞFØRCΞX"><img src="asset/image/logo.png" class="site-logo"></a>
          <ul class="desktop-menu">
            <li>
              <a href="portfolio.html" class="group">Portfolio</a>
              <ul>
                <li><a href="world.html">WØRLD</a></li>
                <li><a href="creatoria.html">CRΞΛTØRIΛ</a></li>
                <li><a href="tengoku.html">TΞNGØKU</a></li>
              </ul>
            </li>
            <li>
              <a href="about.html" class="group">About</a>
              <ul>
                <li><a href="brand.html">Brand</a></li>
                <li><a href="innovator.html">Innovator</a></li>
                <li><a href="history.html">History</a></li>
              </ul>
            </li>
            <li>
              <a href="contact.html" class="group">Contact</a>
              <ul><li><a href="get-in-touch.html">Get In Touch</a></li></ul>
            </li>
          </ul>
        </div>
        <div class="desktop-social" id="header-social"></div>
        <div class="mobile-button" id="mobile-option-btn" data-state="closed">
          <img src="asset/icon/mobile-option.png" id="mobile-option-icon">
        </div>
      </div>
      <div class="mobile-navigator">
        <ul id="mobile-menu">
          <li>
            <a href="portfolio.html">Portfolio</a>
            <ul>
              <li><a href="world.html">WØRLD</a></li>
              <li><a href="creatoria.html">CRΞΛTØRIΛ</a></li>
              <li><a href="tengoku.html">TΞNGØKU</a></li>
            </ul>
          </li>
          <li>
            <a href="about.html">About</a>
            <ul>
              <li><a href="brand.html">Brand</a></li>
              <li><a href="innovator.html">Innovator</a></li>
              <li><a href="history.html">History</a></li>
            </ul>
          </li>
          <li>
            <a href="contact.html">Contact</a>
            <ul><li><a href="contact.html">Get In Touch</a></li></ul>
          </li>
        </ul>
        <div id="mobile-option"></div>
      </div>
      <a class="back2top" href="#top" title="Back to Top"><span class="chevron">›</span</a>
    `
  },

  /* ---- Site Footer ---- */
  footer: () => {
    document.getElementById('site-footer').innerHTML = `
      <div class="navigator">
        <div class="content">
          <div class="zone about">
            <div class="footer-logo">
              <a class="muted" href="brand.html" title="JΞFØRCΞX"><img src="asset/image/logo.png" class="site-logo"></a>
            </div>
            <p><b>JΞFØRCΞX</b> is a Personal Innovation Brand &amp; Portfolio with a purpose to Advance Humanity Through Innovation.</p>
            <div class="align-right"><a href="brand.html" class="button">Learn More</a></div>
          </div>
          <div class="zone menu">
            <ul>
              <li>
                <a href="portfolio.html" class="parent">Portfolio</a>
                <ul>
                  <li><a href="world.html">WØRLD</a></li>
                  <li><a href="creatoria.html">CRΞΛTØRIΛ</a></li>
                  <li><a href="tengoku.html">TΞNGØKU</a></li>
                </ul>
              </li>
              <li>
                <a href="about.html" class="parent">About</a>
                <ul>
                  <li><a href="brand.html">Brand</a></li>
                  <li><a href="innovator.html">Innovator</a></li>
                  <li><a href="history.html">History</a></li>
                </ul>
              </li>
              <li>
                <a href="contact.html" class="parent">Contact</a>
                <ul><li><a href="get-in-touch.html">Get In Touch</a></li></ul>
              </li>
            </ul>
          </div>
          <div class="zone social" id="footer-social"></div>
        </div>
      </div>
      <div class="legal">
        <div class="content">
          <div>
            <ul>
              <li>&copy; JΞFØRCΞX</li>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms</a></li>
              <li><a href="license.html">License</a></li>
            </ul>
          </div>
          <div><b class="made">&lt;/&gt;</b> with ⚛️ in the <b>INNØVΞRSΞ</b></div>
        </div>
      </div>
    `
  },

  /* ---- Social Media Linked Icons ---- */
  social: () => {
    let content = `
      <h3>Connect</h3>
      <a href="https://x.com/jeforcexverse" target="_blank" class="connect" title="X Profile">
        <img src="asset/icon/x.png">
      </a>
      <a href="https://youtube.com/@jeforcexverse" target="_blank" class="connect" title="YouTube Channel">
        <img src="asset/icon/youtube.png">
      </a>
      <a href="https://github.com/jeforcex/jeforcex.github.io/" target="_blank" class="connect" title="GitHub Repository">
        <img src="asset/icon/github.png">
      </a>
      <a href="https://linktr.ee/jeforcexverse" target="_blank" class="connect" title="Linktree Card">
        <img src="asset/icon/linktree.png">
      </a>
    `
    document.getElementById('header-social').innerHTML = content;
    document.getElementById('mobile-option').innerHTML = content;
    document.getElementById('footer-social').innerHTML = content;
  },

  /* ---- Portfolio Gallery ---- */
  portfolio: (target) => {
    document.getElementById(target).innerHTML = `
      <div class="card">
        <h2><a href="world.html">WØRLD</a></h2>
        <a href="world.html"><img src="asset/image/portfolio-world.png"></a>
        <p><b>Science Fantasy Media Franchise</b> with Role-Playing Game (<b>RPG</b>), Novel, Film, and Merchandise.</p>
        <p><b>Status:</b> <span class="status-blue">Developmental</span></p>
        <div class="align-center"><a class="button" href="world.html">Explore</a></div>
      </div>
      <div class="card">
        <h2><a href="creatoria.html">CRΞΛTØRIΛ</a></h2>
        <a href="creatoria.html"><img src="asset/image/portfolio-creatoria.png"></a>
        <p><b>Content Creation Platform-as-a-Service</b> (<b>PaaS</b>) powered by Agentic Generative Artificial Intelligence (<b>GenAI</b>).</p>
        <p><b>Status:</b> <span class="status-purple">Consideration</span></p>
        <div class="align-center"><a class="button" href="creatoria.html">Explore</a></div>
      </div>
      <div class="card">
        <h2><a href="tengoku.html">TΞNGØKU</a></h2>
        <a href="tengoku.html"><img src="asset/image/portfolio-tengoku.png"></a>
        <p><b>Private Community Platform</b> for the like-minded Japanese Popular Culture Hobbyist (<b>J-Hobbyist</b>).</p>
        <p><b>Status:</b> <span class="status-brown">Archival</span></p>
        <div class="align-center"><a class="button" href="tengoku.html">Explore</a></div>
      </div>
    `
  },

  /* ---- Mobile Menu Toggle ---- */
  mobileMenuToggle: () => {
    let button = document.getElementById('mobile-menu-btn');
    let buttonIcon = document.getElementById('mobile-menu-icon');
    let buttonState = button.dataset.state;
    let mobileMenu = document.getElementById('mobile-menu');
    if (buttonState !== "open") {
      /* Open the Mobile Menu */
      button.setAttribute('data-state', 'open');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-close.png');
      mobileMenu.style.display = 'block';
      /* Always Close the Mobile Option */
      document.getElementById('mobile-option-btn').setAttribute('data-state', 'closed');
      document.getElementById('mobile-option-icon').setAttribute('src', 'asset/icon/mobile-option.png');
      document.getElementById('mobile-option').style.display = 'none';
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
      /* Open the Mobile Option */
      button.setAttribute('data-state', 'open');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-close.png');
      mobileMenu.style.display = 'block';
      /* Always Close the Mobile Menu */
      document.getElementById('mobile-menu-btn').setAttribute('data-state', 'closed');
      document.getElementById('mobile-menu-icon').setAttribute('src', 'asset/icon/mobile-menu.png');
      document.getElementById('mobile-menu').style.display = 'none';
    } else {
      button.setAttribute('data-state', 'closed');
      buttonIcon.setAttribute('src', 'asset/icon/mobile-option.png');
      mobileMenu.style.display = 'none';
    }
  }
}