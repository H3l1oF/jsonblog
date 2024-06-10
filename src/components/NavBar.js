import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Json Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link>/</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
            <Nav.Link>/</Nav.Link>
            <Nav.Link href="/view">View</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}

export default NavBar
