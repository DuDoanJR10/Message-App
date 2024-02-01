import React from "react";

const Chats = () => {
  return (
    <div className="Chats">
      <div className="User">
        <img
          src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
        />
        <div className="User__info">
          <span className="User__info__name">Neymar JR</span>
          <p className="User__info__message">Hello</p>
        </div>
      </div>
      <div className="User">
        <img
          src="https://images.unsplash.com/photo-1565472501696-b871fa1ccfda?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
        />
        <div className="User__info">
          <span className="User__info__name">Ronaldo</span>
          <p className="User__info__message">Hi</p>
        </div>
      </div>
      <div className="User">
        <img
          src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
        />
        <div className="User__info">
          <span className="User__info__name">Messi</span>
          <p className="User__info__message">Good Morning</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
