import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import mockData from "../../mockData/data";
import shippingAddressDetailsActions from "../../redux/actions/shipping-details-actions";
import { store } from "../../redux/store";
import ShippingDetails from "../ShippingDetails";

describe("Checkout Page of Shoppe APP", () => {
  afterEach(cleanup);
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
  });

  test("should render checkout page", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ShippingDetails />
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByTestId("checkoutPage")).toBeInTheDocument();
  });
  test("onchange of input fields handler function has to be called", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <ShippingDetails />
        </Provider>
      </MemoryRouter>
    );

    const name = screen.getByLabelText(/Name/i);
    userEvent.type(name, "John");
    await waitFor(() => {
      expect(name.value).toBe("John");
    });

    const phoneNumber = screen.getByLabelText(/Mobile No/i);
    userEvent.type(phoneNumber, "9142345678");
    await waitFor(() => {
      expect(phoneNumber.value).toBe("9142345678");
    });

    const pinCode = screen.getByLabelText(/Pin Code/i);
    userEvent.type(pinCode, "500075");
    await waitFor(() => {
      expect(pinCode.value).toBe("500075");
    });

    const address = screen.getByLabelText(
      /(House No, Building, Street, Area)/i
    );
    userEvent.type(address, "5-5/8");
    await waitFor(() => {
      expect(address.value).toBe("5-5/8");
    });

    const town = screen.getByLabelText(/Locality/i);
    userEvent.type(town, "Q City");
    await waitFor(() => {
      expect(town.value).toBe("Q City");
    });

    const city = screen.getByLabelText(/City/i);
    userEvent.type(city, "Hyderabad");
    await waitFor(() => {
      expect(city.value).toBe("Hyderabad");
    });

    const state = screen.getByLabelText(/State/i);
    userEvent.type(state, "Telangana");
    await waitFor(() => {
      expect(state.value).toBe("Telangana");
    });

    const country = screen.getByLabelText(/Country/i);
    userEvent.type(country, "India");
    await waitFor(() => {
      expect(country.value).toBe("India");
    });
  });
});
