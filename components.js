// Shared nav + footer for all pages
// Included via <script src="components.js"></script>

const NAV_HTML = `
<nav class="nav" id="main-nav">
  <a href="index.html" class="nav-brand">
    <svg class="nav-mark" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40,40 C38,32 30.4,25.6 21.6,26 C12.8,26.4 8.8,33 8.8,40 C8.8,47 12.8,53.6 21.6,54 C30.4,54.4 38,48 40,40 C42,32 49.6,25.6 58.4,26 C67.2,26.4 71.2,33 71.2,40 C71.2,47 67.2,53.6 58.4,54 C49.6,54.4 42,48 40,40 Z"
        stroke="#169978" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <ellipse cx="40" cy="37.5" rx="2" ry="3.2" fill="#1FC498" opacity="0.9"/>
      <ellipse cx="40" cy="42.5" rx="2" ry="3.2" fill="#1FC498" opacity="0.9"/>
      <ellipse cx="37" cy="40" rx="3.2" ry="2" fill="#1FC498" opacity="0.9"/>
      <ellipse cx="43" cy="40" rx="3.2" ry="2" fill="#1FC498" opacity="0.9"/>
      <circle cx="40" cy="40" r="2.5" fill="#169978"/>
      <circle cx="40" cy="40" r="1.2" fill="#0E5640"/>
      <circle cx="40" cy="40" r="0.5" fill="#B5EBDB"/>
    </svg>
    <span class="nav-name">Mokssh</span>
  </a>
  <ul class="nav-links">
    <li><a href="index.html#product">Product</a></li>
    <li><a href="pricing.html">Pricing</a></li>
    <li><a href="defence.html">Defence Gold</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="index.html#waitlist" class="nav-cta">Join Waitlist</a></li>
  </ul>
  <button class="nav-hamburger" onclick="toggleMenu()" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-brand" style="text-decoration:none">
          <svg width="32" height="32" viewBox="0 0 80 80" fill="none">
            <path d="M40,40 C38,32 30.4,25.6 21.6,26 C12.8,26.4 8.8,33 8.8,40 C8.8,47 12.8,53.6 21.6,54 C30.4,54.4 38,48 40,40 C42,32 49.6,25.6 58.4,26 C67.2,26.4 71.2,33 71.2,40 C71.2,47 67.2,53.6 58.4,54 C49.6,54.4 42,48 40,40 Z"
              stroke="#169978" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="40" cy="40" r="2.5" fill="#1FC498"/>
            <circle cx="40" cy="40" r="1.2" fill="#0E5640"/>
          </svg>
          <span style="font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:600;color:#14302A">Mokssh</span>
        </a>
        <p>India's first family financial planner. Protecting every Indian family's financial legacy through intelligent automation.</p>
        <p style="margin-top:12px;font-size:0.78rem;color:#8A9590">A product of Ewig Fintech Pvt. Ltd.<br>CIN: U74999MH2024PTC000000 · Pune, Maharashtra</p>
      </div>
      <div class="footer-col">
        <h4>Product</h4>
        <ul class="footer-links">
          <li><a href="index.html#product">All Features</a></li>
          <li><a href="index.html#smart-alerts">Smart Alerts</a></li>
          <li><a href="pricing.html">Pricing</a></li>
          <li><a href="defence.html">Defence Gold</a></li>
          <li><a href="index.html#waitlist">Join Waitlist</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul class="footer-links">
          <li><a href="about.html">About us</a></li>
          <li><a href="about.html#contact">Contact</a></li>
          <li><a href="mailto:contact@ewigfintech.com">contact@ewigfintech.com</a></li>
          <li><a href="mailto:contact@mokssh.in">contact@mokssh.in</a></li>
          <li><a href="mailto:invest@mokssh.in">invest@mokssh.in</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul class="footer-links">
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="terms.html">Terms of Service</a></li>
          <li><a href="refunds.html">Refund Policy</a></li>
          <li><a href="grievance.html">Grievance Officer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Ewig Fintech Pvt. Ltd. All rights reserved.</p>
      <div class="footer-legal">
        <a href="privacy.html">Privacy</a>
        <a href="terms.html">Terms</a>
        <a href="grievance.html">Grievance</a>
      </div>
    </div>
  </div>
</footer>`;
// Arm fade-up animations as early as possible — before DOMContentLoaded if we can.
// If JS never loads, the .js-ready class is never added, and content stays visible.
document.documentElement.classList.add('js-ready');

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  try {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;
  } catch (err) { console.error('[Mokssh] Nav injection failed:', err); }

  // Inject footer
  try {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;
  } catch (err) { console.error('[Mokssh] Footer injection failed:', err); }

  // Scroll animation — fall back to making everything visible if IntersectionObserver isn't supported
  try {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    } else {
      document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    }
  } catch (err) {
    console.error('[Mokssh] Fade-up observer failed, revealing all content:', err);
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }

  // Nav scroll effect
  try {
    const nav = document.getElementById('main-nav');
    if (nav) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
          nav.style.background = 'rgba(255,255,255,0.96)';
          nav.style.boxShadow = '0 4px 18px rgba(20,48,42,0.06)';
        } else {
          nav.style.background = 'rgba(255,255,255,0.88)';
          nav.style.boxShadow = 'none';
        }
      });
    }
  } catch (err) { console.error('[Mokssh] Nav scroll effect failed:', err); }
});

function toggleMenu() {
  const links = document.querySelector('.nav-links');
  if (links) {
    links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
    links.style.flexDirection = 'column';
    links.style.position = 'fixed';
    links.style.top = '68px';
    links.style.left = '0'; links.style.right = '0';
    links.style.background = '#FFFFFF';
    links.style.padding = '20px 24px';
    links.style.gap = '20px';
    links.style.boxShadow = '0 8px 24px rgba(20,48,42,0.08)';
  }
}
