
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import cartReducer from './cart_reducer';
import productReducer from './productReducer';
import pageReducer from './pageReducer';

const rootReducer = combineReducers({
    userReducer,
    cart: cartReducer,
    productReducer,
    pageReducer,
});

export default rootReducer;