import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
export const Context = createContext();

const AppContext = ({ children }) => {
  const [categoriesdata, setcategoriesdata] = useState();
  const [productsdata, setproductsdata] = useState();
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    let conut = 0;

    cartItems.map((item) => (conut += item?.attributes?.quantity));
    console.log(cartCount);
    setCartCount(conut);

    let subTotal = 0;
    cartItems.map(
      (item) => (subTotal += item.attributes.Price * item.attributes.quantity)
    );
    setCartSubTotal(subTotal);
  }, [cartItems]);

  const handelAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      items[index].attributes += quantity;
    } else {
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  };

  const handelRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter((p) => p.id !== product.id);
    setCartItems(items);
  };
  const handelProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex((p) => p.id === product.id);

    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
  };
  return (
    <Context.Provider
      value={{
        categoriesdata,
        productsdata,
        setcategoriesdata,
        setproductsdata,
        setCartSubTotal,
        cartSubTotal,
        setCartCount,
        cartCount,
        setCartItems,
        cartItems,
        handelProductQuantity,
        handelRemoveFromCart,
        handelAddToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
