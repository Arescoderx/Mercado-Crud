import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BarraNavegacao from "./components/BarraNavegacao";
function App() {
  return (
    <>
      <div className="App"></div>
      <BarraNavegacao />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
