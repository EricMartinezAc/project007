import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  BLACK_DAYS,
  NEW,
  S_Liive,
} from "../../constants/routes";
import bannerImg from "../../static/images/banner/she.png";
import { useDocumentTitle, useScrollTop } from "../../hooks";
import { ArrowRightOutlined } from "@ant-design/icons";
import ProductShowcaseGrid from "../../components/product/ProductShowcaseGrid";
import { productDTO, userDTO } from "../../dto";

const Home = ({ products }: any) => {
  useDocumentTitle("Liiv-E | By: SIHENG");
  useScrollTop();

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
        <section>
          <h1>Products</h1>
          <div className="ProductShowcase">
            {products.length > 0 ? (
              products.map((product: any) => {
                return product.map((pdct: productDTO, item: number) => {
                  return <ProductShowcaseGrid key={item} product={pdct} />;
                });
              })
            ) : (
              <div className="ProductShowcase">No existen productos aún</div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};
export default Home;
