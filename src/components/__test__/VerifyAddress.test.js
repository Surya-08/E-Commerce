import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData/data";
import { store } from "../../redux/store";
import VerifyAddress from "../VerifyAddress";

describe("Home Page of Shoppe APP", () => {
  afterEach(cleanup);
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData), // Assuming you have mockData defined somewhere
      })
    );
  });

  test("should render address summary", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <VerifyAddress />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("address-summary")).toBeInTheDocument();
  });
});
