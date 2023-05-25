import "./SingleProduct.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { Context } from "../../utils/context";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

const SingleProduct = () => {
  const [Quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
  const { handelAddToCart, handelRemoveFromCart } = useContext(Context);

  if (!data) return;
  const product = data?.data[0]?.attributes;

  const increment = () => {
    setQuantity((Quantity) => Quantity + 1);
  };

  const decrement = () => {
    setQuantity((Quantity) => {
      if (Quantity === 1) return 1;
      return Quantity - 1;
    });
  };

  return (
    <div className="singel-product-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                product?.img?.data[0]?.attributes?.url
              }
              alt=""
            />
          </div>
          <div className="right">
            <span className="name">{product?.Title}</span>
            <span className="price">&#8377;{product?.Price}</span>
            <span className="desc">{product?.desc}</span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{Quantity}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={()=>{
                handelAddToCart(data?.data[0],  Quantity)
                setQuantity(1)
              }}>
                <FaCartPlus size={20} />
                Add to Cart
              </button>
            </div>
            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">
                Category: {"       "}
                <span>{product?.categories?.data[0]?.attributes?.Title}
                
                </span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedin size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts
          productId={id}
          categoryId={product?.categories?.data[0]?.id}
        />  
      </div>
    </div>
  );
};

export default SingleProduct;
