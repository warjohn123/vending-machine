import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import AmountEnteredDisplay from "../../Components/AmountEnteredDisplay";
import AmountForm from "../../Components/AmountForm";
import OrderSummaryComponent from "../../Components/OrderSummary";
import VendingMenu from "../../Components/VendingMenu";
import WelcomeComponent from "../../Components/Welcome";
import { formatter } from "../../utils/currency";

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

function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [amountEntered, setAmounEntered] = useState<number>(0);
  const [hasChange, setHasChange] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
    setStep(1);
  };

  const enterEmount = (amount: string) => {
    const formattedAmount = parseFloat(amount);
    setAmounEntered(amountEntered + formattedAmount);
  };

  useEffect(() => {
    if (!hasChange) {
      setStep(0);
    }
  }, [hasChange]);

  return (
    <>
      <WelcomeComponent />
      <Row>
        {step === 0 ? (
          <Col md={8}>
            <VendingMenu
              products={menu}
              onClick={selectProduct}
              amountEntered={amountEntered}
            />
            <div className="mt-3">
              <AmountEnteredDisplay amountEntered={amountEntered} />
            </div>
            <div className="mt-3">
              <AmountForm onAmountEnter={enterEmount} />
            </div>
          </Col>
        ) : (
          <Col>
            <OrderSummaryComponent
              selectedProduct={selectedProduct}
              amountEntered={amountEntered}
              setSelectedProduct={setSelectedProduct}
              setAmounEntered={setAmounEntered}
              setHasChange={setHasChange}
              hasChange={hasChange}
              setStep={setStep}
            ></OrderSummaryComponent>
          </Col>
        )}
      </Row>
    </>
  );
}

export default HomePage;
