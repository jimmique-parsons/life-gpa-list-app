import React from "react";

import PieChart from "./GPAPieChart.js";

import Title from "../CardStyles/CardTitleStyles.js";

const GPACard = () => {
  return (
    <div className="gpa-card">
      <Title>GPA</Title>
      <div>
        <PieChart />
      </div>
      <input
        className="card-results-button"
        type="button"
        //onClick=""
        value="View Results"
      />
    </div>
  );
};
export default GPACard;
