import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AmountForm from "./index";

const setup = () => {
  const handleSubmit = jest.fn();
  const utils = render(<AmountForm onAmountEnter={handleSubmit} />);
  const button: any = utils.getAllByText("Enter")[0];
  const input: any = utils.getAllByPlaceholderText("Enter an amount")[0];
  return {
    button,
    input,
    ...utils,
  };
};

test("renders should input value correctly", () => {
  const handleSubmit = jest.fn();
  render(<AmountForm onAmountEnter={handleSubmit} />);
  const { button, input } = setup();
  fireEvent.input(input, { target: { value: "10" } });
  fireEvent.click(button);
  expect(handleSubmit).toHaveBeenCalled();
});
