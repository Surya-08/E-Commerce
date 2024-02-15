const initialState = {
  userDetails: {
    userName: "",
    password: "",
    email: "",
  },
  isLogged: false,
};
const UserLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    case "SET_AUTHENTICATION":
      return {
        ...state,
        isLogged: action.payload,
      };
    // case "SET_NEW_USER_DETAILS":
    //   // Checks if the item already exists in the cart
    //   const existingUser = state.newUserDetails.find(
    //     (item) => item.email === action.payload.email
    //   );
    //   if (existingUser) {
    //     return {
    //       ...state,
    //       userDetails: state.newUserDetails.map((item) =>
    //         item.email === action.payload.email
    //           ? {
    //               ...item,
    //               userName: item.userName,
    //               password: item.password,
    //               email: item.email,
    //             }
    //           : item
    //       ),
    //     };
    //   }
    default:
      return state;
  }
};
export default UserLoginReducer;
