import React from "react";
import Widget from "./widgets/Widget";

import hardestIcon from "../assets/hardest-icon.png";
import easiestIcon from "../assets/easiest-icon.png";
import mostFunIcon from "../assets/most-fun-icon.png";
import leastFunIcon from "../assets/least-fun-icon.png";

function WidgetContainer({ assignmentRatingAverageWithLabels }) {
   const hardestAssignment = () => {
      let max = 0;
      let newObject = {};
      assignmentRatingAverageWithLabels.forEach((object) => {
         if (object.difficultyRating > max) {
            max = object.difficultyRating;
            newObject = {
               title: "Hardest Assignment",
               assignment: object.assignment,
               rating: max.toFixed(1),
               textcolor: "red",
               icon: hardestIcon,
            };
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
            newObject = {
               title: "Easiest Assignment",
               assignment: object.assignment,
               rating: min.toFixed(1),
               textcolor: "green",
               icon: easiestIcon,
            };
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
            newObject = {
               title: "Most Fun Assignment",
               assignment: object.assignment,
               rating: max.toFixed(1),
               textcolor: "green",
               icon: mostFunIcon,
            };
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
            newObject = {
               title: "Least Fun Assignment",
               assignment: object.assignment,
               rating: min.toFixed(1),
               textcolor: "red",
               icon: leastFunIcon,
            };
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
