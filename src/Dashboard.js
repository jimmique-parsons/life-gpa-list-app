import React from "react";
import { Grid } from "semantic-ui-react";
import GPA from "./Components/CardComponents/GPACard/GPACard.js";
import Progress from "./Components/CardComponents/ProgressCard/ProgressCard.js";
import Streaks from "./Components/CardComponents/StreaksCard/StreaksCard.js";
import Habit from "./Components/HabitComponents/HabitCard.js";
import AddGoal from "./Components/TodoComponents/AddGoalButton.js";

import "./styles.css";

const GridRows = () => {
  return (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <GPA />
        </Grid.Column>
        <Grid.Column>
          <Progress />
        </Grid.Column>
        <Grid.Column>
          <Streaks />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Habit />
        </Grid.Column>
        <Grid.Column>
          <AddGoal />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};
export default GridRows;
