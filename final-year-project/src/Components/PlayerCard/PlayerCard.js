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
  currentWeekPoints,
  totalPointsToDate,
  onCardClick,
}) => {
  return (
    // <Card
    //   bordered={false}
    //   className="player__card_new"
    //   onClick={onCardClick}
    //   cover={
    //     <div className="player__cover">
    //       <div className="player__header">{playerName}</div>
    //       <div className="player__icon">
    //         <SkinOutlined />
    //       </div>
    //     </div>
    //   }
    // >
    //   <div className="player__content">
    //     <div className="player__content-title">{playerName}</div>
    //     <div className="player__content-body">
    //       Gameweek Points:
    //       {" " + currentWeekPoints}
    //     </div>
    //     <div className="player__content-body">
    //       Total Points:
    //       {" " + totalPointsToDate}
    //     </div>
    //     <div className="player__content-body">{description}</div>
    //     <div className="player__footer-btn">
    //       <Button onClick={onCardClick}>Substitute</Button>
    //     </div>
    //   </div>
    // </Card>

    <Card className="player-card" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Name: {playerName}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Position: {position}</Card.Text>

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
