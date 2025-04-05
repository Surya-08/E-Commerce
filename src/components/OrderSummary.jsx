import React from "react";

const OrderSummary = ({ accessData, finalPrice }) => {
  const totalItemsCount = accessData?.reduce((item, currentItem) => {
    return item + currentItem.quantityCount;
  }, 0);
  return (
    <div
      className="cart-item-mainContainer border-l border-black mx-4"
      data-testid="order-summary"
    >
      <div className="flex flex-col gap-2">
        <div className="total-items-count">
          PRICE DETAILS ({totalItemsCount})
        </div>
        <div className="font-bold">
          <div>
            <p>
              Total MRP<span className="p-16">&#8377;{finalPrice}</span>
            </p>
            <p>
              Discount on MRP
              <span className="p-3 text-cyan-700">&#8377;{50}</span>
            </p>
            <p>
              Platform Fee<span className="p-14 text-cyan-700">FREE</span>
            </p>
            <p>
              Shipping Fee<span className="p-14 text-cyan-700">FREE</span>
            </p>
          </div>
          <hr />
          <div id="total-price">
            Total Amount<span className="p-14">&#8377;{finalPrice - 50}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
