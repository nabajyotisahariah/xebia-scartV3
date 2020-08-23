import * as Type from './productType'
import axios from 'axios';
//const axios = require('axios');

export const productInitiateAction = () => {
    return {
        type : Type.PRODUCT_INITIATE
    }
}

export const productSuccessAction = (users) => {
    return {
        type : Type.PRODUCT_SUCCESS,
        payload : users
    }
}

export const productFaliureAction = (err) => {
    return {
        type : Type.PRODUCT_FAILURE,
        payload : err
    }
}

export const productRequestAction = () => {
    return (dispatch) => {
        dispatch(productInitiateAction());
        fetch(`${__API_URL__}/product/listing`)
        .then(res => res.json())
        .then( response => {
            console.log("productRequestAction ",response);
            if(response.status == 1) {
                const products = response.data;
                if(products) {
                    dispatch( productSuccessAction(products));
                }
                else {
                    dispatch( productFaliureAction("No data"));
                }
            }
            else {
                dispatch( productFaliureAction("No data"));
            }
            
            
        })
        .catch( error => {
            console.log(error);
            dispatch( productFaliureAction(error));
        })
        .finally(function () {
            // always executed
        });  
    }
}
//https://xebiascart.herokuapp.com/users?username=amigo - Login
//https://xebiascart.herokuapp.com/products - Product
//https://xebiascart.herokuapp.com/products?title=provogue - Autocomplete
//https://xebiascart.herokuapp.com/filters - Group Filter


export const searchRequestAction = (key) => {

    return (dispatch) => {
        return fetch(`${__API_URL__}/product/search`, {})
        .then( res => res.json() )
        .then( response => {
            console.log("searchRequestAction ", response);
            
                const products = response.data;
                if(products) {
                    dispatch({type: Type.PRODUCT_SEARCH,
                              payload: products
                            });
                }
                
            
        })
        .catch( error => {
            console.log(error);
        })
    }
}


export const filterRequestAction = () => {
    return (dispatch) => {
        fetch(`${__API_URL__}/product/filter`, {})
        .then( res =>  res.json() )
        .then(response => {
            
            console.log("filterRequestAction ", response);
            if(response.status == 1) {
                const products = response.data;
                if(products) {
                    dispatch( {
                        type: Type.PRODUCT_FILTER,
                        payload:products
                    });
                }               
            }
        })
        .catch( error => {
            console.log(error);
        })
    }
}

export const addToCart = (item) => {
    return {
        type : Type.PRODUCT_ADDTOCART,
        payload : item
    }
}

export const addToCartFromStorage = (item) => {
    return {
        type : Type.PRODUCT_ADDTOCART_STORAGE,
        payload : item
    }
}


export const clearCart = (item) => {
    return {
        type : Type.PRODUCT_CLEARCART,
        payload : item
    }
}