import { FirebaseApp, initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  signOut,
  sendPasswordResetEmail,
  updatePassword,
  updateEmail,
  updateProfile,
  reauthenticateWithCredential,
  Auth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  getDocs,
  Firestore,
} from "firebase/firestore";
import {
  getStorage,
  FirebaseStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { firebaseConfig } from "../../config/firebaseConfig";
import { firebaseauthDTO } from "../dto/firebaseAuthDTO";
import { ResponseFirebaseDTO } from "../dto/responseFirebaseDTO";

export class Firebase {
  private app: FirebaseApp;
  public auth: Auth;
  public db: Firestore;
  public storage: FirebaseStorage;

  constructor() {
    try {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.db = getFirestore(this.app);
      this.storage = getStorage(this.app);
      console.log("server services initialized");
    } catch (error) {
      console.error("Error initializing server:", error);
      throw new Error("Error initializing server");
    }
  }

  // AUTH ACTIONS ------------

  createAccount = async ({
    name,
    photoURL,
    email,
    password,
  }: firebaseauthDTO): Promise<ResponseFirebaseDTO> => {
    try {
      console.log(`Creando cuenta: ${email}`);
      const result = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = result.user;
      const token = (await result.user.getIdToken(true)).toString();
      updateProfile(user, { displayName: name, photoURL });
      return {
        result,
        msj: `usuario ${email} registrado satisfactoriamente`,
        token,
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          result: false,
          msj: `Error al crear la cuenta. Clic en el logo '?' y verifique las políticas de datos, o comuníquese con nosotros`,
        };
      } else {
        return {
          result: null,
          msj: "Error desconocido al crear la cuenta, comuníquese con nosotros",
        };
      }
    }
  };

  signIn = async ({
    name,
    email,
    password,
  }: firebaseauthDTO): Promise<ResponseFirebaseDTO> => {
    try {
      console.log(`iniciando sesion con para: ${email}`);
      const result = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      const user = result.user;
      if (user.displayName !== name)
        throw new Error("usuario log no es compatible");
      const token = (await result.user.getIdToken(true)).toString();
      return { result, msj: `Bienvenido de vuelta ${email}`, token };
    } catch (error) {
      if (error instanceof Error) {
        return {
          result: false,
          msj: `Error de sesión ${error}. Clic en el logo '?' y verifique las políticas de datos, o comuníquese con nosotros`,
        };
      } else {
        return {
          result: null,
          msj: "Error desconocido, comuníquese con nosotros",
        };
      }
    }
  };

  signInWithGoogle = async (): Promise<any> => {
    try {
      console.log("Signing in with Google");
      const result = await signInWithPopup(this.auth, new GoogleAuthProvider());
      console.log("Signed in with Google successfully:", result);
      return result;
    } catch (error) {
      console.error("Error signing in with Google:", error);
      throw new Error("Failed to sign in with Google");
    }
  };

  signInWithFacebook = async (): Promise<any> => {
    try {
      console.log("Signing in with Facebook");
      const result = await signInWithPopup(
        this.auth,
        new FacebookAuthProvider()
      );
      console.log("Signed in with Facebook successfully:", result);
      return result;
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
      throw new Error("Failed to sign in with Facebook");
    }
  };

  signInWithGithub = async () => {
    try {
      console.log("Signing in with GitHub");
      const result = await signInWithPopup(this.auth, new GithubAuthProvider());
      console.log("Signed in with GitHub successfully:", result);
      return result;
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
      throw new Error("Failed to sign in with GitHub");
    }
  };

  signOut = async () => {
    try {
      console.log("Signing out");
      await signOut(this.auth);
      console.log("Signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
      throw new Error("Failed to sign out");
    }
  };

  passwordReset = async (email: string) => {
    try {
      console.log(`Sending password reset email to: ${email}`);
      await sendPasswordResetEmail(this.auth, email);
      console.log("Password reset email sent");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw new Error("Failed to send password reset email");
    }
  };

  passwordUpdate = async (password: string) => {
    try {
      console.log("Updating password");
      if (this.auth.currentUser) {
        await updatePassword(this.auth.currentUser, password);
        console.log("Password updated successfully");
      } else {
        throw new Error("No user is currently signed in");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      throw new Error("Failed to update password");
    }
  };

  changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      console.log("Changing password");
      if (this.auth.currentUser) {
        const cred = EmailAuthProvider.credential(
          this.auth.currentUser.email || "",
          currentPassword
        );
        await reauthenticateWithCredential(this.auth.currentUser, cred);
        await updatePassword(this.auth.currentUser, newPassword);
        console.log("Password changed successfully");
        return "Password updated successfully!";
      } else {
        throw new Error("No user is currently signed in");
      }
    } catch (error) {
      console.error("Error changing password:", error);
      throw new Error("Failed to change password");
    }
  };

  updateEmail = async (currentPassword: string, newEmail: string) => {
    try {
      console.log("Updating email");
      if (this.auth.currentUser) {
        const cred = EmailAuthProvider.credential(
          this.auth.currentUser.email || "",
          currentPassword
        );
        await reauthenticateWithCredential(this.auth.currentUser, cred);
        await updateEmail(this.auth.currentUser, newEmail);
        console.log("Email updated successfully");
        return "Email Successfully updated";
      } else {
        throw new Error("No user is currently signed in");
      }
    } catch (error) {
      console.error("Error updating email:", error);
      throw new Error("Failed to update email");
    }
  };

  // USER ACTIONS --------------

  addUser = async (id: string, user: object) => {
    try {
      console.log(`Adding user with ID: ${id}`);
      await setDoc(doc(this.db, "users", id), user);
      console.log("User added successfully");
    } catch (error) {
      console.error("Error adding user:", error);
      throw new Error("Failed to add user");
    }
  };

  getUser = async (id: string) => {
    try {
      console.log(`Getting user with ID: ${id}`);
      const userDoc = await getDoc(doc(this.db, "users", id));
      console.log("User retrieved successfully:", userDoc.data());
      return userDoc;
    } catch (error) {
      console.error("Error getting user:", error);
      throw new Error("Failed to get user");
    }
  };

  updateProfile = async (id: string, updates: object) => {
    try {
      console.log(`Updating profile for user ID: ${id}`);
      await updateDoc(doc(this.db, "users", id), updates);
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      throw new Error("Failed to update profile");
    }
  };

  saveBasketItems = async (items: any[], userId: string) => {
    try {
      console.log(`Saving basket items for user ID: ${userId}`);
      await updateDoc(doc(this.db, "users", userId), { basket: items });
      console.log("Basket items saved successfully");
    } catch (error) {
      console.error("Error saving basket items:", error);
      throw new Error("Failed to save basket items");
    }
  };

  // PRODUCT ACTIONS --------------

  getSingleProduct = async (id: string) => {
    try {
      console.log(`Getting product with ID: ${id}`);
      const productDoc = await getDoc(doc(this.db, "products", id));
      console.log("Product retrieved successfully:", productDoc.data());
      return productDoc;
    } catch (error) {
      console.error("Error getting single product:", error);
      throw new Error("Failed to get single product");
    }
  };

  getProducts = async (lastRefKey?: any) => {
    let didTimeout = false;

    return new Promise<{ products: any[]; lastKey?: any }>(
      (resolve, reject) => {
        (async () => {
          console.log("Fetching products");
          if (lastRefKey) {
            try {
              console.log("Fetching products with lastRefKey:", lastRefKey);
              const q = query(
                collection(this.db, "products"),
                orderBy("__name__"),
                startAfter(lastRefKey),
                limit(12)
              );

              const snapshot = await getDocs(q);
              const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              console.log("Products fetched successfully:", products);
              resolve({ products, lastKey });
            } catch (e: any) {
              console.error("Error fetching products:", e);
              reject(e.message || ":( Failed to fetch products.");
            }
          } else {
            const timeout = setTimeout(() => {
              didTimeout = true;
              console.error("Request timeout, please try again");
              reject(new Error("Request timeout, please try again"));
            }, 15000);

            try {
              const totalQuery = await getDocs(collection(this.db, "products"));
              const total = totalQuery.docs.length;
              const q = query(
                collection(this.db, "products"),
                orderBy("__name__"),
                limit(12)
              );

              const snapshot = await getDocs(q);
              const products = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              console.log("Products fetched successfully:", products);
              resolve({ products, lastKey });
            } catch (e: any) {
              if (!didTimeout) {
                console.error("Error fetching products:", e);
                reject(e.message || ":( Failed to fetch products.");
              }
            }
          }
        })();
      }
    );
  };

  // STORAGE ACTIONS ------------

  uploadFile = async (file: File, path: string) => {
    try {
      console.log(`Uploading file to path: ${path}`);
      const storageRef = ref(this.storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("File uploaded successfully, download URL:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw new Error("Failed to upload file");
    }
  };

  deleteFile = async (path: string) => {
    try {
      console.log(`Deleting file at path: ${path}`);
      const fileRef = ref(this.storage, path);
      await deleteObject(fileRef);
      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file:", error);
      throw new Error("Failed to delete file");
    }
  };
}
export const firebase = new Firebase();
