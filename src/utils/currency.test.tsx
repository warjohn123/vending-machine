import React from "react";
import { formatter, isValidAmount } from "./currency";
describe("Currency Tests", () => {
  it("should transform to usd format", () => {
    const amount = formatter.format(10);

    expect(amount).toEqual("$10.00");
  });

  it("should not accept to the correct format", () => {
    const amount = formatter.format(10);

    expect(amount).not.toEqual("10");
  });

  it("should check if string is valid/invalid", () => {
    expect(isValidAmount("10")).toBeTruthy();
    expect(isValidAmount("sample")).not.toBeTruthy();
    expect(isValidAmount("$10")).toBeTruthy();
    expect(isValidAmount("10c")).toBeTruthy();
  });
});
