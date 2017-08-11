import {createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    //INMUTAVILIDAD
    return {
      ...state,
      cart: state.cart.concat(action.product)//LLAVE
    }
  } else if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter(product => product.id !== action.product.id)
    }
  }
  return state;
};

export default createStore(reducer, { cart: [] });
