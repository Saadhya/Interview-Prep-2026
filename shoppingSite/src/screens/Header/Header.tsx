import React, { useState } from "react";
import "./Header.css";
import DropdownMenu from "@/components/UIComponents/DropdownMenu";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "@/store";
import SearchForm from "./SearchForm";

type HeaderProps = {
  cartCount?: number;
};

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {

  const appsMenuList = [
    { name: "Todo App", link: "/todo" },
    { name: "Posts App", link: "/posts" },
    { name: "Counter App", link: "/counter" },
    { name: "Movies App", link: "/movies" },
  ]
  

  return (
    <header className="ecom-header">
      <div className="ecom-header__inner">
        <a className="ecom-header__brand" href="/">
          ShopMate
        </a>

      <SearchForm/>

        <nav className="ecom-header__nav" aria-label="Primary">
          <a className="ecom-header__link" href="/products">
            Products
          </a>
          
          {/* Apps Dropdown Menu */}
          <DropdownMenu menuTitle="Apps" menusList={appsMenuList} />
          
          
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
