import React from "react";
import PlayerCardContainer from "../../Containers/PlayerCardContainer/PlayerCardContainer";

function Home() {
  const myTeam = [
    {
      playerName: "",
      description: "Test",
    },
    {
      playerName: "",
      description: "Test",
    },
  ];

  return (
    <div>
      {myTeam.map((player) => {
        return (
          <PlayerCardContainer
            playerName={player.playerName}
            description={player.description}
          />
        );
      })}
    </div>
  );
}
export default Home;
