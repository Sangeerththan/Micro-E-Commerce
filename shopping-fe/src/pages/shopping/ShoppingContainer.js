import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import Products from "./products/Products";
import CartList from "./cart/CartList";
import {addToCartAction, updateCartUnits} from "../../redux/actions/cart_actions";
import {getAllProducts} from "../../redux/actions/product_action";
import {saveShopping} from "../../redux/actions/shopping_actions";
import './style.css';
import Total from './cart/Total';
import { notification } from 'antd';

class ShoppingContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      shoppingSaveReq: {},
    }
  }

  componentDidMount(){
    this.props.getAllProducts(this.props.userReducer.token);
  }

  openNotificationWithIcon = type => {
    notification[type]({
      message: 'Your purchase is successful',
      description:
        'Time to time go to Previous shopping to check the status of your purchase.',
    });
  };

  render() {
    const {cart, addToCartAction, updateCartUnits, productReducer, userReducer} = this.props;

    if(userReducer.shoppingSuccessful){
      this.openNotificationWithIcon("success")
    }
    
    if(productReducer.products.length > 0){
      let total = 0;
      let shoppingSaveReq = {};
      let shoppingDetailDtos = [];
      cart.forEach(element => {
        total += (element.units * element.price);
        let product = {};
        product.productId = element.id;
        product.quantity = element.units;
        shoppingDetailDtos.push(product);
      });
      shoppingSaveReq.username = this.props.userReducer.username;
      shoppingSaveReq.totalAmount = total;
      shoppingSaveReq.shoppingDetailDtos = shoppingDetailDtos;
      const saveShopping = () => {
        this.props.saveShopping(this.props.userReducer.token, shoppingSaveReq);
      };
      return (
        <main className="pa3 pa5-ns w-100">
          <CartList cart={cart} updateCartUnits={updateCartUnits} />
          <Total total={total} saveShopping={saveShopping} />
          <Products products={productReducer.products} addToCartAction={addToCartAction} />
        </main>
      );
    } else{
        return(
          <div></div>
        )
    }
  }
}


const mapStateToProps = ({cart, userReducer, productReducer}) => {
  return {
    cart,
    userReducer,
    productReducer,
  }
}

const mapActionsToProps = (dispatch) => {
  return bindActionCreators({
    addToCartAction,
    updateCartUnits,
    getAllProducts,
    saveShopping
  }, dispatch)
}

export default connect(mapStateToProps, mapActionsToProps)(ShoppingContainer);
