import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  const { img, Title, Price } = data || {}; // Destructure properties from data object

  const imageUrl = img?.data?.[0]?.attributes?.url
    ? process.env.REACT_APP_DEV_URL + img.data[0].attributes.url
    : "";
  const title = Title || "";
  const price = Price || "";

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="thumbnail">
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>
      <div className="prod-details">
        <span className="name">{title}</span>
        <span className="price">&#8377;{price}</span>
      </div>
    </div>
  );
};

export default Product;
