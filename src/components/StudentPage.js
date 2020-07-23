import React from "react";
import Chart from "./Chart";
import StudentGridContainer from "./StudentGridContainer";

function StudentPage({ student, getEnjoymentRatings, getDifficultyRatings, getStudentList }) {
   return (
      <div>
         <h2>{student}</h2>
         <p className="page-description">
            TEST CASE: De enjoyment grade van {student} voor W1D2-1 is: {getEnjoymentRatings(student, "W1D2-1")}. De
            difficulty grade van {student} voor W1D2-1 is {getDifficultyRatings(student, "W1D2-1")}.
         </p>
         <h3>Enjoyment en Difficulty Gradings</h3>
         <Chart
            student={student}
            getEnjoymentRatings={getEnjoymentRatings}
            getDifficultyRatings={getDifficultyRatings}
         />
         <h3>Ga naar andere student</h3>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentPage;
