import React from "react";
import "../App.css";

import studentEvaluationData from "../data/student-evaluation-data";

function StudentOverview({ getStudentList, getAssignments }) {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing enjoyment rating for student x

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

   return (
      <div className="component-container">
         <h2>All Students</h2>
         <p className="page-description">Select a student to display the individual gradings.</p>
         <div className="student-grid-container">
            {getStudentList
               ? getStudentList.map((student) => (
                    <button className="student-tile" key={student}>
                       <p>{student}</p>
                    </button>
                 ))
               : null}
            {/* {getStudentList
               ? getStudentList.map((student) => (
                    <div className="student-tile" key={student}>
                       {student}
                    </div>
                 ))
               : null} */}
         </div>
      </div>
   );
}

export default StudentOverview;
