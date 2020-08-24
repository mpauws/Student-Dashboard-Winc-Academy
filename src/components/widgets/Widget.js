import React from "react";

function Widget({ widgetTitle, statistic }) {
   return (
      <div className="widget-element">
         <h4>{statistic.title}</h4>
         <div className="display-statistic"> {statistic.assignment}</div>
         <div className="display-statistic"> {statistic.rating}</div>
      </div>
   );
}

export default Widget;
