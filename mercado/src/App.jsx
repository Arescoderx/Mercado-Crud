import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BarraNavegacao from "./components/BarraNavegacao";
import { AuthProvider } from "./contexts/UserContext";
function App() {
  return (
    <>
      <AuthProvider>
        <div className="App"></div>
        <BarraNavegacao />
        <Container>
          <Outlet />
        </Container>
      </AuthProvider>
    </>
  );
}

export default App;
