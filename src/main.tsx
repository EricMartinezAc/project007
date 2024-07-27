// main.ts
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { firebaseInit } from "./config/firebaseConfig"; // Importa tu inicialización de Firebase

// Inicializa Firebase
firebaseInit();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
