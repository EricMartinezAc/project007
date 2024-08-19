import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as ROUTE from "../../constants/routes";
import logo from "../../static/logo/logo4.png";
import UserAvatar from "../../views/account/components/UserAvatar";
import BasketToggle from "../basket/BasketToggle";
import SearchIcon from "@mui/icons-material/Search";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/styleMUI";
import { OutAccount } from "../../resolvers/outAccount";
import MobileNavigation from "./MobileNavigation";
import { destroyAllCookies } from "../../server/cookies";

const Navigation = ({ user, setUser, cookies }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 830);
  const navbar = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 850);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const Logout = () => {
    OutAccount(cookies);
    setUser({
      id: "",
      serv: "",
      name: "",
      photoURL: "",
      email: "",
      password: "",
      password2: "",
      datatime: "",
      token: "",
      entrepreneur: false,
      createSesionAt: "",
      id_products: [],
    });
    destroyAllCookies(cookies, ["token", "entrepreneur"]);
  };

  // disable the basket toggle to these pathnames
  const basketDisabledpathnames = [
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3,
    ROUTE.SIGNAUTH,
    ROUTE.FORGOT_PASSWORD,
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const locationCurrent = useLocation();

  return (
    <>
      {isMobile && (
        <>
          <div className="header-banner-mobile"></div>
          <div className="slider-button-mobile">
            <img className="logo-mobile" src={logo} alt="logomobile" />
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
              disabledPaths={basketDisabledpathnames}
              pathname={pathname}
            />
            {/* todo */}
            <div className="headerAttachMobile"></div>
          </div>
        </>
      )}

      {!isMobile && (
        <nav className="navigation" ref={navbar}>
          <div className="logo">
            <Link to={ROUTE.HOME}>
              <img alt="Logo" src={logo} />
            </Link>
          </div>
          <ul className="navigation-menu-main">
            <li className="navigationmenu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.FEATURED_PRODUCTS}
              >
                PRODUCTOS
              </NavLink>
            </li>
            <li className="navigationmenu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.SERVICES}
              >
                SERVICIOS
              </NavLink>
            </li>
            <li className="navigationmenu-link" id="marketplacelinknav">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "navigation-menu-active" : undefined
                }
                to={ROUTE.MARKETPLACE}
              >
                MARKETPLACE
              </NavLink>
            </li>
          </ul>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Qué necesitas?"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
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
          </ul>
          {locationCurrent.pathname !== "/signAuth" && (
            <>
              <div
                style={{
                  display:
                    locationCurrent.pathname !== "/signAuth" ? "block" : "none",
                }}
                className="navigation-menu-item"
              >
                <UserAvatar />
              </div>
              <div>
                {!cookies.get("token") ? (
                  <li className="navigation-action">
                    <Link
                      id="linkSesion"
                      className="button button-small margin-left-s"
                      to={ROUTE.SIGNAUTH}
                    >
                      INICIA SESIÓN
                    </Link>
                  </li>
                ) : (
                  <li className="navigation-action">
                    <Link
                      onClick={Logout}
                      id="outSesion"
                      className="button button-small margin-left-s"
                      to={ROUTE.HOME}
                    >
                      CERRAR SESIÓN
                    </Link>
                  </li>
                )}
              </div>
            </>
          )}
        </nav>
      )}
    </>
  );
};

export default Navigation;
