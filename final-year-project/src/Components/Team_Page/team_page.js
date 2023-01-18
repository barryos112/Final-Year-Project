import React from "react";
import PlayerCardContainer from "../../Containers/PlayerCardContainer/PlayerCardContainer";

function Home() {
  const myTeam = [
    {
      playerName: "Alice OSullivan",
      description: "The best player",
    },
    {
      playerName: "Barry OSullivan",
      description: "Not the best player :(",
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
