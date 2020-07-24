import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "../assets/winc-logo.png";

function NavBar() {
   return (
      <nav className="nav-bar">
         <Link to="/">
            <img className="winc-logo" src={logo} alt="winc-logo" width="100px" />
         </Link>

         <h5>Student Dashboard </h5>
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
