import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"
import { useCurrentUser } from './context/User';

export default function NavBar ({ })  {
  const { currentUser, fetchCurrentUser } = useCurrentUser()

    return (
      <div>
         <NavLink className="Navelements" to="/login">Login</NavLink>
      </div>
    )
}