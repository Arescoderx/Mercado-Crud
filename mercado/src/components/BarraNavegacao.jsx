import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { BsShop } from "react-icons/bs";
const BarraNavegacao = () => {
  const usuarioNome = "Visitante"
  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <BsShop size="1.5em" className="me-3" color="white" />
            Mercado
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Produtos</Nav.Link>
              <Nav.Link href="/cadastraProduto">Cadastro</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Navbar.Text style={{ color: "white", marginRight: "20px" }}>
                Usuario: {usuarioNome}
              </Navbar.Text>
              {usuarioNome === "Visitante" ? (
                <>
                  <Button variant="primary" href="/login">
                    Entrar
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="danger" href="/login">Sair</Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNavegacao;
