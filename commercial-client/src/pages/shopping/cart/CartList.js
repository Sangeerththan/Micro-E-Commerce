import React from "react";

import CartItem from "./CartItem";
import '../style.css';

export default class CartList extends React.PureComponent {


  render() {
    const {cart, updateCartUnits} = this.props;

    return (
      <ul className="list pl0 mt0 measure center">
        {
          cart.map(item => <CartItem {...item} key={item.id} updateCartUnits={updateCartUnits} />)
        }
      </ul>
    )
  }

}