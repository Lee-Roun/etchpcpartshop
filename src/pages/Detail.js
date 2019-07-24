import React, { Component } from "react";
import defaultBcg from "../assets/images/network.jpg";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { ProductContext } from "../context";

import StyledHeader from "../components/StyledHeader";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      shot: this.props.match.params.shot,
      defaultBcg: defaultBcg
    };
  }
  static contextType = ProductContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getProduct } = this.context;
    const product = getProduct(this.state.shot);

    if (!product) {
      return (
        <div className="error">
          <h3> no such Product could be found...</h3>
          <Link to="/shop" className="btn-primary">
            Back to SHOP
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = product;
    const [main, ...defaultImages] = images;
    console.log(defaultImages);

    return (
      <>
        <StyledHeader img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} product`}>
            <Link to="/shop" className="btn-primary">
              Back to SHOP
            </Link>
          </Banner>
        </StyledHeader>
        <section className="detail">
          <div className="detail-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="detail-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "modules allowed" : "no modules allowed"}</h6>
              <h6>{breakfast && "free case included"}</h6>
              <Link to="/login" className="btn-primary">
                구매
          </Link>
            </article>
          </div>
        </section>
        <section className="product-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
        <section>

        </section>
      </>
    );
  }
}
