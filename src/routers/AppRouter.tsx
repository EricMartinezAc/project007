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
import { DataProductsDTO } from "../server/dto/dataProductsDTO";
const itemData: DataProductsDTO[] = [
  {
    id: "a1",
    name: "imageunsplash1",
    category: "cat1",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/b2b.jpg",
  },
  {
    id: "a1",
    name: "imageunsplash3",
    category: "cat3",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/app-online-store.gif",
  },
  {
    id: "a1",
    name: "imageunsplash2",
    category: "cat2",
    subcategory: "subcat1",
    price: 3000,
    img: "src/static/images/banner/11.png",
  },
];

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
  const [products, setProducts] = useState<any>(itemData);
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
                  setProducts={setProducts}
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
                  setProducts={setProducts}
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
