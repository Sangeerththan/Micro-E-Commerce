import React from "react";

const CartItem = ({id, name, description, price, units, img, updateCartUnits}) => (
  <li
    className="flex-row items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br-100" src={img} />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">{name}</span>
        <span className="f6 db black-70">{description}</span>
      </div>
      <div>
        <span>Units : {units}</span>
        <button onClick={() => updateCartUnits({id, units: units+1})}>+</button>
        <button onClick={() => updateCartUnits({id, units: units-1})}>-</button>
      </div>
  </li>
)

export default CartItem;
