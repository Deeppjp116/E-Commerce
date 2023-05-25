import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import prod from "../../../assets/products/headphone-prod-2.webp";
import "./Search.scss";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for product"
          value={query}
          onChange={onChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-result">
          {data?.data?.map((item) => (
            <div
              key={item.id}
              className="search-result-item" 
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false); 
              }}
            >
              <div className="img-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item?.attributes?.img?.data[0]?.attributes.url
                  }
                  alt="Img"
                />
                {/* s{console.log(item?.attributes?.img?.data[0]?.attributes.url)} */}
              </div>
              <div className="prod-details">
                <span className="name">{item?.attributes?.Title}</span>
                <span className="desc">{item?.attributes?.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
