import {LOGIN_USER_INITIATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_REQUEST} from './userType'
import axios from 'axios';
//const axios = require('axios');

export const loginInitiateAction = () => {
    return {
        type : LOGIN_USER_INITIATE
    }
}

export const successRequestAction = (users) => {
    return {
        type : LOGIN_USER_SUCCESS,
        payload : users
    }
}

export const failureRequestAction = (err) => {
    return {
        type : LOGIN_USER_FAILURE,
        payload : err
    }
}


export const __loginAction = (username, password) => {

    return (dispatch) => {

        dispatch(loginInitiateAction());
        return axios.get('https://xebiascart.herokuapp.com/users?username=amigo', {})
        .then( response => {

            //console.log(response);
            const user = response.data[0];

            //console.log("asyncLoginAction ",user," == ",user.username, " = ",user.password," == ",username," = ",password)
            if(user.username == username && user.password == password) {
                
                localStorage.setItem("userInfo", JSON.stringify(user))
                return dispatch( successRequestAction(user));
            }
            else {
                return dispatch( failureRequestAction("Login Failed"));
            } 
            
        })
        .catch( error => {
            console.log(error);
            return dispatch(failureRequestAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }    
}

export const loginAction = (username, password) => {

    return (dispatch) => {

        dispatch(loginInitiateAction());

        let formData = new FormData();
        formData.append('name', username);
        formData.append('password', password);
        //formData.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

        return fetch('http://localhost:9000/users/validate', {
            body: formData,
            method: "post",
            //headers: { 'content-type': 'application/x-www-form-urlencoded' },
            //headers : {"Content-Type": "application/json" }
        })
        .then( res => res.json()).
        then( response => {

            console.log("loginAction ",response);
            const user = response.data[0];

            //console.log("asyncLoginAction ",user," == ",user.username, " = ",user.password," == ",username," = ",password)
            if(user.username == username && user.password == password) {
                
                localStorage.setItem("userInfo", JSON.stringify(user))
                return dispatch( successRequestAction(user));
            }
            else {
                return dispatch( failureRequestAction("Login Failed"));
            } 
            
        })
        .catch( error => {
            console.log(error);
            return dispatch(failureRequestAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }    
}

export const logoutAction = () => {    
    return (dispatch) => {
        dispatch({type:LOGOUT_USER_REQUEST});
        localStorage.setItem("userInfo", null);
    } 
}
