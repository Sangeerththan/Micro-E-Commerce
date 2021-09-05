import { CREATE_USER, USERNAME_AVAILABILITY, RESET_USER_DATA, PROCEED_TO_LOGIN, AUTHENTICATE_USER_SUCCESS, AUTHENTICATE_USER_FAILED, PAST_SHOPPING, GET_USER_DATA } from '../types';

export const createUser = (user) => async (dispatch) => {
    const url = "http://localhost:8080/register";
    let res = await fetch(url, {method: 'POST', body:JSON.stringify(user.user), headers: {
        'Content-Type': 'application/json'
    }} );
    res = await res.json();
    dispatch({ type: CREATE_USER, payload: res});
    if (res){
        dispatch({ type: PROCEED_TO_LOGIN, payload: res})
    }
}

export const authenticateUser = (user) => async (dispatch) => {
    const url = "http://localhost:8080/authenticate";
    let res = await fetch(url, {method: 'POST', body:JSON.stringify(user), headers: {
        'Content-Type': 'application/json'
    }} );
    res = await res.json();
    if (res.status === 401){
        dispatch({ type: AUTHENTICATE_USER_FAILED, payload: res});
    } else {
        res.username = user.username;
        dispatch({ type: AUTHENTICATE_USER_SUCCESS, payload: res});
    }

}

export const isUsernameAvailable = (username) => async (dispatch) => {
    const url = "http://localhost:8080/isUsernameAvailable";
    console.log(username);
    let res = await fetch(url, {method: 'POST', body:username, headers: {
        'Content-Type': 'application/json',
        
    }} );
    res = await res.json();
    dispatch({ type: USERNAME_AVAILABILITY, payload: res})
}

export const getPastShopping = (payload) => async (dispatch) => {
    const url = "http://localhost:8080/getShopping";
    let res = await fetch(url, {method: 'POST', body:payload.username, headers: {
        'Content-Type': 'application/json',
        'Authorization' : payload.token
    }} );
    res = await res.json();
    dispatch({ type: PAST_SHOPPING, payload: res})
}

export const getUserData = (payload) => async (dispatch) => {
    const url = "http://localhost:8080/getUserData";
    let res = await fetch(url, {method: 'POST', body:payload.username, headers: {
        'Content-Type': 'application/json',
        'Authorization' : payload.token
    }} );
    res = await res.json();
    dispatch({ type: GET_USER_DATA, payload: res})
}

export const resetData = () => async (dispatch) => {
    dispatch({type: RESET_USER_DATA, payload: true})
}