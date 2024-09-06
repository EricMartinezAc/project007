import React from "react";
import { Link } from "react-router-dom";
import * as ROUTE from "../../constants/routes";
import logo from "../../static/logo/logo4.png";
import BasketToggle from "../basket/BasketToggle";
import Badge from "./Badge";
import UserAvatar from "../../views/account/components/UserAvatar";
import {
  BulbOutlined,
  ClusterOutlined,
  EnvironmentOutlined,
  GiftOutlined,
  InboxOutlined,
  ProductOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  ThunderboltOutlined,
  TruckOutlined,
} from "@ant-design/icons";

const MobileNavigation = ({
  isOpen,
  toggleMenu,
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
        X
      </button>
      <ul className="mobile-nav-menu">
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SHOP}>
            <ShopOutlined />
            SHOP
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.FEATURED_PRODUCTS}>
            <InboxOutlined />
            PRODUCTOS
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SERVICES}>
            <ClusterOutlined />
            SERVICIOS
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.MARKETPLACE}>
            <ShoppingCartOutlined />
            MARKETPLACE
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <ThunderboltOutlined />
            OFERTAS Y BLACKDAY
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <GiftOutlined />
            ENVÍA UN REGALO
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <EnvironmentOutlined />
            MAPA GPS
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <TruckOutlined />
            ENVÍO DE MERCANCÍA
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <SettingOutlined />
            AJUSTES
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <QuestionCircleOutlined />
            AYUDA
          </Link>
        </li>
        <li>
          <Link onClick={toggleMenu} to={ROUTE.SENDGIFT}>
            <BulbOutlined />
            Algo por mejorar? cuéntanos
          </Link>
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
            <Link onClick={toggleMenu} to={ROUTE.SIGNAUTH}>
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileNavigation;
