import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import StudentOverview from "./components/StudentOverview";
import Dashboard from "./components/Dashboard";

// Import raw student evaluation data
import studentEvaluationData from "./data/student-evaluation-data";

import "./App.css";

function App() {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of students

   const getStudentList = [...new Set(studentEvaluationData.map((x) => x.student))];
   // console.log("getStudentList: ", getStudentList);

   const sortedStudentList = getStudentList.sort((student1, student2) => {
      if (student1 > student2) {
         return 1;
      } else if (student1 === student2) {
         return 0;
      } else if (student1 < student2) {
         return -1;
      }
      return 0;
   });

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of assignments

   const getAssignments = [...new Set(studentEvaluationData.map((x) => x.assignment))];

   const sortedAssignmentList = getAssignments.sort((assignment1, assignment2) => {
      if (assignment1 > assignment2) {
         return 1;
      } else if (assignment1 === assignment2) {
         return 0;
      } else if (assignment1 < assignment2) {
         return -1;
      }
      return 0;
   });

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

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Return

   return (
      <Router>
         <div className="app-container">
            <nav>
               <ul>
                  <li>
                     <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                     <Link to="/studentoveriew">Student Overview</Link>
                  </li>
               </ul>
            </nav>
            <main>
               <Switch>
                  <Route path="/studentoverview">
                     <StudentOverview />
                  </Route>
                  <Route path="/">
                     <Dashboard />
                  </Route>
               </Switch>
               {/*                <h2>Students</h2>
               <ul>
                  {sortedStudentList ? sortedStudentList.map((student) => <li key={student}>{student}</li>) : null}
               </ul>
               <ul>
                  {sortedAssignmentList
                     ? sortedAssignmentList.map((assignment) => <li key={assignment}>{assignment}</li>)
                     : null}
               </ul>
 */}
            </main>
         </div>
      </Router>
   );
}

export default App;

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Developer Functions

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Get enjoymentRating of Piet Paulusma of W1D2-1
/* const getEnjoyRatingPietW1D2_1 = studentEvaluationData
      .filter((item) => {
         return item.student === "Piet Paulusma";
      })
      .filter((student) => {
         return student.assignment === "W1D2-1";
      })
      .map((assignment) => assignment.enjoymentRating);

   console.log("Enjoyment Rating van Piet Paulusma voor W1D2-1: ", getEnjoyRatingPietW1D2_1);
*/

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Get average difficultyRating of W5D4-1
/* 
   const getTotalDifficultyRatingW5D4_1 = studentEvaluationData
      .filter((item) => {
         return item.assignment === "W5D4-1";
      })
      .map((item) => item.difficultyRating)
      .reduce((currentTotal, grading) => {
         return grading + currentTotal;
      }, 0);
   console.log("getTotalDifficultyRatingW5D4_1: ", getTotalDifficultyRatingW5D4_1);

   const getAverageDifficultyRatingW5D4_1 = getTotalDifficultyRatingW5D4_1 / getStudentList.length;
   console.log("getAverageDifficultyRatingW5D4_1: ", getAverageDifficultyRatingW5D4_1); */
