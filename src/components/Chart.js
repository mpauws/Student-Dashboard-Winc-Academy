import React from "react";

import {
   VictoryBar,
   VictoryChart,
   VictoryLine,
   VictoryAxis,
   VictoryGroup,
   VictoryTooltip,
   VictoryZoomContainer,
   // VictoryTheme,
} from "victory";

import mooiBoyTheme from "../assets/victory-mooiboy-theme";

function Chart({ assignmentRatingAverageWithLabels }) {
   return (
      <div className="chart-graphic">
         <VictoryChart domainPadding={15} theme={mooiBoyTheme} containerComponent={<VictoryZoomContainer />}>
            <VictoryGroup offset={20}>
               <VictoryBar
                  /*                   animate={{
                     duration: 1000,
                     onLoad: { duration: 1000 },
                  }} */
                  labelComponent={<VictoryTooltip />}
                  data={assignmentRatingAverageWithLabels}
                  x="assignment"
                  y="difficultyRating"
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={assignmentRatingAverageWithLabels.map((averages) => averages.assignment)}
               />
               <VictoryBar
                  /*                   animate={{
                     duration: 1000,
                     onLoad: { duration: 1000 },
                  }} */
                  labelComponent={<VictoryTooltip />}
                  data={assignmentRatingAverageWithLabels}
                  x="assignment"
                  y="enjoymentRating"
                  tickValues={[1, 2, 3, 4, 5]}
                  tickFormat={assignmentRatingAverageWithLabels.map((averages) => averages.assignment)}
               />
            </VictoryGroup>
            <VictoryAxis
               style={{ tickLabels: { angle: -45 } }}
               // tickValues specifies both the number of ticks and where
               // they are placed on the axis
               tickValues={[1, 2, 3, 4, 5]}
               tickFormat={assignmentRatingAverageWithLabels.map((averages) => averages.assignment)}
            />
            <VictoryAxis dependentAxis />
         </VictoryChart>
         {/* Line Chart */}
         <VictoryChart domainPadding={15} theme={mooiBoyTheme}>
            <VictoryLine
               /*                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
               }} */
               labelComponent={<VictoryTooltip />}
               style={{
                  data: { stroke: "#6ca8a2" },
                  parent: { border: "1px solid #ccc" },
               }}
               data={assignmentRatingAverageWithLabels}
               x="assignment"
               y="difficultyRating"
            />
            <VictoryLine
               /*                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 },
               }} */
               labelComponent={<VictoryTooltip />}
               style={{
                  data: { stroke: "#d69442" },
                  parent: { border: "1px solid #ccc" },
               }}
               data={assignmentRatingAverageWithLabels}
               x="assignment"
               y="enjoymentRating"
            />
            <VictoryAxis
               style={{ tickLabels: { angle: -45 } }}
               tickValues={[1, 2, 3, 4]}
               tickFormat={assignmentRatingAverageWithLabels.map((averages) => averages.assignment)}
            />
            <VictoryAxis dependentAxis />
         </VictoryChart>
      </div>
   );
}

export default Chart;

// Chart Experiment:
/*
      <div className="chart-container">
         <VictoryChart domainPadding={20} theme={mooiBoyTheme}>
            <VictoryAxis
               tickValues={[1, 2, 3, 4]}
               tickFormat={hardCodedDataAverages.map((averages) => averages.assignment)}
            />
            <VictoryAxis dependentAxis />
            <VictoryBar
               animate={{
                  duration: 1000,
                  onLoad: { duration: 1000 },
               }}
               data={hardCodedDataAverages}
               // data accessor for x values
               x="assignment"
               // data accessor for y values
               y="difficultyRating"
            />
            <VictoryBar
               animate={{
                  duration: 1000,
                  onLoad: { duration: 1000 },
               }}
               data={hardCodedDataAverages}
               // data accessor for x values
               x="assignment"
               // data accessor for y values
               y="enjoymentRating"
            />
         </VictoryChart>
      </div>
   ); */
