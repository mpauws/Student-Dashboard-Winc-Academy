import React from "react";
import "../App.css";

// import studentEvaluationData from "../data/student-evaluation-data";
import StudentGridContainer from "./StudentGridContainer";

function StudentOverview({ getStudentList, getAssignments }) {


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
