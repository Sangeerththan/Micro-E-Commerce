import {GET_ALL_PRODUCTS} from '../types';

export const getAllProducts = (token) => async (dispatch) => {
    const url = "http://localhost:8080/getAllProducts";
    let res = await fetch(url, {method: 'GET', headers: {
        'Authorization' : token
    }} );
    res = await res.json();
    dispatch({ type: GET_ALL_PRODUCTS, payload: res})
}