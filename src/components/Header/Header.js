import React from "react";
import Filter from "./Filter";
import Rate from "./Rate";

const Header = ({ setTextFilter }) => {
  return (
    <div>
      <h1>Movies List</h1>

      <Filter setTextFilter={setTextFilter} />
      <Rate />
    </div>
  );
};

export default Header;
