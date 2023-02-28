import "./team_page.css";
import PlayerService from "../../Services/PlayerData/playerService";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Home = () => {
  //   const [playerData, setPlayerData] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const data = await PlayerService.getPlayerData();

  //       setPlayerData(data);
  //     };

  //     fetchData();
  //   }, []);

  //   return (
  //     <>
  //       <div className="dropdown-container">
  //         <Dropdown className="dropdown-nba">
  //           <Dropdown.Toggle variant="success" id="dropdown-basic">
  //             Select an NBA player
  //           </Dropdown.Toggle>

  //           <Dropdown.Menu>
  //             {playerData.map((player) => (
  //               <Dropdown.Item key={player.id} eventKey={player.id}>
  //                 {player.name}
  //               </Dropdown.Item>
  //             ))}
  //           </Dropdown.Menu>
  //         </Dropdown>

  //         <Dropdown className="dropdown-nfl">
  //           <Dropdown.Toggle variant="success" id="dropdown-basic">
  //             Select an NFL player
  //           </Dropdown.Toggle>

  //           <Dropdown.Menu>
  //             {playerData.map((player) => (
  //               <Dropdown.Item key={player.id} eventKey={player.id}>
  //                 {player.name}
  //               </Dropdown.Item>
  //             ))}
  //           </Dropdown.Menu>
  //         </Dropdown>

  //         <Dropdown className="dropdown-prem">
  //           <Dropdown.Toggle variant="success" id="dropdown-basic">
  //             Select a Premier League player
  //           </Dropdown.Toggle>

  //           <Dropdown.Menu>
  //             {playerData.map((player) => (
  //               <Dropdown.Item key={player.id} eventKey={player.id}>
  //                 {player.name}
  //               </Dropdown.Item>
  //             ))}
  //           </Dropdown.Menu>
  //         </Dropdown>
  //       </div>

  //       {/* </div> */}
  //     </>
  //   );
  // };

  const [playerData, setPlayerData] = useState([]);
  const [nflData, setNflData] = useState([]);
  const [premData, setPremData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nbaData = await PlayerService.getPlayerData();
      const nflData = await PlayerService.getNFLData();
      const premData = await PlayerService.getPremData();

      setPlayerData(nbaData);
      setNflData(nflData);
      setPremData(premData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="dropdown-container">
        <Dropdown className="dropdown-nba">
          <Dropdown.Toggle variant="success" id="nba-dropdown">
            NBA Players
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {playerData.map((player) => (
              <Dropdown.Item key={player.id} eventKey={player.id}>
                {player.name}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="dropdown-nfl">
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

        <Dropdown className="dropdown-prem">
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
    </>
  );
};

export default Home;
