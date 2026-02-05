
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="ecom-footer">
      <div className="ecom-footer__inner">
        <div className="ecom-footer__top">
          <div className="ecom-footer__brand">
            <div className="ecom-footer__logo">ShopMate</div>
            <div className="ecom-footer__tagline">Simple ecommerce UI built with React.</div>
          </div>

          <nav className="ecom-footer__links" aria-label="Footer">
            <a className="ecom-footer__link" href="/">
              Demo Screen
            </a>
            <a className="ecom-footer__link" href="/hook">
              Hooks Screen
            </a>
            <a className="ecom-footer__link" href="/orders">
              Orders
            </a>
            <a className="ecom-footer__link" href="/support">
              Support
            </a>
          </nav>
        </div>

        <div className="ecom-footer__bottom">
          <span className="ecom-footer__copyright">
            © {year} ShopMate. All rights reserved.
          </span>
          <div className="ecom-footer__legal">
            <a className="ecom-footer__link" href="/privacy">
              Privacy
            </a>
            <a className="ecom-footer__link" href="/terms">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
