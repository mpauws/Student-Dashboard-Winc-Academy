import React from "react";
import {
   VictoryBar,
   VictoryChart,
   VictoryLine,
   VictoryAxis,
   VictoryGroup,
   VictoryTooltip,
   VictoryZoomContainer,
   VictoryLegend,
} from "victory";

import mooiBoyTheme from "../assets/victory-mooiboy-theme";

function Chart({ ratingChartData }) {
   return (
      <div className="chart-graphic">
         <h6>Bar Chart Display</h6>
         <div className="bar-chart">
            <VictoryChart domainPadding={15} theme={mooiBoyTheme} containerComponent={<VictoryZoomContainer />}>
               <VictoryGroup offset={20}>
                  <VictoryBar
                     labelComponent={<VictoryTooltip />}
                     data={ratingChartData}
                     x="assignment"
                     y="difficultyRating"
                     tickValues={[1, 2, 3, 4, 5]}
                     tickFormat={ratingChartData.map((averages) => averages.assignment)}
                  />
                  <VictoryBar
                     labelComponent={<VictoryTooltip />}
                     data={ratingChartData}
                     x="assignment"
                     y="enjoymentRating"
                     tickValues={[1, 2, 3, 4, 5]}
                     tickFormat={ratingChartData.map((averages) => averages.assignment)}
                  />
               </VictoryGroup>
               <VictoryAxis
                  style={{ tickLabels: { angle: -90 } }}
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={ratingChartData.map((averages) => averages.assignment)}
               />
               <VictoryAxis dependentAxis />
            </VictoryChart>
            <div className="chart-legend">
               <VictoryLegend
                  x={125}
                  y={10}
                  title="Legend"
                  centerTitle
                  orientation="horizontal"
                  gutter={20}
                  style={{ border: { stroke: "black" }, title: { fontSize: 20 } }}
                  data={[
                     { name: "Difficulty", symbol: { fill: "#6ca8a2" } },
                     { name: "Enjoyment", symbol: { fill: "#d69442" } },
                  ]}
               />
            </div>
         </div>
         <h6>Line Chart Display</h6>
         <div className="line-chart">
            <VictoryChart domainPadding={15} theme={mooiBoyTheme} containerComponent={<VictoryZoomContainer />}>
               <VictoryLine
                  labelComponent={<VictoryTooltip />}
                  style={{
                     data: { stroke: "#6ca8a2" },
                     parent: { border: "1px solid #ccc" },
                  }}
                  data={ratingChartData}
                  x="assignment"
                  y="difficultyRating"
               />
               <VictoryLine
                  labelComponent={<VictoryTooltip />}
                  style={{
                     data: { stroke: "#d69442" },
                     parent: { border: "1px solid #ccc" },
                  }}
                  data={ratingChartData}
                  x="assignment"
                  y="enjoymentRating"
               />
               <VictoryAxis
                  style={{ tickLabels: { angle: -90 } }}
                  tickValues={[1, 2, 3, 4]}
                  tickFormat={ratingChartData.map((averages) => averages.assignment)}
               />
               <VictoryAxis dependentAxis />
            </VictoryChart>
         </div>
      </div>
   );
}

export default Chart;
