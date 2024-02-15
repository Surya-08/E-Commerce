const initialState = {
  shippingDetails: {
    country: "",
    fullName: "",
    phoneNumber: "",
    houseNumber: "",
    area: "",
    locality: "",
    pincode: "",
    city: "",
    state: "",
  },
};
const ShippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SHIPPING_ADDRESS_DETAILS":
      return {
        ...state,
        shippingDetails: action.payload,
      };
    default:
      return state;
  }
};
export default ShippingReducer;
