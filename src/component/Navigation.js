import React, { Component } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/Intro">Navbar</Navbar.Brand>
      <Container fluid>
        <Nav className="me-auto">
           <Nav.Link href="/Intro">Intro</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Search">Search</Nav.Link>
            <Nav.Link href="/Auction">Autcion</Nav.Link>
            
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Navigation;
