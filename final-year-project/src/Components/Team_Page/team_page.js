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

  useEffect(() => {
    const fetchData = async () => {
      const data = await PlayerService.getPlayerData();
      setPlayerData(data);
    };
    fetchData();
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
