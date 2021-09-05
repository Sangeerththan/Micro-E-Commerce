import {ADD_TO_CART, UPDATE_CART_UNITS, REMOVE_CART_UNITS} from "../actions/cart_actions";
import {RESET_CART} from "../types";

const INITIAL_STATE = [];

export default function cartReducer(state = INITIAL_STATE, action = {}) {

  switch(action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);

      const updatedCart = existingProductIndex >= 0 
          ? updateProductUnits(cart, product)
          : [...cart, product];

      return updatedCart;
    }

    case UPDATE_CART_UNITS: {
      const payload = action.payload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, payload.id);

      if (existingProductIndex >= 0) {
        let product = cart[existingProductIndex];
        product.units = payload.units;

        cart[existingProductIndex] = product;
      }

      return [...cart]

    }

    case REMOVE_CART_UNITS: {
      const payload = action.payload;
      const cart = state;
      let updatedCart = [];

      const existingProductIndex = findProductIndex(cart, payload.id);

      if (existingProductIndex >= 0) {
        updatedCart = cart.filter(p => p.id !== payload.id)
      }

      return [...updatedCart]

    }

    case RESET_CART: {
      return []

    }
  }

  return state;
}


const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const  updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);

  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];

  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units
  };

  updatedCart[productIndex] = updatedUnitsProduct;

  return updatedCart;
};