import React from "react";
import Widget from "./widgets/Widget";

function WidgetContainer() {
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

   const randomValue = Math.floor(Math.random() * 5);
   console.log(randomValue);
   return (
      <div className="widget-container">
         <Widget statistic={easiestAssignment} widgetTitle={widgetTitle1} randomValue={randomValue} />
         <Widget statistic={hardestAssignment} widgetTitle={widgetTitle2} randomValue={randomValue} />
         <Widget statistic={mostFunAssignment} widgetTitle={widgetTitle3} randomValue={randomValue} />
         <Widget statistic={leastFunAssignment} widgetTitle={widgetTitle4} randomValue={randomValue} />
      </div>
   );
}

export default WidgetContainer;
