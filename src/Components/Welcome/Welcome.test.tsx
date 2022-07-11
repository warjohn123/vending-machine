import React from "react";
import { render, screen } from "@testing-library/react";
import WelcomeComponent from "./index";

test("renders component correctly", () => {
  render(<WelcomeComponent />);
  const linkElement = screen.getByText(/Welcome to the Vending Machine/i);
  expect(linkElement).toBeInTheDocument();
});
