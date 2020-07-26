import React from "react";
import "../App.css";

import Chart from "./Chart";
import WidgetContainer from "./WidgetContainer";

function Dashboard({ getStudentList, getAssignments, studentEvaluationData }) {
   const getAverageDifficultyRating = (assignment) => {
      const getTotalDifficultyRating = studentEvaluationData
         .filter((item) => {
            return item.assignment === assignment;
         })
         .map((item) => item.difficultyRating)
         .reduce((currentTotal, grading) => {
            return grading + currentTotal;
         }, 0);
      return getTotalDifficultyRating / getStudentList.length;
   };

   const getAverageEnjoymentRating = (assignment) => {
      const getTotalEnjoymentRating = studentEvaluationData
         .filter((item) => {
            return item.assignment === assignment;
         })
         .map((item) => item.enjoymentRating)
         .reduce((currentTotal, grading) => {
            return grading + currentTotal;
         }, 0);
      return getTotalEnjoymentRating / getStudentList.length;
   };

   const assignmentRatingAverageWithLabels = getAssignments.map((item) => ({
      assignment: item,
      difficultyRating: getAverageDifficultyRating(item),
      enjoymentRating: getAverageEnjoymentRating(item),
      label: `Difficulty Rating: ${getAverageDifficultyRating(item).toFixed(
         1
      )} \n Enjoyment Rating: ${getAverageEnjoymentRating(item).toFixed(1)}`,
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
         <WidgetContainer studentEvaluationData={studentEvaluationData} />
         <br />
         <Chart ratingChartData={assignmentRatingAverageWithLabels} />
      </div>
   );
}

export default Dashboard;
