import React from "react";
import { Icon } from "semantic-ui-react";

const DashboardHeader = () => {
  return (
    <div>
      <nav>
        <h1>Life GPA</h1>
        <Icon name="circle outline" />
        <Icon name="user" />
        <div className="right-nav" />
      </nav>
    </div>
  );
};

export default DashboardHeader;
