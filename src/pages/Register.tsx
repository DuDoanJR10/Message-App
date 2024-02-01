import React from "react";

const addAvatar = require('../assets/img/addAvatar.png');

const Register = () => {
  return (
    <div className="Register">
      <div className="Register__container">
        <h1 className="Register__container__heading">Chat App</h1>
        <h2 className="Register__container__title">Register</h2>
        <form className="Register__container__form" action="">
          <input type="text" placeholder="name" name="name" id="name" />
          <input type="email" placeholder="email" name="email" id="email" />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <input style={{ display: 'none' }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <button className="Register__container__submit">Sign in</button>
          <p>You do have an account? Register</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
