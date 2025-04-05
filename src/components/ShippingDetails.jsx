import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import shippingAddressDetailsActions from "../redux/actions/shipping-details-actions";
import VerifyAddress from "./VerifyAddress";

const ShippingDetails = () => {
  const addressData = useSelector((state) => state.ShippingReducer);
  const dispatch = useDispatch();
  const [verifyAddress, setVerifyAddress] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    country: "",
    fullName: "",
    phoneNumber: "",
    houseNumber: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
    locality: "",
  });

  const handleChange = (name, value) => {
    setShippingInfo((previousValue) => ({ ...previousValue, [name]: value }));
    if (!/^\d{5}$/.test(addressData.pincode)) {
      console.error("Postal code should be 5 digits.");
      return "hello";
    }
  };

  const handleSubmit = () => {
    setVerifyAddress(true);
    dispatch(shippingAddressDetailsActions(shippingInfo));
  };

  return (
    <div data-testid="checkoutPage">
      <div className="mb-5 w-6/12 mx-auto font-semibold text-black">
        {!verifyAddress ? (
          <div className="catergoryList">
            <div className="checkout-address-header">CONTACT DETAILS</div>
            <div className="checkout">
              <label htmlFor="name" className="checkout-label">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="fullName"
                className="checkout-input"
                data-testid="checkout-name"
                value={addressData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
              />
              <label htmlFor="phone" className="checkout-label">
                Mobile No*
              </label>
              <input
                type="tel"
                id="phone"
                className="checkout-input"
                name="phoneNumber"
                value={shippingInfo.phoneNumber}
                maxLength={10}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />
            </div>
            <div className="checkout-address-header">ADDRESS</div>
            <div className="checkout">
              <label htmlFor="pincode" className="checkout-label">
                Pin Code*
              </label>
              <input
                type="number"
                name="pincode"
                id="pincode"
                className="checkout-input"
                maxLength={6}
                value={shippingInfo.pincode}
                onChange={(e) => handleChange("pincode", e.target.value)}
              />
              <label htmlFor="address" className="checkout-label">
                Address (House No, Building, Street, Area)*
              </label>
              <input
                type="text"
                id="address"
                className="checkout-input"
                name="area"
                maxLength={250}
                value={shippingInfo.area}
                onChange={(e) => handleChange("area", e.target.value)}
              />
              <label htmlFor="locality" className="checkout-label">
                Locality/Town*
              </label>
              <input
                type="text"
                id="locality"
                name="locality"
                className="checkout-input"
                maxLength={100}
                value={shippingInfo.locality}
                onChange={(e) => handleChange("locality", e.target.value)}
              />
              <label htmlFor="city" className="checkout-label">
                City/District*
              </label>
              <input
                type="text"
                className="checkout-input"
                id="city"
                name="city"
                maxLength={50}
                value={shippingInfo.city}
                onChange={(e) => handleChange("city", e.target.value)}
              />

              <label htmlFor="state" className="checkout-label">
                State*
              </label>
              <input
                type="text"
                id="state"
                className="checkout-input"
                name="state"
                maxLength={50}
                value={shippingInfo.state}
                onChange={(e) => handleChange("state", e.target.value)}
              />
              <label htmlFor="country" className="checkout-label">
                Country*
              </label>
              <input
                type="text"
                id="country"
                className="checkout-input"
                name="country"
                maxLength={50}
                value={shippingInfo.country}
                onChange={(e) => handleChange("country", e.target.value)}
              />
            </div>
            <button
              className="btn backdrop-brightness-50 bg-teal-600 border-none my-3"
              onClick={handleSubmit}
              data-testid="checkout-add-btn"
            >
              ADD ADDRESS
            </button>
          </div>
        ) : (
          <div>
            <VerifyAddress />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingDetails;
