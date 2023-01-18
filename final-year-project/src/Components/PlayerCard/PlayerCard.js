import { SkinOutlined } from "@ant-design/icons";
import React from "react";
import "./PlayerCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const PlayerCard = ({
  playerName,
  description,
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
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{playerName}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PlayerCard;
