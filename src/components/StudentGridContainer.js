import React from "react";
import StudentButton from "./StudentButton";

function StudentGridContainer({ getStudentList }) {
   //
   return (
      <div className="student-grid-container">
         {getStudentList ? getStudentList.map((student) => <StudentButton key={student} student={student} />) : null}
      </div>
   );
}

export default StudentGridContainer;
