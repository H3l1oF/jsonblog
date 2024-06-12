import React from "react";
import { Modal, Button } from "react-bootstrap";

function PostModal({ show, handleClose, title, content, updatedAt }) {

  const formattedContent = content.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
      <Modal show={show} onHide={handleClose} centered>
        <div className="border border-info rounded-3">
        <Modal.Header className="bg-secondary text-white border-info">
          <Modal.Title >{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-secondary text-white">
          <p>{formattedContent}</p>
        </Modal.Body>
        <Modal.Footer className="bg-secondary text-white border-info">
          <p className="me-auto">Updated At: {updatedAt}</p>
          <Button className="btn btn-warning ms-2" onClick={handleClose}>
            <i class="bi bi-x-square"></i>
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
  );
}

export default PostModal;