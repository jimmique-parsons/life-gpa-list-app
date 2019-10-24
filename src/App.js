import React from "react";
import Dashboard from "./Dashboard.js";

import "./styles.css";

export default function App() {
  return (
    <div className="Desktop-Dashboard">
      <div className="Header" />
      <div className="App">
        <Dashboard />
      </div>
      <div className="Footer" />
    </div>
  );
}
