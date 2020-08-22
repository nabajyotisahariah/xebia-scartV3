import {LOGIN_USER_INITIATE, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER_REQUEST} from './userType'

var initialState = {
    loading: false,
    data : [],
    error : null
}
export const userReducer = (state = initialState, action) => {
    //console.log("userReducer ",state," action ",action.type)
    switch(action.type) {
        case LOGIN_USER_INITIATE:
            return {
                ...state,
                loading : true
            }
        case LOGIN_USER_SUCCESS:
            return {
                loading : false,
                data : action.payload,
                error : null
            }
        case LOGIN_USER_FAILURE:
            return {
                loading : false,
                data : [],
                error : action.payload
            }
        case LOGOUT_USER_REQUEST: 
            return {
                loading : false,
                data : [],
                error : null
            }        
        default:
            return state
    }
}