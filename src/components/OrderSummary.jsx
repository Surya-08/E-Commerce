import React from "react";

const OrderSummary = ({ accessData, finalPrice }) => {
  const totalItemsCount = accessData?.reduce((item, currentItem) => {
    return item + currentItem.quantityCount;
  }, 0);
  return (
    <div className="cart-item-mainContainer" data-testid="order-summary">
      <div>
        <div className="total-items-count">
          PRICE DETAILS ({totalItemsCount})
        </div>
        <div className="summary-details">
          <div>
            <p>
              Total MRP<span>&#8377;{finalPrice}</span>
            </p>
            <p>
              Discount on MRP
              <span style={{ color: "darkcyan" }}>&#8377;{50}</span>
            </p>
            <p>
              Platform Fee<span style={{ color: "darkcyan" }}>FREE</span>
            </p>
            <p>
              Shipping Fee<span style={{ color: "darkcyan" }}>FREE</span>
            </p>
          </div>
          <hr />
          <div id="total-price">
            Total Amount<span>&#8377;{finalPrice - 50}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
