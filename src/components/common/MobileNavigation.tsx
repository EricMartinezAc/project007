import React from "react";
import { Link } from "react-router-dom";
import * as ROUTE from "../../constants/routes";
import logo from "../../static/logo/logo.png";
import BasketToggle from "../basket/BasketToggle";
import Badge from "./Badge";
import UserAvatar from "../../views/account/components/UserAvatar";
import { ShoppingOutlined } from "@ant-design/icons";

const MobileNavigation = ({
  isOpen,
  toggleMenu,
  basketLength,
  user,
  disabledPaths,
  pathname,
}: any) => {
  return (
    <div className={`mobile-navigation ${isOpen ? "open" : ""}`}>
      <button
        className="menu-close"
        onClick={toggleMenu}
        aria-label="Close Menu"
      >
        Close
      </button>
      <img className="logo-mobile-menu" alt="Logo" src={logo} />
      <ul className="mobile-nav-menu">
        <li>
          <Link to={ROUTE.SHOP}>SHOP</Link>
        </li>
        <li>
          <Link to={ROUTE.FEATURED_PRODUCTS}>PRODUCTS</Link>
        </li>
        <li>
          <Link to={ROUTE.SERVICES}>SERVICES</Link>
        </li>
        <li>
          <Link to={ROUTE.MARKETPLACE}>MARKETPLACE</Link>
        </li>
      </ul>
      <div className="mobile-actions">
        <BasketToggle>
          {({ onClickToggle }) => (
            <button
              disabled={disabledPaths.includes(pathname)}
              onClick={onClickToggle}
              type="button"
            ></button>
          )}
        </BasketToggle>
        {user ? (
          <UserAvatar />
        ) : (
          <>
            <Link to={ROUTE.SIGNAUTH}>Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNavigation;
