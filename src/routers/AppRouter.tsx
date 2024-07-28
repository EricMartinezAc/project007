import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Home from "../views/Home";
import Singin_ from "../views/Singing/Singin";
import Dashboard_ from "../views/Dashboard/Dashboard";

import { AuthProvider } from "../AuthProvider";

// Tipos para props
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <AuthProvider>
        <div className="w-screen h-screen bg-gray-100">
          {/* Limitaciones de vistas */}
          <div className="md:hidden">
            <p>
              Tu dispositivo no cumple con las características necesarias para
              la version web.
              <br />
              <b>Ponte en contacto con el proveedor del servicio.</b>
            </p>
          </div>
          {/* Renderización de vistas */}
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Singin" element={<Singin_ />} />
              <Route path="/Dashboard" element={<Dashboard_ />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    </>
  );
};

export default App;
