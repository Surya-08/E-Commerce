import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  test("renders Flow component", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
