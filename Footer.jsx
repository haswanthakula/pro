import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="col brand-col">
          <div className="brand-row">
            <div className="logoSquare" />
            <div>
              <div className="footer-brand">Shopify</div>
              <div className="footer-sub">Empowering merchants with great tooling.</div>
            </div>
          </div>
        </div>

        <div className="col links-col">
          <h4>Site Map</h4>
          <nav>
            <a href="/">Homepage</a>
            <a href="/contact">Contact</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </nav>
        </div>

        <div className="col social-col">
          <h4>Follow</h4>
          <div className="socials">
            <a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07C2 17.12 5.66 21.2 10.38 22v-7.02H7.9v-2.91h2.48V9.41c0-2.46 1.46-3.81 3.7-3.81 1.07 0 2.19.19 2.19.19v2.41h-1.23c-1.21 0-1.59.76-1.59 1.54v1.85h2.72l-.44 2.91h-2.28V22C18.34 21.2 22 17.12 22 12.07z" fill="#fff"/></svg>
            </a>
            <a aria-label="X" href="https://twitter.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 5.92c-.63.28-1.31.48-2.02.57.73-.44 1.3-1.14 1.57-1.98-.69.4-1.45.69-2.27.84C18.7 4.34 17.66 4 16.54 4c-1.6 0-2.9 1.27-2.9 2.84 0 .22.02.44.07.65-2.41-.12-4.55-1.36-5.98-3.25-.25.43-.39.93-.39 1.47 0 .98.48 1.85 1.21 2.36-.56-.02-1.09-.18-1.55-.44v.04c0 1.42 1.04 2.6 2.42 2.87-.25.07-.51.11-.78.11-.19 0-.37-.02-.54-.05.37 1.16 1.45 2.01 2.73 2.04-1 0-1.84.07-2.73.07.92.73 2.01 1.2 3.19 1.2 3.82 0 5.91-3.24 5.91-6.05 0-.09 0-.17-.01-.26.41-.3.76-.68 1.04-1.12-.38.17-.77.28-1.18.33.42-.26.77-.63 1.05-1.04z" fill="#fff"/></svg>
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 3H4C3 3 2 3.9 2 5v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8.34 17H6V10.5h2.36V17zM7.18 9.36c-.76 0-1.24-.52-1.24-1.17 0-.66.5-1.17 1.27-1.17s1.24.52 1.24 1.17c0 .65-.48 1.17-1.27 1.17zM18 17h-2.36v-3.47c0-.88-.32-1.48-1.12-1.48-.61 0-.97.41-1.13.81-.06.15-.08.36-.08.57V17H10.1V10.5h2.26v.9c.31-.48.87-1.17 2.12-1.17 1.29 0 2.34.85 2.34 2.67V17z" fill="#fff"/></svg>
            </a>
            <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A3.9 3.9 0 1 0 15.9 12 3.9 3.9 0 0 0 12 8.1zM18.5 6.2a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">© {new Date().getFullYear()} Shopify-like demo. All rights reserved.</div>
    </footer>
  );
}
