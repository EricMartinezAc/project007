import React from "react";
import { AuthProvider, useAuth } from "./AuthProvider";
import AppRouter from "./routers/AppRouter";

const App: React.FC = () => {
  const { user, signIn } = useAuth();

  return (
    <AuthProvider>
      {user ? <AppRouter /> : <button onClick={signIn}>Sign In</button>}
    </AuthProvider>
  );
};

export default App;
