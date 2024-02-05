import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="Register">
      <div className="Register__container">
        <h1 className="Register__container__heading">Chat App</h1>
        <h2 className="Register__container__title">Login</h2>
        <form
          onSubmit={handleSubmit}
          className="Register__container__form"
          action=""
        >
          <input type="email" placeholder="email" name="email" id="email" />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <button type="submit" className="Register__container__submit">
            Login
          </button>
          {error && <span>Something went wrong!</span>}
          <p>
            You don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
