import React, { createContext, useContext, ReactNode, useState } from "react";
import Firebase from "./server/services/firebase.resolver"; // Importa la clase Firebase

const firebase = new Firebase();

// Define el tipo para el estado de autenticación
interface AuthContextType {
  user: any; // TODO más específico con el tipo del usuario
  signIn: () => void;
  signOut: () => void;
}

// Define el valor por defecto del contexto
const defaultAuthContextValue: AuthContextType = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

// Crea el contexto
const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

// Crea un proveedor para el contexto
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  const handleSignIn = async () => {
    try {
      const result = await firebase.signIn({
        email: "user@example.com",
        password: "password123",
      });
      setUser(result.user);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signIn: handleSignIn, signOut: handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);
