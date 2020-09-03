import React from "react";
import "../App.css";

function Footer() {
   const year = new Date().getFullYear();

   return (
      <footer>
         <h4>Made by Marco, © {year}</h4>
      </footer>
   );
}

export default Footer;
