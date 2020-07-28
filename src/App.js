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
                  <StudentOverview getStudentList={getStudentList} />
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
