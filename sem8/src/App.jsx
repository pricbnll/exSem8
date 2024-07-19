import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Signin from "./pages/Singin/Singin";
import Signup from "./pages/Singup/Signup";
import Home from "./pages/Home/Home";

function App() {
  const isAuthenticated = true;
  // se true vai para a pagina Login, se false vai para Home

  function loginRedirect(componente) {
    if (isAuthenticated) {
      return <Navigate to="/" replace />;
    }

    return componente;
  }

  return (
    <>
      <Router>
        {" "}
        {/* switch */}
        <Routes>
          <Route path="/login" element={loginRedirect(<Signin />)} />
          <Route path="/cadastro" element={loginRedirect(<Signup />)} />


          {/* Se quiser uma rota que não precisa de autenticação coloque aqui a rota */}

          {/* Ternário para redirecionar rota */}
          {isAuthenticated ? (
          //Se quiser uma rota autenticada coloque aqui a rota 
            <>
              <Route path="/" Component={Home} />
            </>
          ) : (
            <Route path="*" element={<Navigate replace to="/login" />} />
          )}

          <Route path="/login" Component={Signin} />
          <Route path="/cadastro" Component={Signup} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
