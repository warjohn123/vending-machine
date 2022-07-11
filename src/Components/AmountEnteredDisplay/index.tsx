import React from "react";
import { formatter } from "../../utils/currency";

interface AmountEnteredDisplayProps {
  amountEntered: number;
}

function AmountEnteredDisplay({ amountEntered }: AmountEnteredDisplayProps) {
  return <div>Total Amount Entered: {formatter.format(amountEntered)}</div>;
}

export default AmountEnteredDisplay;
