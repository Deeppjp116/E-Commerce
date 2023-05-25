import { useNavigate } from "react-router-dom";
import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => {
          if (item.attributes.img && item.attributes.img.data) {
            return (
              <div
                key={item.id}
                className="category"
                onClick={() => {
                  navigate(`/category/${item.id}`);
                }}
              >
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data.attributes.url
                  }
                  alt="Image"
                />
              </div>
            );
          }
          return null; // Handle the case where img or img.data is null
        })}
      </div>
    </div>
  );
};

export default Category;
