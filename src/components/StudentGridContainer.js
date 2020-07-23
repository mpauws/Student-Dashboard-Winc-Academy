import React from "react";
import { Link } from "react-router-dom";
import StudentButton from "./StudentButton";

// Experiment Go!

function StudentGridContainer({ getStudentList }) {
   return (
      <div className="student-grid-container">
         {getStudentList
            ? getStudentList.map((student) => (
                 <Link key={student} to={`/${student.replace(/\s/g, "-")}`}>
                    <StudentButton key={student} student={student} />
                 </Link>
              ))
            : null}
      </div>
   );
}

export default StudentGridContainer;
