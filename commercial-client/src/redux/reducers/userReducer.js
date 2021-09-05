import { CREATE_USER, LOGIN_USER, USERNAME_AVAILABILITY, GET_USER_DATA, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILED, PAST_SHOPPING, FINISHED_SHOPPING, RESET_SHOPPING, PROCEED_TO_LOGIN, RESET_USER_DATA } from '../types';

const InitialState = {
    token: '',
    isUsernameAvailable: true,
    authenticated: false,
    incorrectCredential: false,
    username: '',
    pastShopping: [], 
    shoppingSuccessful: false,
    userData: {},
    proceedToLogin: false
}

const userReducer = (state = InitialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_USER:
            return {
                ...state,
                username: payload.username
            }
        case LOGIN_USER:
            return {
                ...state,
                token: payload.username
            }
        case USERNAME_AVAILABILITY:
            return {
                ...state,
                isUsernameAvailable: payload
            }
        case AUTHENTICATE_USER_SUCCESS:
            return {
                ...state,
                token: 'Bearer ' + payload.token,
                authenticated: true,
                incorrectCredential: false,
                username: payload.username,
                proceedToLogin: false
            }
        case AUTHENTICATE_USER_FAILED:
            return {
                ...state,
                token: '',
                authenticated: false,
                incorrectCredential: true,
                username: '',
                proceedToLogin: false
            }
        case PAST_SHOPPING:
            return {
                ...state,
                pastShopping: payload,
            }
        case FINISHED_SHOPPING:
            return {
                ...state,
                shoppingSuccessful: true,
            }
        case RESET_SHOPPING:
            return {
                ...state,
                shoppingSuccessful: false,
            }
        case GET_USER_DATA:
            let u = {}
            u.firstname = payload.firstname;
            u.lastname = payload.lastname;
            u.key = payload.id;
            u.address = payload.address;
            return {
                ...state,
                userData: u,
            }
        case PROCEED_TO_LOGIN:
            return {
                ...state,
                proceedToLogin: true,
            }
        case RESET_USER_DATA:
            return {
                ...state,
                authenticated: false,
                token: "",
                username: '',
                userData: '',
                proceedToLogin:false
            }
        default:
            return {
                ...state,
            }
    }
}; 

export default userReducer;