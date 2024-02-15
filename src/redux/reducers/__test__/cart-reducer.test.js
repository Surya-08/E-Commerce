import cartReducer from "../cart-reducer";

const cartItems = {
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
};
describe("Cart Reducer", () => {
  const initialState = {
    cartDetails: [],
  };
  test("should return initial state", async () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });
  test("should handle ADD_TO_CART", () => {
    const action = {
      type: "ADD_TO_CART",
      payload: cartItems,
    };
    const expectedState = {
      cartDetails: [cartItems],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  test("should handle REMOVE_FROM_CART", () => {
    const action = {
      type: "REMOVE_FROM_CART",
      payload: cartItems.id,
    };
    const expectedState = {
      cartDetails: [],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  test("should handle INCREMENT_QUANTITY", () => {
    const initialState = {
      cartDetails: [cartItems],
    };
    const action = {
      type: "INCREMENT_QUANTITY",
      payload: cartItems.id,
    };
    const expectedState = {
      cartDetails: [
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
          quantityCount: 2,
        },
      ],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
  test("should handle DECREMENT_QUANTITY", () => {
    const initialState = {
      cartDetails: [
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
          quantityCount: 2,
        },
      ],
    };
    const action = {
      type: "DECREMENT_QUANTITY",
      payload: cartItems.id,
    };
    const expectedState = {
      cartDetails: [
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
      ],
    };
    expect(cartReducer(initialState, action)).toEqual(expectedState);
  });
});
