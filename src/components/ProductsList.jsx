import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartAction } from "../redux/actions/cart-actions";
import "./shopping.css";

const ProductsList = ({ productData, category }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const userData = useSelector((state) => state.UserLoginReducer);

  //To add products to cart on click of add to cart button
  const handleAddToCart = (item) => {
    const updatedCart = [...cartItems, item];
    setCartItems(updatedCart);
    dispatch(addToCartAction(item));
    //If not Logged In then only navigate to sign up
    if (userData.isLogged === false) {
      navigate("/signup");
    }
  };
  const handleBuyNow = () => {
    navigate("/cart");
  };

  return (
    <div className="catergoryList" data-testid="productsData">
      {category &&
        productData?.map((item) => (
          <div key={item.id}>
            <section className="search-products row-class">
              <ul className="ul-list">
                <li>
                  <img
                    src={item.image}
                    alt="product pictures"
                    className="categories-img"
                  />
                  <div className="product-info">
                    <p style={{ textAlign: "justify", width: "260px" }}>
                      {item.title}
                    </p>
                    <p>
                      ratings: {item.rating.rate} | {item.rating.count}
                    </p>
                    <p>&#8377;{item.price}</p>
                    {item.quantityCount > 5 ? (
                      <button
                        className="addtocart-btn"
                        style={{ backgroundColor: "lightgray", color: "Red" }}
                      >
                        OUT OF STOCK
                      </button>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="btn btn-primary bg-teal-600 border-none"
                        data-testid="addButton"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </section>
          </div>
        ))}
      <section>
        <button
          id="buynow"
          className="btn btn-primary bg-teal-600 border-none"
          onClick={handleBuyNow}
          data-testid="buyNow-btn"
        >
          Buy now
        </button>
      </section>
    </div>
  );
};

export default ProductsList;
