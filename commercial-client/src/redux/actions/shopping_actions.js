import {FINISHED_SHOPPING, RESET_CART, RESET_SHOPPING} from '../types';

export const saveShopping = (token, payload) => async (dispatch) => {
    const url = "http://localhost:8080/saveShopping";
    let res = await fetch(url, {method: 'POST', body: JSON.stringify(payload), headers: {
        'Content-Type': 'application/json',
        'Authorization' : token
    }} );
    dispatch({ type: RESET_CART, payload: res})
    dispatch({ type: FINISHED_SHOPPING, payload: res})
    dispatch({ type: RESET_SHOPPING, payload: res})
}

export const cancelShopping = (token, payload) => async (dispatch) => {
    const url = "http://localhost:8080/cancelShopping";
    await fetch(url, {method: 'POST', body: JSON.stringify(payload), headers: {
        'Content-Type': 'application/json',
        'Authorization' : token
    }} );
}