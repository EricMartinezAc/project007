// import React, { createContext, useContext, ReactNode, useState } from "react";
// import { firebase } from "./server/services/firebase.services";
// import { userDTO } from "./dto";
// import Handle from "./components/PriceRange/Handle";

// interface User {
//   email: string;
// }

// // Define el tipo para el estado de autenticación
// interface AuthContextType {
//   user: User | null;
//   signIn: (credentials: userDTO) => void;
//   signOut: () => void;
// }

// const defaultAuthContextValue: AuthContextType = {
//   user: null,
//   signIn: () => {},
//   signOut: () => {},
// };

// // Crea el contexto
// const AuthContext = createContext<AuthContextType>(defaultAuthContextValue);

// interface AuthProviderProps {
//   children: ReactNode;
// }

// export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const handleSignIn =

//   return (
//     <AuthContext.Provider
//       value={{ user, signIn: handleSignIn, signOut: handleSignOut }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto
// export const useAuth = () => useContext(AuthContext);
