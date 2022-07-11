import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDisplay from "./index";

test("renders amount correctly", () => {
  const amount: number = 10;
  const product: Product = {
    name: "Vanilla",
    price: 10.3,
  };
  const onClick = jest.fn();
  render(
    <ProductDisplay
      product={product}
      onClick={onClick}
      amountEntered={amount}
    />
  );
  const linkElement = screen.getByText(/10.30/i);
  expect(linkElement).toBeInTheDocument();
});
