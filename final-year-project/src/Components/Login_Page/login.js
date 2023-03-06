// import { useNavigate } from "react-router-dom";
// import React, { useState } from "react";
// import "./login.css";

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/database";

// // Initialize Firebase
// const firebaseConfig = {
//   // Your Firebase config here
// };
// firebase.initializeApp(firebaseConfig);

// const auth = firebase.auth();
// const db = firebase.database();

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Check if user exists in the database
//     db.ref("users")
//       .orderByChild("username")
//       .equalTo(username)
//       .once("value", (snapshot) => {
//         if (snapshot.exists()) {
//           const userData = snapshot.val();
//           const userID = Object.keys(userData)[0];
//           const user = userData[userID];
//           if (user.password === password) {
//             // Login successful
//             auth.signInWithEmailAndPassword(user.email, password).then(() => {
//               navigate("/select-sport");
//             });
//           } else {
//             alert("Invalid username or password.");
//           }
//         } else {
//           alert("Invalid username or password.");
//         }
//       });
//   };

//   return (
//     <div className="login-form-container">
//       <h1 className="login-form-header">Log In</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           className="login-form-input"
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           className="login-form-input"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <input className="login-form-submit" type="submit" value="Log In" />
//       </form>
//     </div>
//   );
// };

// export default Login;
