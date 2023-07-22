import React, { useState } from "react";

function Item({ name, category }) {
  const [ inCart , setInCart ] = useState(true)
  const Cart = inCart ? "" : "in-cart"
  function addCart(){
    setInCart(!inCart)
    console.log(Cart)
  }
  return (
    <li className={ Cart }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{Cart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
