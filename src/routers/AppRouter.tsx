// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import { HOME, SIGNAUTH } from "../constants/routes";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";
import Home from "../views/Home";
import SignAuth from "../views/Inicio/SignAuth";

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
            <Route path={SIGNAUTH} element={<SignAuth />} />
            {/* Asegúrate de agregar todas las rutas necesarias aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
