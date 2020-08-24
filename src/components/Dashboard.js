import React from "react";
import "../App.css";

import Chart from "./Chart";
import WidgetContainer from "./WidgetContainer";

function Dashboard({ getStudentList, getAssignments, studentEvaluationData }) {
   const getAverageRating = (assignment, ratingSort) => {
      const getTotalDifficultyRating = studentEvaluationData
         .filter((item) => {
            return item.assignment === assignment;
         })
         .map((item) => (ratingSort === "enjoyment" ? item.enjoymentRating : item.difficultyRating))
         .reduce((currentTotal, grading) => {
            return grading + currentTotal;
         }, 0);
      return getTotalDifficultyRating / getStudentList.length;
   };

   const assignmentRatingAverageWithLabels = getAssignments.map((item) => ({
      assignment: item,
      difficultyRating: getAverageRating(item, "difficulty"),
      enjoymentRating: getAverageRating(item, "enjoyment"),
      label: `Difficulty Rating: ${getAverageRating(item, "difficulty").toFixed(
         1
      )} \n Enjoyment Rating: ${getAverageRating(item, "enjoyment").toFixed(1)}`,
   }));

   // [[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]
   // Counter: https://www.youtube.com/watch?v=rhZgquCAcGc

   return (
      <div className="component-container">
         <h2>Dashboard</h2>

         <p className="page-description">
            Welcome to the dashboard section. The graph below displays the average ratings of all Winc students. Head
            over the student overview for the individual difficulty and enjoyment ratings given by the students.
         </p>
         <br />
         <WidgetContainer assignmentRatingAverageWithLabels={assignmentRatingAverageWithLabels} />
         <br />
         <Chart ratingChartData={assignmentRatingAverageWithLabels} />
      </div>
   );
}

export default Dashboard;
