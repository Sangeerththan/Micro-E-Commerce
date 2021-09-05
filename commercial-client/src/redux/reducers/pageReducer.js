import { SET_PAGE } from '../actions/pageActions';

const InitialState = {
    page: ''
}

const pageReducer =  (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        default:
            return {
                ...state,
            }
        }
    }

export default pageReducer;

