import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const addAvatar = require("../assets/img/addAvatar.png");

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate('/')
          } catch (err) {
            console.log(err);
            setError(true);
          }
        });
      });
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className="Register">
      <div className="Register__container">
        <h1 className="Register__container__heading">Chat App</h1>
        <h2 className="Register__container__title">Register</h2>
        <form
          onSubmit={handleSubmit}
          className="Register__container__form"
          action=""
        >
          <input type="text" placeholder="name" name="name" id="name" />
          <input type="email" placeholder="email" name="email" id="email" />
          <input
            type="password"
            placeholder="password"
            name="password"
            id="password"
          />
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label htmlFor="file">
            <img src={addAvatar} alt="Add Avatar" />
            <span>Add an avatar</span>
          </label>
          <button type="submit" className="Register__container__submit">
            Sign in
          </button>
          {error && <span>Something went wrong!</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
