import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import StudentOverview from "./components/StudentOverview";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import StudentPage from "./components/StudentPage";

import studentEvaluationData from "./data/student-evaluation-data";

import "./App.css";

function App() {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of students
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   const getStudentList = [...new Set(studentEvaluationData.map((x) => x.student))].sort((student1, student2) => {
      if (student1 > student2) {
         return 1;
      } else if (student1 === student2) {
         return 0;
      } else if (student1 < student2) {
         return -1;
      }
      return 0;
   });

   // console.log("getStudentList: ", getStudentList);

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get list of assignments
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   const getAssignments = [...new Set(studentEvaluationData.map((x) => x.assignment))].sort(
      (assignment1, assignment2) => {
         if (assignment1 > assignment2) {
            return 1;
         } else if (assignment1 === assignment2) {
            return 0;
         } else if (assignment1 < assignment2) {
            return -1;
         }
         return 0;
      }
   );

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing enjoyment rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getEnjoymentRatings = (student, assignment) => {
      const selectedRating = studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         });

      return selectedRating[0].enjoymentRating;
   };

   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // DRY function for accessing difficulty rating for student x
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const getDifficultyRatings = (student, assignment) => {
      const selectedRating = studentEvaluationData
         .filter((item) => {
            return item.student === student;
         })
         .filter((student) => {
            return student.assignment === assignment;
         });

      return selectedRating[0].difficultyRating;
   };

   return (
      <Router>
         <div className="app-container">
            <NavBar />
            <Switch>
               <Route path="/" exact>
                  <Dashboard
                     getStudentList={getStudentList}
                     getAssignments={getAssignments}
                     studentEvaluationData={studentEvaluationData}
                  />
               </Route>
               <Route path="/studentoverview">
                  <StudentOverview getStudentList={getStudentList} getAssignments={getAssignments} />
               </Route>
               {getStudentList
                  ? getStudentList.map((student) => (
                       <Route exact path={`/${student.replace(/\s/g, "-")}`} key={student}>
                          <StudentPage
                             getStudentList={getStudentList}
                             getAssignments={getAssignments}
                             student={student}
                             getEnjoymentRatings={getEnjoymentRatings}
                             getDifficultyRatings={getDifficultyRatings}
                             studentEvaluationData={studentEvaluationData}
                          />
                       </Route>
                    ))
                  : null}
            </Switch>
            <Footer />
         </div>
      </Router>
   );
}

export default App;

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Developer Functions

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Get enjoymentRating of Piet Paulusma of W1D2-1
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
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
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
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

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Sort studentlist
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/*    const sortedStudentList = getStudentList.sort((student1, student2) => {
      if (student1 > student2) {
         return 1;
      } else if (student1 === student2) {
         return 0;
      } else if (student1 < student2) {
         return -1;
      }
      return 0;
   }); */

// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
// Sort assignments
// [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
/* const sortedAssignmentList = getAssignments.sort((assignment1, assignment2) => {
   if (assignment1 > assignment2) {
      return 1;
   } else if (assignment1 === assignment2) {
      return 0;
   } else if (assignment1 < assignment2) {
      return -1;
   }
   return 0;
});
 */
