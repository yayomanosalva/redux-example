const addTOcart = product => {
  return{
    type:"ADD_TO_CART",
    product
  }
};

const removeFRomCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  }
};
