import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";

const Products = () => {
  return (
    <>
      <Header header="productsHeader">
        <Banner title="our products">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Header>
      <ProductsContainer />
    </>
  );
};

export default Products;
