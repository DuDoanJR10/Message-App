import React from "react";

const Search = () => {
  return (
    <div className="Search">
      <div className="Search__form">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="User">
        <img
          src="https://images.unsplash.com/photo-1618641662184-bafefb91a542?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="user"
        />
        <div className="User__info">
          <span className="User__info__name">Tran Long</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
