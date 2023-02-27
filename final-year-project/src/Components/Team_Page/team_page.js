import "./team_page.css";
import PlayerService from "../../Services/PlayerData/playerService";
import React, { useState, useEffect } from "react";

const Home = () => {
  const players = [
    {
      name: "Player 1",
      position: "Forward",
      number: 10,
    },
    {
      name: "Player 2",
      position: "Midfielder",
      number: 8,
    },
    {
      name: "Player 3",
      position: "Defender",
      number: 4,
    },
    {
      name: "Player 4",
      position: "Goalkeeper",
      number: 1,
    },
    {
      name: "Player 5",
      position: "Forward",
      number: 9,
    },
    {
      name: "Player 6",
      position: "Midfielder",
      number: 7,
    },
  ];

  const [playerData, setPlayerData] = useState([]);

  // const jsonData = PlayerService.loadJsonFile();
  // console.log(jsonData);

  const getData = () => {
    fetch("./nbaPlayers.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setPlayerData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="team-container">
        {playerData &&
          playerData.length > 0 &&
          playerData.map((player) => (
            <div className="card" key={player.id}>
              <div className="card-header">{player.name}</div>
              <div className="card-body">
                <p>Team: {player.team}</p>
                <p>Position: {player.position}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
