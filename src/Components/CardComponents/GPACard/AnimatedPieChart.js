import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "./ChangingProgressProvider";
import OverallChart from "./OverallChartStyles.js";

const AnimatedChart = () => {
  return (
    <OverallChart>
      <ChangingProgressProvider values={[0, 98]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`A + ${percentage}%`}
            styles={buildStyles({
              rotation: 0.0,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "round",

              // Text size
              textSize: "16px",

              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",

              pathColor: `rgba(32, 166, 89, ${percentage / 100})`,
              textColor: "#000",
              trailColor: "#fff",
              backgroundColor: "#3e98c7"
            })}
          />
        )}
      </ChangingProgressProvider>
    </OverallChart>
  );
};
export default AnimatedChart;
