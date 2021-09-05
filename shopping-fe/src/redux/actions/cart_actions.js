export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_UNITS = "UPDATE_CART_UNITS";
export const REMOVE_CART_UNITS = "REMOVE_CART_UNITS";


export function addToCartAction({id, name, description, img, price, units}) {
  return {
    type: ADD_TO_CART,
    payload: {id, name, description, img, price, units}
  }
}

export function updateCartUnits({id, units}) {
  if (units !== 0){
    return {
      type: UPDATE_CART_UNITS,
      payload: {id, units}
    }
  }else{
    return {
      type: REMOVE_CART_UNITS,
      payload: {id}
    }
  }
}