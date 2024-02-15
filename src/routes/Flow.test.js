import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Flow from "./Flow";

describe("Flow component routing", () => {
  test("renders Home component for /home route", async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <Flow />
      </MemoryRouter>
    );
    expect(screen.getByText("New Arrivals")).toBeInTheDocument(); // Replace with your Home component content
  });
});
