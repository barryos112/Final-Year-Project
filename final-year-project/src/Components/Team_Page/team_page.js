import "./team_page.css";
import PlayerService from "../../Services/PlayerData/playerService";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { PlayerCard } from "../../Components/PlayerCard";
const Home = () => {
  const [nbaData, setPlayerData] = useState([]);
  const [nflData, setNflData] = useState([]);
  const [premData, setPremData] = useState([]);

  const NUMBER_OF_PLAYERS = 6;

  useEffect(() => {
    const fetchData = async () => {
      const nbaData = await PlayerService.getNBAData();
      const nflData = await PlayerService.getNFLData();
      const premData = await PlayerService.getPremData();

      setPlayerData(nbaData);
      setNflData(nflData);
      setPremData(premData);
    };

    fetchData();
  }, []);

  function Player(id, playerName, team, position) {
    this.id = id;
    this.name = playerName;
    this.team = team;
    this.position = position;
  }

  // Initialize an array of player objects
  const players = [];
  for (let i = 0; i < NUMBER_OF_PLAYERS; i++) {
    const player = new Player(i + 1, `Player ${i + 1}`, "Team A", "Position A");
    players.push(player);
  }

  const [playersSelected, setPlayersSelected] = useState(players);
  return (
    <>
      <div className="team-page">
        <div className="dropdown-container">
          <Dropdown
            className="dropdown-nba"
            onSelect={(playerIdSelected) => {
              const playerSelected = nbaData.find(
                (player) => player.id === playerIdSelected
              );
              const nextAvailableSlotIndex = playersSelected.findIndex(
                (player) => String(player.name).includes("Player")
              );
              if (nextAvailableSlotIndex >= 0) {
                let updatedPlayersSelected = [...playersSelected];
                updatedPlayersSelected.splice(
                  nextAvailableSlotIndex,
                  1,
                  playerSelected
                );
                setPlayersSelected(updatedPlayersSelected);
              }
            }}
          >
            <Dropdown.Toggle variant="success" id="nba-dropdown">
              NBA Players
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {nbaData.map((player) => (
                <Dropdown.Item key={player.id} eventKey={player.id}>
                  {player.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="dropdown-nfl"
            onSelect={(playerIdSelected) => {
              const playerSelected = nflData.find(
                (player) => player.id === playerIdSelected
              );
              const nextAvailableSlotIndex = playersSelected.findIndex(
                (player) => String(player.name).includes("Player")
              );
              if (nextAvailableSlotIndex >= 0) {
                let updatedPlayersSelected = [...playersSelected];
                updatedPlayersSelected.splice(
                  nextAvailableSlotIndex,
                  1,
                  playerSelected
                );
                setPlayersSelected(updatedPlayersSelected);
              }
            }}
          >
            <Dropdown.Toggle variant="success" id="nfl-dropdown">
              NFL Players
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {nflData.map((player) => (
                <Dropdown.Item key={player.id} eventKey={player.id}>
                  {player.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown
            className="dropdown-prem"
            onSelect={(playerIdSelected) => {
              const playerSelected = premData.find(
                (player) => player.id === playerIdSelected
              );
              const nextAvailableSlotIndex = playersSelected.findIndex(
                (player) => String(player.name).includes("Player")
              );
              if (nextAvailableSlotIndex >= 0) {
                let updatedPlayersSelected = [...playersSelected];
                updatedPlayersSelected.splice(
                  nextAvailableSlotIndex,
                  1,
                  playerSelected
                );
                setPlayersSelected(updatedPlayersSelected);
              }
            }}
          >
            <Dropdown.Toggle variant="success" id="prem-dropdown">
              Premier League Players
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {premData.map((player) => (
                <Dropdown.Item key={player.id} eventKey={player.id}>
                  {player.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="players-container">
          {playersSelected.map((player, index) => (
            <PlayerCard
              playerName={player.name}
              team={player.team}
              position={player.position}
              onClickRemove={() => {
                console.log(index);
                const playerPlaceholder = new Player(
                  index + 1,
                  `Player ${index + 1}`,
                  "Team A",
                  "Position A"
                );

                let updatedPlayersSelected = [...playersSelected];
                updatedPlayersSelected.splice(index, 1, playerPlaceholder);
                setPlayersSelected(updatedPlayersSelected);
              }}
            ></PlayerCard>
          ))}
        </div>
        <div>
          <button
            className="saveButton"
            onClick={() => {
              const playerIdsSelected = playersSelected.map((obj) => obj.id);
              console.log("save players", playersSelected, playerIdsSelected);
              PlayerService.savePlayerSelectionForWeek(playerIdsSelected);
            }}
          >
            Save my team selection
          </button>

          <button
            className="weekResults"
            onClick={() => {
              console.log("get results");

              const playersSelectedForWeek =
                PlayerService.getPlayersSelectedForWeek()
                  .then((playersSelectedForWeek) => {
                    console.log(playersSelectedForWeek);

                    // for each player id, check if they scored this week
                    //create summary data
                    PlayerService.getPointsScoredByPlayersSelected(
                      playersSelectedForWeek
                    );
                  })
                  .catch((error) => {
                    console.error(error);
                  });
            }}
          >
            {" "}
            Get my Weekly Results
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
