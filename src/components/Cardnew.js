import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PostModal from "./PostModal";
import { useState } from "react";

function Cardnew({ id , title, content, updatedAt }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  function del(id) {
    console.log(id);
    const options = {
      method: "DELETE",
    };
    fetch("http://localhost:3030/posts/"+id,options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      window.location.reload();
    })
    .catch(error => console.error('There was a problem with the fetch operation:', error));
  }

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Card
        style={{ width: "18rem", margin: "10px" }}
        className="bg-secondary text-white align-items-center"
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content.slice(0, 25)}...</Card.Text>
          <Button variant="info" onClick={handleShowModal} className="mx-2">
            <i className="bi bi-eye"></i>
          </Button>
          <Button variant="warning" onClick={(e) => navigate(`/edit/${id}`)} className="mx-2">
            <i className="bi bi-pencil"></i>
          </Button>
          <Button variant="danger" onClick={(e) => del(id)} className="mx-2">
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Body>
      </Card>
      <PostModal
        show={showModal}
        handleClose={handleCloseModal}
        title={title}
        content={content}
        updatedAt={updatedAt}
      />
    </div>
  );
}

export default Cardnew;
