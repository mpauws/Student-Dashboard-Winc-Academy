import React from "react";
import "../App.css";

import studentEvaluationData from "../data/student-evaluation-data";

function Dashboard({ getStudentList, getAssignments }) {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for calculating average difficultyRating
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

   console.log("getAverageDifficultyRating van W5D4-1", getAverageDifficultyRating("W5D4-1"));

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for calculating average difficultyRating
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

   console.log("getAverageEnjoymentRating van W5D4-1", getAverageEnjoymentRating("W5D4-1"));

   return (
      <div className="component-container">
         <h2>Dashboard</h2>
         <p className="page-description">
            Welcome to the dashboard section. The graph below displays the average ratings of all Winc students. Head
            over the student overview for the individual difficulty and enjoyment ratings given by the students.
         </p>
      </div>
   );
}

export default Dashboard;
