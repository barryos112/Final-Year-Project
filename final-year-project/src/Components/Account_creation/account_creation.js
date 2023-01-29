// // import React from "react";

// // function Home() {
// //   return <h1>Account creation page</h1>;
// // }

// // export default Home;

// import React, { useState } from "react";

// const useStyles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//   },
//   formField: {
//     margin: "10px",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid grey",
//   },
//   submitButton: {
//     margin: "20px",
//     padding: "10px",
//     backgroundColor: "blue",
//     color: "white",
//     borderRadius: "5px",
//     border: "none",
//     "&:hover": {
//       backgroundColor: "darkblue",
//     },
//   },
// };

// const Home = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     name: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form onSubmit={handleSubmit} style={useStyles.container}>
//       <input
//         name="email"
//         placeholder="Email"
//         type="email"
//         value={formData.email}
//         onChange={handleInputChange}
//         style={useStyles.formField}
//       />
//       <input
//         name="password"
//         placeholder="Password"
//         type="password"
//         value={formData.password}
//         onChange={handleInputChange}
//         style={useStyles.formField}
//       />
//       <input
//         name="name"
//         placeholder="Name"
//         type="text"
//         value={formData.name}
//         onChange={handleInputChange}
//         style={useStyles.formField}
//       />
//       <button type="submit" style={useStyles.submitButton}>
//         Create Account
//       </button>
//     </form>
//   );
// };

// export default Home;

import React, { useState } from "react";
import "./AccountCreation.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs and submit to server
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
