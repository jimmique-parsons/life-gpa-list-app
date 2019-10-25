import React from "react";

import Title from "../CardStyles/CardTitleStyles.js";
import Message from "../ProgressCard/ProgressMessageStyles.js";

const StreaksCard = () => {
  return (
    <div className="streaks-card">
      <Title>Streaks</Title>
      <Message>0 Day Streak</Message>
      <p className="streaks-note">
        Complete a 7 day streak to earn your first badge
      </p>
    </div>
  );
};
export default StreaksCard;
