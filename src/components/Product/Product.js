import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const { name, price, img, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h4 className="product-name">{name}</h4>
        <p className="product-price">Price: ${price}</p>
        <p className="product-seller">Menufacturer: {seller}</p>
        <p className="product-ratings">{ratings} star</p>
      </div>
      <button className="cart-btn">
        Add to Cart
        <FontAwesomeIcon icon={faCartPlus} />
      </button>
    </div>
  );
};

export default Product;
