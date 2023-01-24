import React from "react";

import "./landing_page.css";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <h1>Welcome to the future of Fantasy Sports</h1>
      </div>
      <div className="home-page-body">
        <p>Join a league and compete against friends and other players.</p>
        <button className="join-button">Join a League</button>
      </div>
    </div>
  );
};

export default Home;

// import React, { useState } from "react";
// import "./landing_page.css";
// import {
//   Navbar,
//   Nav,
//   Carousel,
//   Form,
//   FormControl,
//   Button,
// } from "react-bootstrap";

// const Home = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Send email and password to server for sign-up
//     console.log(`Email: ${email}, Password: ${password}`);
//   };

//   return (
//     <div className="landing-page-container">

//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">My Fantasy Sports Website</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//           <Form inline>
//             <FormControl
//               type="email"
//               placeholder="Email"
//               className="mr-sm-2"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <FormControl
//               type="password"
//               placeholder="Password"
//               className="mr-sm-2"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button variant="outline-success" onClick={handleSubmit}>
//               Sign Up
//             </Button>
//           </Form>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// };
