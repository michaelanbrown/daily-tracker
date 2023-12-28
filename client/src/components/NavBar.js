import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"
import { useCurrentUser } from './context/User';

export default function NavBar ({ isLoading })  {
  const { currentUser, fetchCurrentUser } = useCurrentUser()

    return (
      isLoading ? "Loading..." : <nav>
         { currentUser ? null : <NavLink className="Navelements" to="/login">Login</NavLink> }
      </nav>
    )
}