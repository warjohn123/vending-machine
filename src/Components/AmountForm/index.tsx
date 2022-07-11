import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { isValidAmount } from "../../utils/currency";
import { getFormattedAmount } from "./helpers";

interface AmountFormProps {
  onAmountEnter: (amount: string) => void;
}

function AmountForm({ onAmountEnter }: AmountFormProps) {
  const [amount, setAmount] = useState<string>("");
  const validateAmount = (event: any) => {
    event.preventDefault();
    if (!isValidAmount(amount)) {
      alert("Invalid amount");
      return;
    }
    onAmountEnter(getFormattedAmount(amount));
    setAmount("");
  };
  return (
    <form onSubmit={validateAmount}>
      <Form.Group className="mb-3">
        <Form.Control
          type="string"
          placeholder="Enter an amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">Enter</Button>
    </form>
  );
}

export default AmountForm;
