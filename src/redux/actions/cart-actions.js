export const addToCartAction = (value) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: value,
    });
  };
};
export const removeFromCart = (itemId) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: itemId,
  };
};

export const incrementQuantity = (itemId) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: itemId,
  };
};

export const decrementQuantity = (itemId) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: itemId,
  };
};
