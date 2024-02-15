import { store } from "../../store";
import {
  addToCartAction,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../cart-actions";

describe("Cart Actions", () => {
  test("creates ADD_TO_CART action", () => {
    const value = { id: 1, name: "Product" };
    store.dispatch(addToCartAction(value));
  });

  test("creates REMOVE_FROM_CART action", () => {
    const itemId = 1;
    store.dispatch(removeFromCart(itemId));
  });

  test("creates INCREMENT_QUANTITY action", () => {
    const itemId = 1;
    store.dispatch(incrementQuantity(itemId));
  });

  test("creates DECREMENT_QUANTITY action", () => {
    const itemId = 1;
    store.dispatch(decrementQuantity(itemId));
  });
});
