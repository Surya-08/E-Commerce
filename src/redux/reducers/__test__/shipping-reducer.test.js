import ShippingReducer from "../shipping-reducer";
describe("Shipping Reducer", () => {
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
  test("should return initial state", async () => {
    expect(ShippingReducer(undefined, {})).toEqual(initialState);
  });
  test("should handle SET_SHIPPING_ADDRESS_DETAILS", () => {
    const newShippingDetails = {
      country: "USA",
      fullName: "John Doe",
      phoneNumber: "1234567890",
      houseNumber: "123",
      area: "Sample Area",
      locality: "Sample Locality",
      pincode: "12345",
      city: "Sample City",
      state: "Sample State",
    };
    const action = {
      type: "SET_SHIPPING_ADDRESS_DETAILS",
      payload: newShippingDetails,
    };
    const expectedState = {
      shippingDetails: newShippingDetails,
    };
    expect(ShippingReducer(initialState, action)).toEqual(expectedState);
  });
});
