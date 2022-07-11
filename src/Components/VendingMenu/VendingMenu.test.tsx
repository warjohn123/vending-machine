import React from "react";
import { render, screen } from "@testing-library/react";
import VendingMenu from "./index";

test("renders component correctly", () => {
  const menu: Product[] = [
    {
      name: "Caramel",
      price: 2.5,
    },
    {
      name: "Hazelnut",
      price: 3.1,
    },
    {
      name: "Organic Raw",
      price: 2.0,
    },
  ];
  const onClick = jest.fn();
  render(<VendingMenu products={menu} onClick={onClick} amountEntered={30} />);
  const linkElement = screen.getByText(/Caramel/i);
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText(/Hazelnut/i);
  expect(linkElement2).toBeInTheDocument();

  const linkElement3 = screen.getByText(/Organic Raw/i);
  expect(linkElement3).toBeInTheDocument();
});
