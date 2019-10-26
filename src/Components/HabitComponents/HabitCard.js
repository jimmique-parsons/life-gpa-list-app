import React from "react";

import Title from "../HabitComponents/TitleStyle.js";
import Paragraph from "../HabitComponents/ParagraphStyle.js";
import SubTitle from "../HabitComponents/SubTitleStyle.js";

const HabitCard = () => {
  return (
    <div className="habit-card">
      <div className="habit-text">
        <Title>
          <strong>Progress</strong>
        </Title>
        <div>
          <SubTitle>Excelling at</SubTitle>
          <Paragraph>Life Goals</Paragraph>
          <Paragraph>Personal Development</Paragraph>

          <SubTitle>Work on</SubTitle>
          <Paragraph>Health</Paragraph>

          <SubTitle>Try doing something for</SubTitle>
          <Paragraph>Career</Paragraph>

          <SubTitle>30 Days Until Next Grade</SubTitle>
        </div>
      </div>
      <button className="history-button">Review History</button>
    </div>
  );
};
export default HabitCard;
