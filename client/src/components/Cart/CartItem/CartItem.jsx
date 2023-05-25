import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-3.webp";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../utils/context";

const CartItem = () => {
  const { handelRemoveFromCart, cartItems, handelProductQuantity } =
    useContext(Context);

  return (
    <div className="cart-products">
      {cartItems.map((item) => (
        <div key={item.id} className="cart-product">
          <div className="img-container">
            <img src={ process.env.REACT_APP_DEV_URL +
                item?.attributes?.img?.data[0]?.attributes?.url} alt="" />
          </div>
          <div className="prod-details">
            <span className="name">{item.attributes.Title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handelRemoveFromCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handelProductQuantity("dec", item)}>-</span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handelProductQuantity("inc", item)}>+</span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item.attributes.Price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
