import React from "react";

import PieChart from "./GPAPieChart.js";
import ResultsButton from "./ResultsButton.js";

import Title from "../CardStyles/CardTitleStyles.js";

const GPACard = () => {
  return (
    <div className="gpa-card">
      <Title>GPA</Title>
      <div>
        <PieChart />
      </div>
      <div>
        <ResultsButton />
      </div>
    </div>
  );
};
export default GPACard;
