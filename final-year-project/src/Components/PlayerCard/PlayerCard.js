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
  // console.log("in card stats", statsForWeek["totalWeekPoints"]);
  //TODO Add actual stats from file to card but use data with points system attached
  const elements = [];
  for (let stat in statsForWeek) {
    console.log(stat);
    if (!stat.includes("name") && !stat.includes("playerId")) {
      if (stat.includes("eventSummary")) {
        elements.push(<label>{statsForWeek[stat]}</label>);
      }
    }
  }

  return (
    <Card className="player-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name: {playerName}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Position: {position}</Card.Text>

        {statsForWeek && (
          <div>
            RESULTS:
            <br></br>
            {elements}
            <br></br>
            <br></br>
            Total points for week: {statsForWeek["totalWeekPoints"]}
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
