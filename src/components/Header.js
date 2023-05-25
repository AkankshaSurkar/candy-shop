import Cart from "./Cart";
import React from "react";

const Header = (props) => {
  return (
    <div>
      <label htmlFor="candyname">CandyName</label>
      <input id="candyname" type="text" />
      <label htmlFor="description">Description</label>
      <input id="description" type="text" />
      <label htmlFor="price">Price</label>
      <input id="price" type="text" />
      <button type="submit">Add Candy</button>
      <br />
      <Cart />
    </div>
  );
};

export default Header;
