import React, { Component } from "react";
import Title from "./Title";
import { ProductContext } from "../context";
import Product from "./Product";
import Loading from "./Loading";

export default class FeaturedRooms extends Component {
  static contextType = ProductContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Product key={room.id} room={room} />;
    });
    return (
      <section className="featured-products">
        <Title title="featured products" />
        <div className="featured-products-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
