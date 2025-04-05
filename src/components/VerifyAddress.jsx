import React from "react";
import { useSelector } from "react-redux";

const VerifyAddress = () => {
  const addressData = useSelector(
    (state) => state.ShippingReducer.shippingDetails
  );

  return (
    <div data-testid="address-summary">
      <div id="card">
        <input type="radio" className="cart-items-left"></input>
        <div className="cart-items-right" style={{ marginLeft: "50px" }}>
          <div>
            <p>{addressData.fullName}</p>
          </div>
          <div>
            {`${addressData.houseNumber} ${addressData.area}
          ${addressData.locality}`}
          </div>
          <div>
            {`${addressData.city}, ${addressData.state} -${addressData.pincode}`}
          </div>
          <div>{`${addressData.phoneNumber}`}</div>
          <div>
            <li>Cash on Delivery available</li>
          </div>
        </div>
        <div>
          <a
            href="https://phonepe.my.site.com/login?locale=us"
            className="cart-footer"
          >
            <button className="btn backdrop-brightness-50 bg-teal-600 border-none my-3">
              Continue to Payment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerifyAddress;
