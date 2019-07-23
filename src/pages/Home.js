import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import styled from "styled-components";

const Styles = styled.div`
.banner{
  position: relative;
  top: -130px;
}
`

const home = () => {
  return (
    <Styles>
      <Header>
        <Banner
          title="PC part shop"
          subtitle="Welcome Home"
          className="banner"
        >
          <Link to="/shop" className="btn-primary">
            our Products
          </Link>
        </Banner>
      </Header>
      <Services />
      <FeaturedProducts />
      <Footer />
    </Styles>
  );
};

export default home;
