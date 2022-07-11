import React from "react";
import { render, screen } from "@testing-library/react";
import AmountEnteredDisplay from "./index";

test("renders amount correctly", () => {
  const amount: number = 10;
  render(<AmountEnteredDisplay amountEntered={amount} />);
  const linkElement = screen.getByText(/10.00/i);
  expect(linkElement).toBeInTheDocument();
});
