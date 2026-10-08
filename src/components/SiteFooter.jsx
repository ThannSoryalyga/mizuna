import React from 'react';
import { Crest } from './SiteElements';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container site-footer__inner">
        <a className="site-footer__brand" href="#home">
          <Crest small />
          <span>MIZUNA FC<small>PHNOM PENH · CAMBODIA</small></span>
        </a>
        <p>Turning dreams into reality.</p>
        <a href="#home">Back to top ↑</a>
        <span className="site-footer__copyright">© 2026 MIZUNA FC</span>
      </div>
    </footer>
  );
}
