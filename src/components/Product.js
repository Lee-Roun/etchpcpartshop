import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/network.jpg";
import PropTypes from "prop-types";
import { memo } from "react";

const Room = memo(({ room }) => {
  const { name, shot, images, price, type } = room;
  // console.log(name);
  return (
    <article className="product">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="detail" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>{type}</p>
        </div>
        <Link to={`/products/${shot}`} className="btn-primary product-link">
          features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
export default Room;
