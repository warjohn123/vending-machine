export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const isValidAmount = (amount: string) => {
  const regex = /^\$?[0-9]+(\.[0-9][0-9])?c?$/;

  return regex.test(amount);
};
