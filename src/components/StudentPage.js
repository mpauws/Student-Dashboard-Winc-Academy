import React from "react";
// import Chart from "./Chart";
import StudentGridContainer from "./StudentGridContainer";

function StudentPage({
   studentEvaluationData,
   student,
   getEnjoymentRatings,
   getAssignments,
   getDifficultyRatings,
   getStudentList,
}) {
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
   // Get array of all distinct assignments of student X with related average difficultyRating, enjoymentRating and label
   // [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

   const assignmentStudentRatingWithLabels = getAssignments.map((assignment) => ({
      assignment: assignment,
      difficultyRating: getDifficultyRatings(student, assignment),
      enjoymentRating: getEnjoymentRatings(student, assignment),

      /* label: `Difficulty Rating: ${getDifficultyRatings(student, item).toFixed(
         1
      )} \n Enjoyment Rating: ${getEnjoymentRatings(student, item).toFixed(1)}`, */
   }));

   console.log("assignmentStudentRatingWithLabels: ", assignmentStudentRatingWithLabels);

   return (
      <div>
         <h2>{student}</h2>
         <p className="page-description">
            TEST CASE: De enjoyment grade van {student} voor W1D2-1 is: {getEnjoymentRatings(student, "W1D2-1")}. De
            difficulty grade van {student} voor W1D2-1 is {getDifficultyRatings(student, "W1D2-1")}.
         </p>
         <br />
         <h3>GrafiekEnjoyment en Difficulty Gradings</h3>

         {/* <Chart assignmentStudentRatingWithLabels={assignmentStudentRatingWithLabels} /> */}
         <h3>Ga naar andere student</h3>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentPage;
