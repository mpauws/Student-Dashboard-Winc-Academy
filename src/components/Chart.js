import React from "react";

import {
   VictoryBar,
   VictoryChart,
   VictoryLine,
   VictoryAxis,
   VictoryGroup,
   VictoryTooltip,
   VictoryZoomContainer,
} from "victory";

import mooiBoyTheme from "../assets/victory-mooiboy-theme";

function Chart({ ratingChartData }) {
   return (
      <div className="chart-graphic">
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
               style={{ tickLabels: { angle: -45 } }}
               // tickValues specifies both the number of ticks and where
               // they are placed on the axis
               tickValues={[1, 2, 3, 4, 5]}
               tickFormat={ratingChartData.map((averages) => averages.assignment)}
            />
            <VictoryAxis dependentAxis />
         </VictoryChart>

         {/* Line Chart */}
         <VictoryChart domainPadding={15} theme={mooiBoyTheme}>
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
               style={{ tickLabels: { angle: -45 } }}
               tickValues={[1, 2, 3, 4]}
               tickFormat={ratingChartData.map((averages) => averages.assignment)}
            />
            <VictoryAxis dependentAxis />
         </VictoryChart>
      </div>
   );
}

export default Chart;
