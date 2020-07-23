import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function NavBar() {
   return (
      <nav className="nav-bar">
         <img src="winc-logo.png" alt="logo" />
         <h5>Winc Student Dashboard </h5>
         <ul className="nav-bar-links">
            <Link to="/">
               <li>Dashboard</li>
            </Link>
            <Link to="/studentoverview">
               <li>Student Overview</li>
            </Link>
         </ul>
      </nav>
   );
}

export default NavBar;
