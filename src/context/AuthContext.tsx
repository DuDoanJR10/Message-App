import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export interface AuthContextProps {
  displayName: string,
  email: string,
  photoURL?: string,
  uid: string
}

export const AuthContext = createContext<AuthContextProps>({
  displayName: '',
  email: '',
  uid: ''
});

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<AuthContextProps>({
    displayName: '',
    email: '',
    uid: ''
  });
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user as AuthContextProps);
      console.log("user: ", user);
    });

    return () => {
      unSub()
    }
  }, []);
  return (
    <AuthContext.Provider value={currentUser}>
      {children}
    </AuthContext.Provider>
  );
};
