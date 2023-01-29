import React from "react";
import { Link } from "react-router-dom";

import "./landing_page.css";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="card-container">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      <div className="home-page-container">
        <div className="home-page-header">
          <h1>Welcome to the future of Fantasy Sports</h1>
        </div>
        <div className="home-page-body">
          <Link to="/create-account">
            <button className="join-button">Create an account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
