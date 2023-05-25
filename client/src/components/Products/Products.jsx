import React from 'react';
import Product from './Product/Product';
import './Products.scss';

const Products = ({ innerpage, headingText, products, productsdata }) => {
  const productList = Array.isArray(products) ? products : products?.data || [];

  return (
    <div className="products-container">
      {!innerpage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {productList.map((item) => (
          <Product key={item.id} id={item.id} data={item.attributes} />
        ))}
      </div>
    </div>
  );
};

export default Products;
