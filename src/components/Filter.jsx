import React from "react";

const Filter = ({ setCategoryFilter, menu }) => {
  let filters = new Set(["All", ...menu.map((item) => item.category)]);
  filters = Array.from(filters);
  const clickHandler = (e) => {
    setCategoryFilter(e.target.value);
  };
  return (
    <div className="btn-container">
      {filters.map((filter) => {
        return (
          <button
            className="btn"
            onClick={clickHandler}
            value={filter}
            key={filter}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default Filter;
