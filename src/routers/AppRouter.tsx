// AppRouter.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../views/Home";
import Singin_ from "../views/Singing/Singin";
import Dashboard_ from "../views/Dashboard/Dashboard";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";

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
          <Basket />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Singin" element={<Singin_ />} />
            <Route path="/Dashboard" element={<Dashboard_ />} />
            {/* Asegúrate de agregar todas las rutas necesarias aquí */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
