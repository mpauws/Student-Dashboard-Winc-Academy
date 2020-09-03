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

   /*    const getImgURL = `./profile-photos/${student.replace(/\s/g, "-").toLowerCase()}.jpg`;
   console.log(getImgURL);
 */

   return (
      <div className="component-container">
         {/*          <img src={getImgURL} alt={student} />
          */}{" "}
         <h2>{student}</h2>
         <p className="page-description">{student} has submitted the following ratings:</p>
         <br />
         <h3>Ratings</h3>
         <Chart ratingChartData={assignmentStudentRatingWithLabels} />
         <h3>Display other student</h3>
         <StudentGridContainer getStudentList={getStudentList} />
      </div>
   );
}

export default StudentPage;
