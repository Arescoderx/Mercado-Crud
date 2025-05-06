import React from "react";
import { useForm } from "react-hook-form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container, Button, Alert } from "react-bootstrap";
import { BsBoxArrowInRight } from "react-icons/bs";
const Login = () => {
  return (
    <div>
      <Container
        style={{ height: "100vh" }}
        className="justify-content-center alight-content-center"
      >
        <BsBoxArrowInRight
          style={{
            fontSize: "300px",
            color: "green",
            margin: "auto",
            width: "100%",
          }}
        />
        <Form style={{ width: "75%", margin: "auto", textAlign: "center" }}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-5"
          >
            <Form.Control type="email" placeholder="Email"></Form.Control>
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputPassword"
            label="Senha"
            className="mb-5"
          >
            <Form.Control type="Password" placeholder="Senha"></Form.Control>
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>
          <Alert variant="danger" className="mb-5" style={{position:"absolute", width:"30%", left:"35%", top:"90%"}}>Sim</Alert>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
