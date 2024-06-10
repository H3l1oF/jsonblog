import React from "react";
import { Button, Card } from "react-bootstrap";

function Cardnew({ title, content }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }} className="bg-secondary text-white align-items-center">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <Button variant="info" className="mx-2">
          <i className="bi bi-eye"></i>
        </Button>
        <Button variant="warning" className="mx-2">
          <i className="bi bi-pencil"></i>
        </Button>
        <Button variant="danger" className="mx-2">
          <i className="bi bi-trash"></i>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cardnew;
