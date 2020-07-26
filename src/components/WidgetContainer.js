import React from "react";
import Widget from "./widgets/Widget";

function WidgetContainer({ studentEvaluationData }) {
   // [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]

   /*    function largestOfFour(mainArray) {
      return mainArray.map(function (subArray) {
         return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
            return currentLargestNumber > previousLargestNumber ? currentLargestNumber : previousLargestNumber;
         }, 0);
      });
   }
   console.log(
      largestOfFour([
         [4, 5, 1, 3],
         [13, 27, 18, 26],
         [32, 35, 37, 39],
         [1000, 1001, 857, 1],
      ])
   );
 */
   // [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]

   /*    const exampleArray = [1, 2, 3, 4];

   const getLargestNumberFromArray = (arr) => {
      return arr.reduce(function (previousLargestNumber, currentLargestNumber) {
         return currentLargestNumber > previousLargestNumber ? currentLargestNumber : previousLargestNumber;
      }, 0);
   };

   console.log(getLargestNumberFromArray(exampleArray)); */

   // [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]

   let games = [
      { id: 1, name: "Star Wars: Imperial Assault", available: true, votes: 3 },
      { id: 2, name: "Game of Thrones: Second Edition", available: false, votes: 4 },
      { id: 3, name: "Merchans and Marauders", available: true, votes: 5 },
      { id: 4, name: "Eclipse", available: false, votes: 6 },
      { id: 5, name: "Fure of Dracula", available: true, votes: 2 },
   ];

   let maxGame = games.reduce((max, game) => (max.votes > game.votes ? max : game), 0);

   console.log(maxGame);

   // [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]

   let mostDifficultAssignmentForStudent = studentEvaluationData.reduce((max, item) =>
      max.difficultyRating > item.difficultyRating ? max : item
   );

   console.log(mostDifficultAssignmentForStudent);

   // [[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]

   const widgetTitle1 = "Easiest Assignment";
   const widgetTitle2 = "Hardest Assignment";
   const widgetTitle3 = "Most Fun Assignment";
   const widgetTitle4 = "Least Fun Assignment";

   const easiestAssignment = "W2D1-1";
   // To do: build function to display assignment with lowest difficulty grading
   const hardestAssignment = "W2D1-2";
   // To do: build function to display assignment with highest difficulty grading
   const mostFunAssignment = "W2D1-3";
   // To do: build function to display assignment with highest enjoyment grading
   const leastFunAssignment = "W2D1-4";
   // To do: build function to display assignment with lowest enjoyment grading

   const gradeEasiestAssignment = "1.2";
   // To do: build function to display assignment with lowest difficulty grading
   const gradeHardestAssignment = "4.8";
   // To do: build function to display assignment with highest difficulty grading
   const gradeMostFunAssignment = "4.5";
   // To do: build function to display assignment with highest enjoyment grading
   const gradeLeastFunAssignment = "2.4";
   // To do: build function to display assignment with lowest enjoyment grading

   return (
      <div className="widget-container">
         <Widget statistic={easiestAssignment} widgetTitle={widgetTitle1} />
         <Widget statistic={hardestAssignment} widgetTitle={widgetTitle2} />
         <Widget statistic={mostFunAssignment} widgetTitle={widgetTitle3} />
         <Widget statistic={leastFunAssignment} widgetTitle={widgetTitle4} />
      </div>
   );
}

export default WidgetContainer;
