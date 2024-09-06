// AppRouter.tsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "universal-cookie";

// Componentes
import { HOME, SIGNAUTH, HOME_USER, REMOTE_API } from "../constants/routes";
import { Navigation } from "../components/common";
import Home from "../views/Home";
import SignAuth from "../views/Inicio/SignAuth";
import { userDTO, productDTO, ClientsDTO } from "../dto";
import HomeUser from "../views/HomeUser";
import { FetchProductsForClient } from "../resolvers/fetch";
import axios from "axios";

const AppRouter: React.FC = () => {
  const cookies = new Cookies();
  const [clients_, setClients] = useState<ClientsDTO[]>([]);
  const [user, setUser] = useState<userDTO>(cookies.get("user") || {});
  const [products, setProducts] = useState<productDTO[]>([]); //productos a la venta
  const [featuredProducts, setFeaturedProducts] = useState<any>([]); //productos mas vendidos a mostrar al cliente

  const start = async () => {
    try {
      const allProducts = await FetchProductsForClient(apiClient);
      setProducts(allProducts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    start();
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
