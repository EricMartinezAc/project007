// AppRouter.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import { HOME, SIGNAUTH, HOME_USER } from "../constants/routes";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";
import Home from "../views/Home";
import SignAuth from "../views/Inicio/SignAuth";
import { firebaseauthDTO } from "../server/dto/firebaseAuthDTO";
import HomeUser from "../views/HomeUser";

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
    entrepreneur: false,
  });
  const [products, setproducts] = useState<any>([]);
  const [featuredProducts, setFeaturedProducts] = useState<any>([]);

  return (
    <Router>
      <Navigation user={user} setUser={setUser} />
      <div>
        <div className="Renderable">
          <Routes>
            <Route
              path={HOME}
              element={
                <Home
                  user={user}
                  setUser={setUser}
                  featuredProducts={featuredProducts}
                  setFeaturedProducts={setFeaturedProducts}
                  products={products}
                  setproducts={setproducts}
                />
              }
            />
            <Route
              path={SIGNAUTH}
              element={<SignAuth user={user} setUser={setUser} />}
            />
            <Route
              path={HOME_USER}
              element={
                <HomeUser
                  user={user}
                  setUser={setUser}
                  products={products}
                  setproducts={setproducts}
                  featuredProducts={featuredProducts}
                  setFeaturedProducts={setFeaturedProducts}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
