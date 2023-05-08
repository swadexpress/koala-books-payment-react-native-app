import {
    ADD_TO_CART,
    CHECK_OUT,
    DELETE_PRODUCT,
    LOADED_PRODUCTS,
    LOADING_PRODUCTS,
    SENDING_PRODUCT,
    SENT_PRODUCT,
    LOADING_CAROUSERL,
    LOADED_CAROUSERL,
  
  } from '../actions/types';
  
  const intialState = {
    sending: false,
    loading: true,
    products: [],
    product: null,
    cartProducts: [],
  };
  
  export default (state = intialState, {payload, type}: any) => {
    switch (type) {
      case SENDING_PRODUCT:
        return {
          ...state,
          sending: true,
        };
  
  // ........................................................
  
      case LOADING_PRODUCTS:
        return {
          ...state,
          loading: false,
        };

  
      default:
        return state;
    }
  };
  