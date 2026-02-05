import React from "react";
import "./Header.css";

type HeaderProps = {
  cartCount?: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
  return (
    <header className="ecom-header">
      <div className="ecom-header__inner">
        <a className="ecom-header__brand" href="/">
          ShopMate
        </a>

        <form
          className="ecom-header__search"
          role="search"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="ecom-header__searchInput"
            type="search"
            placeholder="Search products, brands and more"
            aria-label="Search products"
          />
          <button className="ecom-header__searchButton" type="submit">
            Search
          </button>
        </form>

        <nav className="ecom-header__nav" aria-label="Primary">
          <a className="ecom-header__link" href="/products">
            Products
          </a>
          <a className="ecom-header__link" href="/orders">
            Orders
          </a>
          <a className="ecom-header__link" href="/login">
            Sign in
          </a>
          <a className="ecom-header__cart" href="/cart" aria-label="Cart">
            <span className="ecom-header__cartText">Cart</span>
            <span className="ecom-header__badge" aria-label={`${cartCount} items in cart`}>
              {cartCount}
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
