import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider, useDispatch } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData/data";
import ProductsList from "../ProductsList";
import { store } from "../../redux/store";
import { addToCartAction } from "../../redux/actions/cart-actions";

const handleAddToCart = jest.fn();
const handleBuyNow = jest.fn();
describe("Products List", () => {
  afterEach(cleanup);
  beforeEach(() => {
    jest.spyOn(React, "useState").mockReturnValueOnce([mockData]);
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  });

  test("to render products list component", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductsList productData={[]} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("productsData")).toBeInTheDocument();
  });
  test("onClick of add to cart button handler function is to be called", async () => {
    const initialState = {
      cartDetails: [mockData[0]],
    };
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ProductsList productData={[mockData[1]]} />
        </Provider>
      </MemoryRouter>
    );
    const state = store.getState();
    await waitFor(() => {
      expect(state.cartReducer.cartDetails).toBe(initialState.cartDetails);
    });
    expect(screen.getByTestId("productsData")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByTestId("productsData")).toBe(mockData[1]);
    });
    const addButton = screen.getByTestId("addButton");
    userEvent.click(addButton);
    store(useDispatch(addToCartAction(mockData[1])));
    // expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
  // test("onClick of buynow", async () => {
  //   render(
  //     // <MemoryRouter>
  //     //   <Provider store={store}>
  //     <ProductsList
  //       productData={[
  //         {
  //           id: 2,
  //           title: "Mens Casual Premium Slim Fit T-Shirts ",
  //           price: 22.3,
  //           description:
  //             "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
  //           category: "men's clothing",
  //           image:
  //             "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  //           rating: {
  //             rate: 4.1,
  //             count: 259,
  //           },
  //         },
  //       ]}
  //     />
  //     //   </Provider>
  //     // </MemoryRouter>
  //   );
  //   expect(screen.getByTestId("productsData")).toBeInTheDocument();
  //   const buyNowButton = screen.getByTestId("buyNow-btn");
  //   userEvent.click(buyNowButton);
  //   //expect(handleBuyNow).toHaveBeenCalled();
  // });
});
