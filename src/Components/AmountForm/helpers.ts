export function getFormattedAmount(amount: string): string {
  let formattedAmount: string = "";
  if (amount.charAt(0) === "$") {
    formattedAmount = amount.substring(1);
  } else if (amount.charAt(amount.length - 1) === "c") {
    if (amount.substring(0, amount.length - 1).length < 2) {
      formattedAmount = `0.0${amount.substring(0, amount.length - 1)}`;
    } else {
      formattedAmount = `0.${amount.substring(0, amount.length - 1)}`;
    }
  } else {
    formattedAmount = amount;
  }

  return formattedAmount;
}
