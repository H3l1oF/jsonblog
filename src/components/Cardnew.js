import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function Cardnew({ id, title, content }) {
  const navigate = useNavigate();

  function del(id) {
    const options = {
      method: "DELETE"
    }
    fetch("http://localhost:3030/posts/"+id,options);
    window.location.reload();
  }

  return (
    <div>
      <Card
        style={{ width: "18rem", margin: "10px" }}
        className="bg-secondary text-white align-items-center"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button variant="info" className="mx-2">
            <i className="bi bi-eye"></i>
          </Button>
          <Button variant="warning" onClick={() => navigate(`/edit/${id}`)} className="mx-2">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" onClick={() => del(id)} className="mx-2">
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cardnew;
