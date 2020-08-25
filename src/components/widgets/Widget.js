import React from "react";

function Widget({ widgetTitle, statistic }) {
   return (
      <div className="widget-element">
         <h4>{statistic.title}</h4>
         <img className="widget-icon" src={statistic.icon} alt="icon" />
         <div className="display-statistic">
            <div className={`display-statistic-assignment-${statistic.textcolor}`}> {statistic.assignment}: </div>
            <div className="display-statistic-rating"> {statistic.rating}</div>
         </div>
      </div>
   );
}

export default Widget;
