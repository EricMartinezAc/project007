// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import { HOME, SIGNIN, SIGNUP } from "../constants/routes";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";
import Home from "../views/Home";
import SignUp from "../views/SingUp";
import SignIn from "../views/SingIn";

// Tipos para props
interface AppProps {
  navigate: (path: string) => void;
}

const AppRouter: React.FC<AppProps> = ({ navigate }) => {
  return (
    <Router>
      <Navigation />
      <div>
        {/* <div className="NoRendereable">
          <p>
            Tu dispositivo no cumple con las características necesarias para la
            versión web.
            <br />
            <b>Ponte en contacto con el proveedor del servicio.</b>
          </p>
        </div> */}
        <div className="Renderable">
          {/* <Basket /> */}
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route path={SIGNIN} element={<SignIn />} />
            <Route path={SIGNUP} element={<SignUp />} />
            {/* Asegúrate de agregar todas las rutas necesarias aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
