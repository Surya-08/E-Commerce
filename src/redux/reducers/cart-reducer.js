const initialState = {
  cartDetails: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Checks if the item already exists in the cart
      const existingItem = state.cartDetails.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cartDetails: state.cartDetails.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantityCount: item.quantityCount + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartDetails: [
            ...state.cartDetails,
            { ...action.payload, quantityCount: 1 },
          ],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartDetails: state.cartDetails.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartDetails: state.cartDetails.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantityCount: item.quantityCount + 1,
              }
            : item
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartDetails: state.cartDetails.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantityCount: item.quantityCount - 1,
              }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
