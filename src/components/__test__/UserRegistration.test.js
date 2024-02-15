import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData/data";
import { store } from "../../redux/store";
import UserRegistration from "../UserRegistration";

describe("SignUp Page of Shoppe APP", () => {
  afterEach(cleanup);
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData), // Assuming you have mockData defined somewhere
      })
    );
  });

  test("should render login or signup", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <UserRegistration />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("signUpPage")).toBeInTheDocument();

    const userName = screen.getByLabelText(/Username/i);
    userEvent.type(userName, "John");
    await waitFor(() => {
      expect(userName.value).toBe("John");
    });

    const email = screen.getByLabelText(/Email/i);
    userEvent.type(email, "john@gmail.com");
    await waitFor(() => {
      expect(email.value).toBe("john@gmail.com");
    });

    const userPassword = screen.getByLabelText(/Password/i);
    userEvent.type(userPassword, "john@123");
    await waitFor(() => {
      expect(userPassword.value).toBe("john@123");
    });
  });
});
