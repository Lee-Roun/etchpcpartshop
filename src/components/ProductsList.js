import React from "react";
import Product from "./Product";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>죄송하지만, 찾으시는 조건에 맞는 물품이 없네요...</h3>
      </div>
    );
  }
  return (
    <section className="productslist">
      <div className="productslist-center">
        {rooms.map(item => {
          return <Product key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;
