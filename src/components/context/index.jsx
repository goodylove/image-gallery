import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/index";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleSigin = async (email, password) => {
    try {
      const current = await signInWithEmailAndPassword(auth, email, password);
      if (current) {
        console.log(current);
        setUser(current.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, handleSigin, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
