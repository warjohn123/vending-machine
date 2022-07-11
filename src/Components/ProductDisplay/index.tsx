import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { formatter } from "../../utils/currency";

interface ProductDisplayProps {
  product: Product;
  amountEntered: number;
  onClick: (product: Product) => void;
}

function ProductDisplay({
  product,
  onClick,
  amountEntered,
}: ProductDisplayProps) {
  return (
    <Card
      style={
        amountEntered >= product.price
          ? { cursor: "pointer" }
          : { pointerEvents: "none", background: "#aaa" }
      }
      onClick={() => onClick(product)}
    >
      <Card.Body>
        <h5>{product.name}</h5>
        <p>{formatter.format(product.price)}</p>
      </Card.Body>
    </Card>
  );
}

export default ProductDisplay;
