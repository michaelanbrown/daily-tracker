import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"
import { useCurrentUser } from './context/User';

export default function NavBar ({ isLoading })  {
  const { currentUser, fetchCurrentUser } = useCurrentUser()

  function handleLogout() {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        fetchCurrentUser()
        navigate(`/`)
      }
    })
  }

    return (
      isLoading ? "Loading..." : <nav>
         { currentUser ? null : <NavLink className="Navelements" to="/login">Login</NavLink> }
         { currentUser ? <button className="logout" onClick={handleLogout}>Logout</button> : null }
      </nav>
    )
}