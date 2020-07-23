import React from "react";
import "../App.css";

import studentEvaluationData from "../data/student-evaluation-data";
import StudentGridContainer from "./StudentGridContainer";

function StudentOverview({ getStudentList, getAssignments }) {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing enjoyment rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getEnjoymentRatings = (student, assignment) => {
      return studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         })
         .map((assignment) => assignment.enjoymentRating);
   };

   console.log(
      "Enjoyment Rating van Piet Paulusma voor W1D2-1 (DRY): ",
      getEnjoymentRatings("Piet Paulusma", "W1D2-1")
   );

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing difficulty rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getDifficultyRatings = (student, assignment) => {
      return studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         })
         .map((assignment) => assignment.difficultyRating);
   };

   console.log(
      "Difficulty Rating van Piet Paulusma voor W1D2-1 (DRY): ",
      getDifficultyRatings("Piet Paulusma", "W1D2-1")
   );

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Return
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   return (
      <div className="component-container">
         <h2>All Students</h2>
         <p className="page-description">Select a student to display the individual gradings.</p>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentOverview;
