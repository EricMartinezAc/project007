import ImageLoader from "../common/ImageLoader";
import PropTypes from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const ProductFeatured = ({ product }) => {
  const navigate = useNavigate(); // Cambiado de useHistory a useNavigate

  const onClickItem = () => {
    if (!product) return;

    navigate(`/product/${product.id}`); // Cambiado de history.push a navigate
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className="product-display"
        onClick={onClickItem}
        role="presentation"
      >
        <div className="product-display-img">
          {product.image ? (
            <ImageLoader className="product-card-img" src={product.image} />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        <div className="product-display-details">
          <h2>{product.name || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {product.brand || <Skeleton width={40} />}
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

ProductFeatured.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    brand: PropTypes.string,
  }).isRequired,
};

export default ProductFeatured;
