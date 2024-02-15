import { store } from "../../store";
import shippingAddressDetailsActions from "../shipping-details-actions";

describe("Shipping Actions", () => {
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
    store.dispatch(shippingAddressDetailsActions(newShippingDetails));
  });
});
