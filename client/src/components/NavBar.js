import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"
import { useCurrentUser } from './context/User';
import { useNavigate } from 'react-router-dom';

export default function NavBar ({ isLoading })  {
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const navigate = useNavigate()

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
      isLoading ? "Loading..." : <nav className='NavBar'>
        { currentUser ? null : <NavLink className="Navelements" to="/signup">Signup</NavLink> }
        { currentUser ? null : <br/> }
        { currentUser ? <NavLink className="Navelements" to="/">Home</NavLink> : null }
        { currentUser ? <br/> : null }
        { currentUser ? null : <NavLink className="Navelements" to="/login">Login</NavLink> }
        { currentUser ? <NavLink className="Navelements" to="/today">Today</NavLink> : null }
        { currentUser ? <br/> : null }
        { currentUser ? <NavLink className="Navelements" to="/previousdays">Previous Days</NavLink> : null }
        { currentUser ? <br/> : null }
        { currentUser ? <NavLink className="Navelements" to="/food">Food</NavLink> : null }
        { currentUser ? <br/> : null }
        { currentUser ? <NavLink className="Navelements" to="/recipes">Recipes</NavLink> : null }
        { currentUser ? <button className="logout" onClick={handleLogout}>Logout</button> : null }
      </nav>
    )
}