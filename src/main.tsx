// index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import App from "./routers/AppRouter";
import { createBrowserHistory } from "history";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./redux/store/store";
import "./styles/style.scss";
import "./index.css";

// Obtener el elemento del DOM con id 'root'
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const history = createBrowserHistory();

// Define la función navigate
const navigate = (path: string) => {
  history.push(path);
};

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App navigate={navigate} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
