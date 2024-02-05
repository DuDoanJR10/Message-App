import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const currentUser = useContext(AuthContext);
  return (
    <div className="Navbar">
      <span className="Navbar__logo">Chat App</span>
      <div className="Navbar__user">
        <img
          src={currentUser?.photoURL || undefined} 
          alt="avatar"
        />
        <span className="Navbar__user__name">{currentUser?.displayName}</span>
        <button className="Navbar__user__logout" onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
