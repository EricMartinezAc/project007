import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  SHOP,
  PRODUCTS,
  SERVICES,
  MARKETPLACE,
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  BLACK_DAYS,
  NEW,
} from "../../constants/routes";
import bannerImg from "../../static/images/banner-girl.png";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "../../hooks";
import { ArrowRightOutlined } from "@ant-design/icons";
import MessageDisplay from "../../components/common/MessageDisplay";
import { ProductShowcaseGrid } from "../../components/product";
import { rule } from "postcss";

const Home = () => {
  useDocumentTitle("Liiv-E | By: SIHENG");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(6);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(6);
  const ruletaHeader = [
    "Más vendidos",
    "Top 5 estrellas",
    "blackDay",
    "Nuevos",
  ];
  const ruletaLink = [FEATURED_PRODUCTS, RECOMMENDED_PRODUCTS, BLACK_DAYS, NEW];

  return (
    <main className="content">
      <div className="home">
        <div className="display ruletaHeader">
          {ruletaHeader.length > 0 ? (
            ruletaHeader.map((item, index) => (
              <div
                key={index}
                className="ruletaHeader-item"
                style={{ backgroundColor: `#f${index + 4}${index + 2}` }}
              >
                <Link to={ruletaLink[index]}>{item}</Link>
              </div>
            ))
          ) : (
            <p>Por el momento, no hay promociones disponibles</p>
          )}
        </div>
        <div className="banner">
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
            <Link to={SHOP} className="button">
              Shop Now &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          <div className="banner-img">
            <img src={bannerImg} alt="" />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Featured Products</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={6}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Recommended Products</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div>
      </div>
    </main>
  );
};
export default Home;