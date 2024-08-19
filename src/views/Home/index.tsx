import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SHOP,
  PRODUCTS,
  SERVICES,
  MARKETPLACE,
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  BLACK_DAYS,
  NEW,
  S_Liive,
} from "../../constants/routes";
import bannerImg from "../../static/images/banner/she.png";
import { useDocumentTitle, useScrollTop } from "../../hooks";
import { ArrowRightOutlined } from "@ant-design/icons";
import MessageDisplay from "../../components/common/MessageDisplay";
import ProductShowcaseGrid from "../../components/product/ProductShowcaseGrid";
import { rule } from "postcss";
import { CookiesDTO } from "../../dto";

const Home = (
  {
    user,
    setUser,
    products,
    setproducts,
    featuredProducts,
    setFeaturedProducts,
  }: any,
  cookies: CookiesDTO
) => {
  useDocumentTitle("Liiv-E | By: SIHENG");
  useScrollTop();

  const navigate = useNavigate();
  console.log("home", cookies);
  const [ruleta, setRuleta] = useState([
    { header: "Más vendidos", state: true, link: FEATURED_PRODUCTS },
    { header: "Top 5 estrellas", state: false, link: RECOMMENDED_PRODUCTS },
    { header: "blackDay", state: false, link: BLACK_DAYS },
    { header: "Nuevos", state: false, link: NEW },
  ]);

  return (
    <main className="content">
      <div className="home">
        <div className="display ruletaHeader">
          {ruleta.map((item, index) => (
            <div
              key={index}
              className="ruletaHeader-item"
              style={{ backgroundColor: `#f${index + 4}${index + 2}` }}
            >
              <Link to={item.link}>{item.header}</Link>
            </div>
          ))}
        </div>
        <div className="banner">
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
          <div className="banner-desc">
            <h1 className="text-thin">
              <strong>Publica,</strong>
              <br />
              &nbsp;compra, vende, todo lo que necesites&nbsp;
              <strong>en una sola plataforma</strong>
            </h1>
            <p>
              Regístrate y potencia tu negocio en la más grande vitrina de
              productos y servicios, o accede a descuentos increíbles en tus
              productos favoritos.
            </p>
            <br />
            <Link to={S_Liive} className="button">
              CONOCE MÁS &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
        </div>
        <div className="display-header">
          <h1>Featured Products</h1>
          <Link to={FEATURED_PRODUCTS}>See All</Link>
        </div>
        <div className="ProductShowcaseGrid-container">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((item: any, product: any) => {
              <div key={item} className="ProductShowcaseGrid">
                <ProductShowcaseGrid product={product} />
              </div>;
            })
          ) : (
            <div className="ProductShowcaseGrid">No existen productos aún</div>
          )}
        </div>{" "}
        <div className="display-header">
          <h1>Recommended Products</h1>
          <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
        </div>
        <div className="ProductShowcaseGrid-container">
          {products.length > 0 ? (
            products.map((item: any, product: any) => {
              <div key={item} className="ProductShowcaseGrid-item">
                <ProductShowcaseGrid products={product} />
              </div>;
            })
          ) : (
            <div className="ProductShowcaseGrid">
              No existen productos recomendados aún
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
export default Home;
