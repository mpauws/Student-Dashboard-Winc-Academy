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

   // console.log("getAverageEnjoymentRating van W5D4-1", getAverageEnjoymentRating("W5D4-1"));

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
   console.log(assignmentRatingAverageWithLabels.map((averages) => averages.assignment));

   return (
      <div className="component-container">
         <h2>Dashboard</h2>
         <p className="page-description">
            Welcome to the dashboard section. The graph below displays the average ratings of all Winc students. Head
            over the student overview for the individual difficulty and enjoyment ratings given by the students.
         </p>
         <Chart assignmentRatingAverageWithLabels={assignmentRatingAverageWithLabels} />
      </div>
   );
}

export default Dashboard;

/*    const hardCodedDataAverages = [
      { assignment: "W1D1-2", difficultyRating: 5, enjoymentRating: 1 },
      { assignment: "W1D1-1", difficultyRating: 1, enjoymentRating: 5 },
      { assignment: "W1D1-3", difficultyRating: 3, enjoymentRating: 3 },
      { assignment: "W1D2-1", difficultyRating: 5, enjoymentRating: 1 },
      { assignment: "W1D2-2", difficultyRating: 1, enjoymentRating: 5 },
      { assignment: "W1D3-1", difficultyRating: 3, enjoymentRating: 3 },
      { assignment: "W1D3-1", difficultyRating: 5, enjoymentRating: 1 },
      { assignment: "W1D3-2", difficultyRating: 1, enjoymentRating: 5 },
      { assignment: "W1D3-3", difficultyRating: 3, enjoymentRating: 3 },
      { assignment: "W1D3-4", difficultyRating: 5, enjoymentRating: 1 },
      { assignment: "W1D3-5", difficultyRating: 1, enjoymentRating: 5 },
      { assignment: "W1D3-6", difficultyRating: 3, enjoymentRating: 5 },
   ]; */
