import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"

export default function NavBar ({ })  {
    

    return (
      <div>
         <NavLink className="Navelements" to="/login">Login</NavLink>
      </div>
    )
}