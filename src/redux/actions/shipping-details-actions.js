export const shippingAddressDetailsActions = (shippingAddress) => {
  return (dispatch) => {
    dispatch({
      type: "SET_SHIPPING_ADDRESS_DETAILS",
      payload: shippingAddress,
    });
  };
};
export default shippingAddressDetailsActions;
