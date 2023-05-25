import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CardItem from "./CartItem/CartItem";

import "./Cart.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";

const Cart = ({ setshowCart }) => {
  // useEffect(() => {
  //   setshowCart(true);
  // }, [setshowCart]);
  const {cartItems,cartSubTotal} = useContext(Context);

  return (
    <div className="cart-pannel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shoping Cart</span>
          <span className="close-btn" onClick={() => setshowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>

      {!cartItems?.length &&  <div className="empty-cart">
          <BsCartX />
          <span> No Products in the cart</span>
          <button className="return-cta"> RETURN TO SHOP</button>
        </div>}
        <>
     {!!cartItems?.length && <><CardItem />
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal:</span>
              <span className="text total">&#8377;{cartSubTotal}</span>
            </div>
            <div className="button">
              <button className="checkout-cta">Checkout</button>
            </div>
          </div>
            </>
          }
        </>
      </div>
    </div>
  );
};

export default Cart;
