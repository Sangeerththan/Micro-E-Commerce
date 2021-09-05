import React from "react";
import Product from "./Product";

export default class Products extends React.PureComponent {

  addToCart = (product) => {
    this.props.addToCartAction(product);
  };


  render() {
    const {products} = this.props;

    return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="flex flex-wrap justify-between">
      {
        products.map(p => (
          <Product key={p.id} {...p} addFunc={this.addToCart} />
        ))
      }
    </div>
  }
}
