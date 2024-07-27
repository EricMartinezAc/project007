import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import Inicio_ from "../views/Inicio/Inicio";
import Singin_ from "../views/Singing/Singin";
import Dashboard_ from "../views/Dashboard/Dashboard";

// Tipos para props (si es necesario, puedes ajustar según lo que necesites)
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <div className="App">
        {/* Limitaciones de vistas */}
        <div className="noRenderable">
          <p>
            Tu dispositivo no cumple con las características necesarias.
            <br />
            <b>Ponte en contacto con el proveedor del servicio.</b>
          </p>
        </div>
        {/* Renderización de vistas */}
        <Router>
          <Routes>
            <Route path="/" element={<Inicio_ />} />
            <Route path="/Singin" element={<Singin_ />} />
            <Route
              path="/arcontroller/web/main/Dashboard"
              element={<Dashboard_ />}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
