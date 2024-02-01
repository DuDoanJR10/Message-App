import React from "react";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="Navbar__logo">Chat App</span>
      <div className="Navbar__user">
        <img
          src="https://images.unsplash.com/photo-1518887802067-be1f52f6a74e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="avatar"
        />
        <span className="Navbar__user__name">Du Doan</span>
        <button className="Navbar__user__logout">Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
