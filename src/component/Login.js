import React, { Component } from "react";
import { Form, Button, Stack, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props){
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicID">
        <Form.Label>ID</Form.Label>
        <Form.Control type="ID" placeholder="Enter ID" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="sign in">
        sign in
      </Button>
    </Form>
  );
}
export default Login;
