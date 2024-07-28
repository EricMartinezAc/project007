// App.tsx
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store";
import { AuthProvider } from "./AuthProvider";
import AppRouter from "./routers/AppRouter";

// Tipos para props
interface AppProps {
  navigate: (path: string) => void;
}

const App: React.FC<AppProps> = ({ navigate }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <AppRouter navigate={navigate} />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
