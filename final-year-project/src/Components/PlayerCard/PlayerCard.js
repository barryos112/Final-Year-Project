import { SkinOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";
import "./PlayerCard.css";

export const PlayerCard = ({
  playerName,
  description,
  currentWeekPoints,
  totalPointsToDate,
  onCardClick,
}) => {
  return (
    <Card
      bordered={false}
      className="player__card"
      onClick={onCardClick}
      cover={
        <div className="player__cover">
          <div className="player__header">{playerName}</div>
          <div className="player__icon">
            <SkinOutlined />
          </div>
        </div>
      }
    >
      <div className="player__content">
        <div className="player__content-title">{playerName}</div>
        <div className="player__content-body">
          Gameweek Points:
          {" " + currentWeekPoints}
        </div>
        <div className="player__content-body">
          Total Points:
          {" " + totalPointsToDate}
        </div>
        <div className="player__content-body">{description}</div>
        <div className="player__footer-btn">
          <Button onClick={onCardClick}>Substitute</Button>
        </div>
      </div>
    </Card>
  );
};

export default PlayerCard;
