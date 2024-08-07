// AppRouter.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import { HOME, SIGNAUTH } from "../constants/routes";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";
import Home from "../views/Home";
import SignAuth from "../views/Inicio/SignAuth";
import { firebaseauthDTO } from "../server/dto/firebaseAuthDTO";

// Tipos para props
interface AppProps {
  navigate: (path: string) => void;
}

const AppRouter: React.FC<AppProps> = ({ navigate }) => {
  const [user, setUser] = useState<firebaseauthDTO>({
    name: "",
    email: "",
    password: "",
    token: "",
  });

  return (
    <Router>
      <Navigation user={user} setUser={setUser} />
      <div>
        <div className="Renderable">
          <Routes>
            <Route path={HOME} element={<Home />} />
            <Route
              path={SIGNAUTH}
              element={<SignAuth user={user} setUser={setUser} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
