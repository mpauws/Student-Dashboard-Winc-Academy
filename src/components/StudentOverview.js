import React from "react";
import "../App.css";

import StudentGridContainer from "./StudentGridContainer";

function StudentOverview({ getStudentList }) {
   return (
      <div className="component-container">
         <h2>All Students</h2>
         <p className="page-description">Select a student to display the individual gradings.</p>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentOverview;
