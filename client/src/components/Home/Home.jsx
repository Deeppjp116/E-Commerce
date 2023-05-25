import { useEffect, useContext, useState } from "react";
import Product from "../Products/Product/Product";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
  const { categoriesdata, productsdata, setcategoriesdata, setproductsdata } =
    useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories();
    getProductsdata();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*").then((res) => {
      console.log(res);
      setcategoriesdata(res);
      setIsLoading(false);
    });
  };

  const getProductsdata = () => {
    fetchDataFromApi("/api/products?populate=*").then((res) => {
      console.log(res);
      setproductsdata(res);
      setIsLoading(false);
    });
  };

  if (isLoading || !productsdata) { // Add a check for productsdata
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Banner />
      <div className="main-content">
        <Category categories={categoriesdata} />
        <Products products={productsdata} headingText="Popular Product" /> {/* Access 'data' property */}
      </div>
    </div>
  );
};

export default Home;
