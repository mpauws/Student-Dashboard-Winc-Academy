import React from "react";
import "../App.css";

import Chart from "./Chart";

function Dashboard({ getStudentList, getAssignments, studentEvaluationData }) {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get average difficultyRating for assignment X
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
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

   // console.log("getAverageDifficultyRating van W5D4-1", getAverageDifficultyRating("W5D4-1"));
   // Output: 2.8

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get average enjoymentRating for assignment X
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
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

   //console.log("getAverageEnjoymentRating van W5D4-1", getAverageEnjoymentRating("W5D4-1"));
   // Output: 1.9

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get array of all distinct assignments with related average difficultyRating, enjoymentRating and label
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const assignmentRatingAverageWithLabels = getAssignments.map((item) => ({
      assignment: item,
      difficultyRating: getAverageDifficultyRating(item),
      enjoymentRating: getAverageEnjoymentRating(item),
      label: `Difficulty Rating: ${getAverageDifficultyRating(item).toFixed(
         1
      )} \n Enjoyment Rating: ${getAverageEnjoymentRating(item).toFixed(1)}`,
   }));

   console.log("assignmentRatingAverageWithLabels: ", assignmentRatingAverageWithLabels);
   /* Output: 
   0: {assignment: "W1D1-1", difficultyRating: 3, enjoymentRating: 3.1, label: "Difficulty Rating: 3.0 ↵ Enjoyment Rating: 3.1"}
1: {assignment: "W1D2-1", difficultyRating: 3, enjoymentRating: 2, label: "Difficulty Rating: 3.0 ↵ Enjoyment Rating: 2.0"} 
*/

   return (
      <div className="component-container">
         <h2>Dashboard</h2>
         <p className="page-description">
            Welcome to the dashboard section. The graph below displays the average ratings of all Winc students. Head
            over the student overview for the individual difficulty and enjoyment ratings given by the students.
         </p>
         <Chart ratingChartData={assignmentRatingAverageWithLabels} />
      </div>
   );
}

export default Dashboard;
