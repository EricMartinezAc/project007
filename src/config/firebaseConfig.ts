import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"; // Asegúrate de importar getStorage

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Inicializa Firebase
export const firebaseInit = () => {
  try {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app); // Inicializa el servicio de almacenamiento
    console.log("Firebase y Storage inicializados correctamente");

    return { app, storage };
  } catch (error) {
    console.error("Error al inicializar Firebase", error);
    return { app: null, storage: null }; // Retorna valores predeterminados en caso de error
  }
};
