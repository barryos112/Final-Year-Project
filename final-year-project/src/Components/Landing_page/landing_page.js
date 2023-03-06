import React from "react";
import { Link } from "react-router-dom";

import "./landing_page.css";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <h1>Welcome to the future of Fantasy Sports</h1>
      </div>
      <div className="home-page-body">
        <Link to="/create-account">
          <button className="join-button">Create an account</button>
        </Link>
        <Link to="/login">
          <button className="login-button">Log in </button>
        </Link>
      </div>

      <div className="LP-card-container">
        <div className="LP-card-outer">
          <Card className="LP-card-inner">
            <Card.Title>Welcome</Card.Title>
            <Card.Text>Explain Main Rules</Card.Text>
          </Card>
        </div>
        <div className="LP-card-outer">
          <Card className="LP-card-inner">
            <Card.Title>Next steps</Card.Title>
            <Card.Text>Create account pick team</Card.Text>
          </Card>
        </div>
        <div className="LP-card-outer">
          <Card className="LP-card-inner">
            <Card.Title>Enjoy</Card.Title>
            <Card.Text>Play and challenge friends</Card.Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
