import React from "react";
import NavBar from "./NavBar";

function Header({ isLoading }) {

  return (
    <div className="Header">
      <header>
        <div>
            <h1>🍪 Daily Tracker 🍪</h1>
            <h3>Track your intake here for a better, healthier you.</h3>
            <NavBar isLoading={isLoading}/>
        </div>  
      </header>
    </div>
  );
}

export default Header;