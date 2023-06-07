import React from "react";

const Card = (props) => {
  const { id, title, category, price, img, desc, categoryFilter } = props;

  if (categoryFilter !== "All" && category !== categoryFilter) return;

  return (
    <div className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">{price}</div>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </div>
  );
};

export default Card;
