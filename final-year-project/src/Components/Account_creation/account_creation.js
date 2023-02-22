import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
import "./AccountCreation.css";
// import firebase from "firebase/app";
import "firebase/database";

// v9 compat packages are API compatible with v8 code
import { getDatabase, ref, set } from "firebase/database";

import firebase from "firebase/compat/app";

import "firebase/compat/auth";

import "firebase/compat/firestore";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBNRynRskEMrHDDxJuDME1Xa6MNLTDKXsg",
  authDomain: "final-year-project-f139c.firebaseapp.com",
  databaseURL:
    "https://final-year-project-f139c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "final-year-project-f139c",
  storageBucket: "final-year-project-f139c.appspot.com",
  messagingSenderId: "1037159617922",
  appId: "1:1037159617922:web:f40a90ce5f8f1edf76ab9b",
};
firebase.initializeApp(firebaseConfig);

const auth = getAuth();
const db = getDatabase();

const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("pressed submit");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("created user", user.uid);
        // Submit to server
        const userData = {
          username: username,
          email: email,
          password: password,
        };

        set(ref(db, "users/" + user.uid), userData);
        navigate("/select-sport"); // navigate to /path/to/page
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(" error", errorMessage);
        // ..
      });

    // Clear form inputs
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="form-container">
      <h1 className="form-header">Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <input className="form-submit" type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Home;
