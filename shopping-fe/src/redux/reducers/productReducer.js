import { GET_ALL_PRODUCTS } from '../types';

const InitialState = {
    products: []
}

const productReducer = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return {
                ...state,
            }
    }
}; 

export default productReducer;