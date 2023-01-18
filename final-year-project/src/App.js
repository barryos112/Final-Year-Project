// import React from 'react';

// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../final-year-project/src/Components/Layout";
import LandingPage from "../../final-year-project/src/Components/Landing_page/landing_page";
import AccountCreation from "../../final-year-project/src/Components/Account_creation/account_creation";
import SportSelection from "../../final-year-project/src/Components/Sport_selection/sport_selection";
import TeamPage from "../../final-year-project/src/Components/Team_Page/team_page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<LandingPage />} />
          <Route path="create-account" element={<AccountCreation />} />
          <Route path="select-sport" element={<SportSelection />} />
          <Route path="team" element={<TeamPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
