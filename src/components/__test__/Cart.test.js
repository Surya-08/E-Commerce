import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { addToCartAction } from "../../redux/actions/cart-actions";
import { store } from "../../redux/store";
import mockData from "../../mockData/data";
import Cart from "../Cart";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../redux/reducers/cart-reducer";

const handleIncrement = jest.fn();
// const store = configureStore(cartReducer, initialState);
// const state = store.getState();
const mockProductData = [
  // Add mock data based on the structure of your product items
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
    quantityCount: 1,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 15,
    title: "Levis - Teal & Pink Button-up Shirt",
    price: 1700,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    rating: {
      rate: 4.6,
      count: 235,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
];
describe("Cart Page of Shoppe APP", () => {
  afterEach(cleanup);
  beforeEach(() => {
    jest.spyOn(React, "useState").mockReturnValueOnce([mockProductData]);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData), // Assuming you have mockData defined somewhere
      })
    );
  });

  test("should render cart items", async () => {
    const initialState = {
      cartDetails: [mockProductData[0]],
    };
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </MemoryRouter>
      // (store.cartReducer = {
      //   initialState,
      // })
    );
    const state = store.getState().cartReducer;

    // state.cartReducer.cartDetails = [mockProductData[0]];
    // console.log(state, "hello");
    expect(state.cartDetails).toBe(initialState);

    expect(screen.getByTestId("cart-page")).toBeInTheDocument();
    //For handleIncrement
    const incButton = screen.getByTestId("inc-button");
    expect(incButton).toBeInTheDocument();
  });
  // test("for handle Increment", async () => {
  //   render(
  //     <MemoryRouter>
  //       <Provider store={store}>
  //         <Cart />
  //       </Provider>
  //     </MemoryRouter>
  //   );
  //   expect(screen.getByTestId("cart-page")).toBeInTheDocument();
  //   const incButton = screen.getByTestId("inc-button");
  //   expect(incButton).toBeInTheDocument();
  // });
});
