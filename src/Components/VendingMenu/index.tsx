import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductDisplay from "../ProductDisplay";

interface VendingMenuProps {
  products: Product[];
  amountEntered: number;
  onClick: (product: Product) => void;
}

function VendingMenu({ products, onClick, amountEntered }: VendingMenuProps) {
  return (
    <Row>
      {products.map((product: Product) => (
        <Col>
          <ProductDisplay
            product={product}
            onClick={onClick}
            amountEntered={amountEntered}
          />
        </Col>
      ))}
    </Row>
  );
}

export default VendingMenu;
