import UserLoginReducer from "../user-login-reducer";

const newUserDetails = {
  userName: "john",
  password: "aky@123",
  email: "johnboi@gmail.com",
};
const loginStatus = true;

describe("User Login Reducer", () => {
  const initialState = {
    userDetails: {
      userName: "",
      password: "",
      email: "",
    },
    isLogged: false,
  };
  test("should return initial state", async () => {
    expect(UserLoginReducer(undefined, {})).toEqual(initialState);
  });
  test("should handle SET_USER_DETAILS", () => {
    const action = {
      type: "SET_USER_DETAILS",
      payload: newUserDetails,
    };
    const expectedState = {
      userDetails: newUserDetails,
      isLogged: false,
    };
    expect(UserLoginReducer(initialState, action)).toEqual(expectedState);
  });
  test("should handle SET_AUTHENTICATION", () => {
    const initialState = {
      isLogged: false,
    };
    const action = { type: "SET_AUTHENTICATION", payload: loginStatus };
    const expectedState = {
      isLogged: loginStatus,
    };
    expect(UserLoginReducer(initialState, action)).toEqual(expectedState);
  });
});
