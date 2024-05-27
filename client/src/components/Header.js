import React from "react";
import NavBar from "./NavBar";

function Header({ isLoading, setIsLoading }) {

  return (
    <div className="Header">
      <header>
        <div>
            <h1>🍪 Daily Tracker 🍪</h1>
            <h2>Track your intake here for a happier, healthier you.</h2>
            <NavBar isLoading={isLoading}/>
        </div>  
      </header>
    </div>
  );
}

export default Header;