import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FilterOutlined, ShoppingOutlined } from "@ant-design/icons";
import * as ROUTE from "../../constants/routes";
import logo from "../../static/logo/logo4.png";
import UserAvatar from "../../views/account/components/UserAvatar";
import BasketToggle from "../basket/BasketToggle";
import Badge from "./Badge";
import FiltersToggle from "./FiltersToggle";
import MobileNavigation from "./MobileNavigation";
import { Image, SearchInput } from "evergreen-ui";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);
  const navbar = useRef(null);
  const { pathname } = useLocation();

  const store = useSelector((state) => ({
    basketLength: state.basket.length,
    user: state.auth,
    isAuthenticating: state.app.isAuthenticating,
    isLoading: state.app.loading,
  }));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollHandler = () => {
    if (navbar.current && window.pageYOffset >= 70) {
      navbar.current.classList.add("is-nav-scrolled");
    } else {
      navbar.current.classList.remove("is-nav-scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const onClickLink = (e) => {
    if (store.isAuthenticating) e.preventDefault();
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (store.user && store.user.role === "ADMIN") {
    return null;
  }

  return (
    <>
      {isMobile && (
        <>
          <div className="slider-button-mobile">
            <Image className="logo-mobile" src={logo} alt="logomobile" />
            <button
              className="menu-toggle"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
            <MobileNavigation
              isOpen={isMobileMenuOpen}
              toggleMenu={toggleMobileMenu}
              {...store}
              disabledPaths={basketDisabledpathnames}
              pathname={pathname}
            />
          </div>
        </>
      )}

      {!isMobile && (
        <nav className="navigation" ref={navbar}>
          <div className="logo">
            <Link onClick={onClickLink} to={ROUTE.HOME}>
              <img alt="Logo" src={logo} />
            </Link>
          </div>
          <ul className="navigation-menu-main">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                end
                to={ROUTE.SHOP}
              >
                SHOP
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.FEATURED_PRODUCTS}
              >
                PRODUCTS
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.SERVICES}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.MARKETPLACE}
              >
                MARKETPLACE
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.EQUIPMENTS}
              >
                EQUIPMENTS
              </NavLink>
            </li>
          </ul>
          {(pathname === ROUTE.SHOP || pathname === ROUTE.SEARCH) && (
            <FiltersToggle>
              <button className="button-muted button-small" type="button">
                Filters &nbsp;
                <FilterOutlined />
              </button>
            </FiltersToggle>
          )}

          <SearchInput placeholder="Filter traits..." />
          <ul className="navigation-menu">
            <li className="navigation-menu-item">
              <BasketToggle>
                {({ onClickToggle }) => (
                  <button
                    className="button-link navigation-menu-link basket-toggle"
                    disabled={basketDisabledpathnames.includes(pathname)}
                    onClick={onClickToggle}
                    type="button"
                  >
                    {/* <Badge count={store.basketLength}>
                      <ShoppingOutlined style={{ fontSize: "2.4rem" }} />
                    </Badge> */}
                    TRABAJA CON NOSOTROS
                  </button>
                )}
              </BasketToggle>
            </li>
            {store.user ? (
              <li className="navigation-menu-item">
                <UserAvatar />
              </li>
            ) : (
              <li className="navigation-action">
                {pathname !== ROUTE.SIGNUP && (
                  <Link
                    className="button button-small"
                    onClick={onClickLink}
                    to={ROUTE.SIGNUP}
                  >
                    Sign Up
                  </Link>
                )}
                {pathname !== ROUTE.SIGNIN && (
                  <Link
                    className="button button-small button-muted margin-left-s"
                    onClick={onClickLink}
                    to={ROUTE.SIGNIN}
                  >
                    Sign In
                  </Link>
                )}
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
