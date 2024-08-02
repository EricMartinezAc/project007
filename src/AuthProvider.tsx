import React, { createContext, useContext, ReactNode, useState } from "react";
import Firebase from "./server/services/firebase.services";
import { firebaseauthDTO } from "./server/dto/firebaseAuthDTO";

const firebase = new Firebase();

interface User {
  email: string;
}

// Define el tipo para el estado de autenticación
interface AuthContextType {
  user: User | null;
  signIn: (credentials: firebaseauthDTO) => void;
  signOut: () => void;
}

const defaultAuthContextValue: AuthContextType = {
  user: null,
  signIn: () => {},
  signOut: () => {},
};

// Crea el contexto
const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleSignIn = async (credentials: firebaseauthDTO) => {
    try {
      const result = await firebase.signIn(credentials);
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
