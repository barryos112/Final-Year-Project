import React, { useState } from "react";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";

import "./sport_selection.css";
function Home() {
  const availableSportsLeagues = [
    { label: "Premier League", value: "premier-league" },
    { label: "NFL", value: "nfl" },
    { label: "NBA", value: "nba" },
  ];

  const [value, setValue] = useState(["", "", ""]);

  const handleSelect = (sportNumber, selectedSport) => {
    console.log(sportNumber, selectedSport);
    const updatedArray = { ...value };
    updatedArray[sportNumber] = selectedSport;
    setValue(updatedArray);
  };
  return (
    <>
      <div className="select-sports-page">
        <div className="select-sports-container">
          <h1>Select Your Sports</h1>

          <DropdownButton
            id="0"
            title={value[0] !== "" ? value[0] : "Select a sport"}
            onSelect={(e) => handleSelect(0, e)}
          >
            {availableSportsLeagues.map((sport) => {
              return (
                <Dropdown.Item eventKey={sport.label}>
                  {sport.label}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>

          <DropdownButton
            id="1"
            title={value[1] !== "" ? value[1] : "Select a sport"}
            onSelect={(e) => handleSelect(1, e)}
          >
            {availableSportsLeagues.map((sport) => {
              return (
                <Dropdown.Item eventKey={sport.label}>
                  {sport.label}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>

          <DropdownButton
            id="2"
            title={value[2] !== "" ? value[2] : "Select a sport"}
            onSelect={(e) => handleSelect(2, e)}
          >
            {availableSportsLeagues.map((sport) => {
              return (
                <Dropdown.Item eventKey={sport.label}>
                  {sport.label}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Link to="/team">
            <button>Confirm Choices</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
