import React from "react";
import mockgraph from "../assets/mock-graph.png";

function Chart() {
   return (
      <div className="chart-container">
         <img className="fake-graph" src={mockgraph} alt="mock-graph" width="400px" />
      </div>
   );
}

export default Chart;
