import React from "react";

function Widget({ widgetTitle, statistic }) {
   return (
      <div className="widget-element">
         <h4>{widgetTitle}</h4>
         <div className="display-statistic"> {statistic}</div>
      </div>
   );
}

export default Widget;
