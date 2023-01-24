import React from "react";

import "./landing_page.css";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="card">
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
          <button className="join-button">Join a League</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
