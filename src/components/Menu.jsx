import React, { useState } from "react";
import Filter from "./Filter";
import menu from "../data";
import Card from "./Card";

const Menu = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  return (
    <div className="menu">
      <h3 className="title">Our Menu</h3>
      <div className="title-underline"></div>
      <Filter setCategoryFilter={setCategoryFilter} menu={menu} />
      <div className="section-center">
        {menu.map((card) => {
          return (
            <Card key={card.id} {...card} categoryFilter={categoryFilter} />
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
