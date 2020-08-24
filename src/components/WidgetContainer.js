import React from "react";
import Widget from "./widgets/Widget";

function WidgetContainer({ assignmentRatingAverageWithLabels }) {
   const hardestAssignment = () => {
      let max = 0;
      let newObject = {};
      assignmentRatingAverageWithLabels.forEach((object) => {
         if (object.difficultyRating > max) {
            max = object.difficultyRating;
            newObject = { title: "Hardest Assignment", assignment: object.assignment, rating: max };
         }
      });
      return newObject;
   };

   const easiestAssignment = () => {
      let min = 5;
      let newObject = {};
      assignmentRatingAverageWithLabels.forEach((object) => {
         if (object.difficultyRating < min) {
            min = object.difficultyRating;
            newObject = { title: "Easiest Assignment", assignment: object.assignment, rating: min };
         }
      });
      return newObject;
   };

   const mostFunAssignment = () => {
      let max = 0;
      let newObject = {};
      assignmentRatingAverageWithLabels.forEach((object) => {
         if (object.enjoymentRating > max) {
            max = object.enjoymentRating;
            newObject = { title: "Most Fun Assignment", assignment: object.assignment, rating: max };
         }
      });
      return newObject;
   };

   const leastFunAssignment = () => {
      let min = 5;
      let newObject = {};
      assignmentRatingAverageWithLabels.forEach((object) => {
         if (object.enjoymentRating < min) {
            min = object.enjoymentRating;
            newObject = { title: "Least Fun Assignment", assignment: object.assignment, rating: min };
         }
      });
      return newObject;
   };

   return (
      <div className="widget-container">
         <Widget statistic={easiestAssignment()} />
         <Widget statistic={hardestAssignment()} />
         <Widget statistic={mostFunAssignment()} />
         <Widget statistic={leastFunAssignment()} />
      </div>
   );
}

export default WidgetContainer;
