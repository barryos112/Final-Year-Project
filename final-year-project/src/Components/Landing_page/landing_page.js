import React from "react";
import { Link } from "react-router-dom";

import "./landing_page.css";
// import Card from "react-bootstrap/Card";

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

      <div class="card-container">
        <div class="card-1">
          <h3>Create your account and choose your sports!</h3>
          <p>
            Create your account or log in if you're an existing user. Choose
            which sports leagues you want to be able to select players from!
          </p>
        </div>

        <div class="card-2">
          <h3>Make your team your own!</h3>
          <p>
            Select your favourite players from multiple leagues and add them on
            to one cohesive team.
          </p>
        </div>

        <div class="card-3">
          <h3>Score points from real life games!</h3>
          <p>
            Once you have chosen your squad, how they perform in real life games
            will account for points for your personal team!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
