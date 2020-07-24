import React from "react";
import Chart from "./Chart";
import StudentGridContainer from "./StudentGridContainer";

function StudentPage({ student, getEnjoymentRatings, getAssignments, getDifficultyRatings, getStudentList }) {
   const assignmentStudentRatingWithLabels = getAssignments.map((assignment) => ({
      assignment: assignment,
      difficultyRating: getDifficultyRatings(student, assignment),
      enjoymentRating: getEnjoymentRatings(student, assignment),
      label: `Difficulty Rating: ${getDifficultyRatings(student, assignment).toFixed(
         1
      )} \n Enjoyment Rating: ${getEnjoymentRatings(student, assignment).toFixed(1)}`,
   }));

   return (
      <div className="component-container">
         <h2>{student}</h2>
         <p className="page-description"></p>
         <br />
         <h3>Ratings</h3>
         <Chart ratingChartData={assignmentStudentRatingWithLabels} />
         <h3>Display other student</h3>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentPage;
