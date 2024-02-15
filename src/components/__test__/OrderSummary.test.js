import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData/data";
import { store } from "../../redux/store";
import OrderSummary from "../OrderSummary";

describe("Home Page of Shoppe APP", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData), // Assuming you have mockData defined somewhere
      })
    );
  });

  afterEach(cleanup);
  test("should render order summary", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <OrderSummary accessData={mockData} />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("order-summary")).toBeInTheDocument();
  });
});
