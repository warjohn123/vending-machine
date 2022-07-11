import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { formatter } from "../../utils/currency";

interface OrderSummaryComponentProps {
  selectedProduct: Product | null;
  setSelectedProduct: (selectedProduct: Product | null) => void;
  amountEntered: number;
  setAmounEntered: (amount: number) => void;
  hasChange: boolean;
  setHasChange: (hasOrdered: boolean) => void;
  setStep: (step: number) => void;
}

function OrderSummaryComponent({
  selectedProduct,
  setSelectedProduct,
  amountEntered,
  setAmounEntered,
  hasChange,
  setHasChange,
  setStep,
}: OrderSummaryComponentProps) {
  const checkout = () => {
    setSelectedProduct(null);
    const amount = amountEntered - (selectedProduct?.price || 0);
    setAmounEntered(amount);
    if (amount) {
      setHasChange(true);
    } else {
      setHasChange(false);
      setStep(0);
    }
  };

  const getChange = () => {
    setHasChange(false);
    setAmounEntered(0);
    setStep(0);
  };

  return (
    <div>
      {selectedProduct && selectedProduct.name ? (
        <>
          <p>You have selected {selectedProduct?.name}</p>

          <Button onClick={checkout}>Checkout</Button>
        </>
      ) : (
        <>{!hasChange && <p>You have not selected a product yet</p>}</>
      )}

      {hasChange && amountEntered ? (
        <>
          <p>You have a change for {formatter.format(amountEntered)}</p>
          <Button onClick={getChange}>Get change</Button>
        </>
      ) : null}
    </div>
  );
}

export default OrderSummaryComponent;
