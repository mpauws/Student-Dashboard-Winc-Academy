import React from "react";
import Chart from "./Chart";
import StudentGridContainer from "./StudentGridContainer";

function StudentPage({ student, getRating, getAssignments, getStudentList }) {
   const assignmentStudentRatingWithLabels = getAssignments.map((assignment) => ({
      assignment: assignment,
      difficultyRating: getRating(student, assignment, "difficulty"),
      enjoymentRating: getRating(student, assignment, "enjoyment"),
      label: `Difficulty Rating: ${getRating(student, assignment, "difficulty").toFixed(
         1
      )} \n Enjoyment Rating: ${getRating(student, assignment, "enjoyment").toFixed(1)}`,
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
