import React, { useState } from "react";

const Filter = ({ setTextFilter }) => {
  return (
    <div>
      Filter
      <input
        placeholder="search"
        type="text"
        onChange={(e) => setTextFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
