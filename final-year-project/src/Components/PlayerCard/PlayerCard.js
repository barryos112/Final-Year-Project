import { SkinOutlined } from "@ant-design/icons";
import React from "react";
import "./PlayerCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const PlayerCard = ({
  playerName,
  team,
  position,
  onClickRemove,
  statsForWeek,
}) => {
  console.log(statsForWeek);

  const elements = [];
  let totalWeekPoints = 0;
  for (let prop in statsForWeek) {
    const points = prop.includes("numberOf") ? 0 : statsForWeek[prop];
    const value = <span>{points}</span>;
    if (prop !== "playerId" && prop !== "name" && points > 0) {
      const label = <label>{prop}:</label>;
      elements.push(label);

      elements.push(value);
      totalWeekPoints = totalWeekPoints + points;

      const br = <br />;
      elements.push(br);
    }
  }

  // return <div>{elements}</div>;
  return (
    <Card className="player-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name: {playerName}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Position: {position}</Card.Text>

        {statsForWeek && (
          <div>
            RESULTS:
            {elements}
            Total points for week: {totalWeekPoints}
          </div>
        )}
        {!playerName.includes("Player ") && (
          <Button variant="danger" onClick={onClickRemove}>
            Remove Player
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
