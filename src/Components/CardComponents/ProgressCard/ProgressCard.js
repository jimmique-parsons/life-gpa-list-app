import React from "react";

import Title from "/src/Components/CardComponents/CardStyles/CardTitleStyles.js";
import Message from "./ProgressMessageStyles.js";

const ProgressCard = () => {
  return (
    <div className="progress-card">
      <Title>Daily Progress</Title>
      <Message>Keep it going!</Message>
      <p className="card-results-counter">2 out of 5 goals complete</p>
    </div>
  );
};
export default ProgressCard;
