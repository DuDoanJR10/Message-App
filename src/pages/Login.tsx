import React from "react";

const Login = () => {
  return (
    <div className="Register">
      <div className="Register__container">
        <h1 className="Register__container__heading">Chat App</h1>
        <h2 className="Register__container__title">Login</h2>
        <form className="Register__container__form" action="">
          <input type="email" placeholder="email" name="email" id="email" />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <button className="Register__container__submit">Login</button>
          <p>You don't have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
