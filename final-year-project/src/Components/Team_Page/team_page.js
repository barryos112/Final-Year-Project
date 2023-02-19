// import React from "react";
// import PlayerCardContainer from "../../Containers/PlayerCardContainer/PlayerCardContainer";

// function Home() {
//   const myTeam = [
//     {
//       playerName: "",
//       description: "Test",
//     },
//     {
//       playerName: "",
//       description: "Test",
//     },
//   ];

//   return (
//     <div>
//       {myTeam.map((player) => {
//         return (
//           <PlayerCardContainer
//             playerName={player.playerName}
//             description={player.description}
//           />
//         );
//       })}
//     </div>
//   );
// }
// export default Home;

import React from "react";
import "./team_page.css";

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

  return (
    <div className="team-container">
      {players.map((player) => (
        <div className="card" key={player.number}>
          <div className="card-header">{player.name}</div>
          <div className="card-body">
            <p>Position: {player.position}</p>
            <p>Number: {player.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
