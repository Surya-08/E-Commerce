import { store } from "../../store";
import userDetailsActions, {
  addNewUserAction,
  userAuthAction,
} from "../user-login-actions";

describe("User Login Actions", () => {
  test("should handle SET_USER_DETAILS", () => {
    const userDetails = {
      userName: "John",
      password: "john#123",
      email: "john@gmail.com",
    };
    store.dispatch(userDetailsActions(userDetails));
  });
  test("should handle SET_AUTHENTICATION", () => {
    const isLogged = Boolean;
    store.dispatch(userAuthAction(isLogged));
  });
  test("should handle SET_NEW_USER_DETAILS", () => {
    const newUserDetails = {
      userName: "John",
      password: "john#123",
      email: "john@gmail.com",
    };
    store.dispatch(addNewUserAction(newUserDetails));
  });
});
