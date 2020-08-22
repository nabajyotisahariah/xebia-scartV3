import * as Type from './productType'

var initialState = {
    loading: false,
    productList : [],
    searchList : [],
    filterList : [],
    addToCart:[],
    error : null
}
export const productReducer = (state = initialState, action) => {
    console.log("productReducer ",state," action ",action.type)
    switch(action.type) {
        case Type.PRODUCT_INITIATE:
            return {
                ...state,
                loading : true
            }
        case Type.PRODUCT_SUCCESS:
            return {
                ...state,
                loading : false,
                productList : action.payload,
                error : null
            }
        case Type.PRODUCT_FAILURE:
            return {
                ...state,
                loading : false,
                productList : [],
                error : action.payload
            }
        case Type.PRODUCT_SEARCH: 
            return {
                ...state,
                loading : false,
                searchList : action.payload,
                error : null
            }        
        case Type.PRODUCT_FILTER: 
            return {
                ...state,
                loading : false,
                filterList : action.payload,
                error : null
            }   
        case Type.PRODUCT_ADDTOCART: 
            return {
                ...state,
                loading : false,
                addToCart : [...state.addToCart, action.payload],
                error : null
            } 
        case Type.PRODUCT_ADDTOCART_STORAGE: 
            return {
                ...state,
                loading : false,
                addToCart : action.payload,
                error : null
            }     
        case Type.PRODUCT_CLEARCART: 
            return {
                ...state,
                loading : false,
                addToCart : [],
                error : null
            }           
                     
        default:
            return state
    }
}