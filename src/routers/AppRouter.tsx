// AppRouter.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

// Componentes
import { HOME, SIGNAUTH, HOME_USER, REMOTE_API } from "../constants/routes";
import { Navigation } from "../components/common";
import { Basket } from "../components/basket";
import Home from "../views/Home";
import SignAuth from "../views/Inicio/SignAuth";
import { userDTO, productDTO } from "../dto";
import HomeUser from "../views/HomeUser";
import { FetchProductsForClient } from "../resolvers/fetch";
import axios from "axios";

const AppRouter: React.FC = () => {
  const apiClient = axios.create({
    baseURL: REMOTE_API,
    timeout: 10000, // Tiempo de espera de 10 segundos
    headers: {
      "Content-Type": "application/json",
    },
  });
  const cookies = new Cookies();
  const [user, setUser] = useState<userDTO>({
    name: "",
    email: "",
    password: "",
    password2: "",
    token: "",
    entrepreneur: false,
    id_products: [],
  });
  const [products, setProducts] = useState<productDTO[]>([]); //productos a la venta
  const [featuredProducts, setFeaturedProducts] = useState<any>([]); //productos mas vendidos a mostrar al cliente

  useEffect(() => {
    if (!user.entrepreneur) FetchProductsForClient(apiClient);
  }, []);

  return (
    <Router>
      <Navigation user={user} setUser={setUser} cookies={cookies} />
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
                  setProducts={setProducts}
                  cookies={cookies}
                />
              }
            />
            <Route
              path={SIGNAUTH}
              element={
                <SignAuth user={user} setUser={setUser} cookies={cookies} />
              }
            />
            <Route
              path={HOME_USER}
              element={
                <HomeUser
                  user={user}
                  setUser={setUser}
                  products={products}
                  setProducts={setProducts}
                  featuredProducts={featuredProducts}
                  setFeaturedProducts={setFeaturedProducts}
                  cookies={cookies}
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
