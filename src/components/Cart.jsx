import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/actions/cart-actions";
import OrderSummary from "./OrderSummary";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cartReducer);
  // const [productAvail, setProductAvail] = useState(5);
  const accessData = cartData.cartDetails;

  //To calculate total amount of cart Items even if quantity is increased or decreased
  var finalPrice = accessData?.reduce((totalPrice, currentItem) => {
    totalPrice = totalPrice + currentItem.price * currentItem.quantityCount;
    return totalPrice;
  }, 0);

  //Add, Delete and Remove Items - dispatched through reducer
  const handleIncrementCount = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };
  const handleDecrementCount = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handleDelete = (productId) => {
    dispatch(removeFromCart(productId));
  };
  //To show Summary
  const handleProceedToPayment = () => {
    navigate("/checkout");
  };
  //To display out of stock when multiple users add same product with limited stock

  return (
    <div className="catergoryList" data-testid="cart-page">
      {accessData?.length === 0 ? (
        <p>Cart is empty!! Add products </p>
      ) : (
        <div style={{ marginBottom: "30px" }}>
          <ul style={{ listStyle: "none", paddingLeft: "0px" }}>
            {accessData?.map((item) => (
              <li key={item.id}>
                <div className="cart-item-mainContainer">
                  <div className="cart-items-left">
                    {item.quantityCount > 5 ? (
                      <div>
                        <img
                          src={item.image}
                          alt={item.title}
                          id="cart-img"
                          style={{ opacity: "0.5" }}
                        />
                        <p id="outOfStock">Out Of Stock</p>
                      </div>
                    ) : (
                      <img src={item.image} alt={item.title} id="cart-img" />
                    )}
                    {/* <img src={item.image} alt={item.title} id="cart-img" />
                    {item.quantityCount > 5 && (
                      <div style={{ margin: "5px 0px 5px 0px" }}>
                        <b style={{ color: "red" }}>
                          {item.title} is Out of Stock
                        </b>
                      </div>
                    )} */}
                  </div>
                  <div className="cart-items-right">
                    <div id="total-price">{item.title}</div>
                    <div>Unit Price: &#8377;{item.price}</div>
                    Quantity:
                    <div>
                      <button
                        data-testid="dec-button"
                        id="inc-dec-btn"
                        onClick={() => handleDecrementCount(item.id)}
                      >
                        <b>-</b>
                      </button>
                      <input
                        type="text"
                        name="name"
                        value={item.quantityCount}
                        id="cart-item-input"
                      />
                      <button
                        data-testid="inc-button"
                        id="inc-dec-btn"
                        onClick={() => handleIncrementCount(item.id)}
                      >
                        <b>+</b>
                      </button>
                    </div>
                    <div>
                      <button
                        data-testid="del-button"
                        onClick={() => handleDelete(item.id)}
                        className="cart-delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <div>
              <OrderSummary accessData={accessData} finalPrice={finalPrice} />
            </div>
          </div>
        </div>
      )}

      <div className="cart-footer" style={{ margin: "0px" }}>
        <button id="proceed-to-payment-btn" onClick={handleProceedToPayment}>
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default Cart;
