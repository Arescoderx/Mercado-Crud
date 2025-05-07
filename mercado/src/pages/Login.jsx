import React, { use } from "react";
import { useForm } from "react-hook-form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Container, Button, Alert } from "react-bootstrap";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useState } from "react";
import "../index.css";
import { useVericaLogin } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { verificaLogin } = useVericaLogin();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Dados:", data);

    const respostaVerificacao = verificaLogin(data);

    if (respostaVerificacao === "Login efetuado com sucesso") {
      alert(respostaVerificacao);
      navigate("/home");
    } else {
      setAlertClass("mb-5 mt-2");
      setAlertMessage(respostaVerificacao);
    }
  };
  const onError = (errors) => {
    console.log("Erros:", errors);
  };

  const [alertClass, setAlertClass] = useState("mb-5 d-none");

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
        <Form
          style={{ width: "75%", margin: "auto", textAlign: "center" }}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-5"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "O email é obrigatório",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email inválido",
                },
                validate: (value) => value.includes("@") || "Email inválido",
              })}
            ></Form.Control>
            {errors.email && <p className="error">{errors.email.message}</p>}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInputPassword"
            label="Senha"
            className="mb-5"
          >
            <Form.Control
              type="Password"
              placeholder="Senha"
              {...register("senha", {
                required: "A senha é obrigatória",
              })}
            ></Form.Control>
            {errors.senha && <p className="error">{errors.senha.message}</p>}
          </FloatingLabel>
          <Button variant="primary" type="submit" className="mb-5" size="lg">
            Login
          </Button>
          <Alert
            variant="danger"
            className={alertClass}
            style={{
              position: "absolute",
              width: "30%",
              left: "35%",
              top: "90%",
            }}
          >
            Sim
          </Alert>
        </Form>
      </Container>
    </div>
  );
};
export default Login;
