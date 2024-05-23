import '../App.css'
import React from "react";
import { NavLink } from "react-router-dom"
import { useCurrentUser } from './context/User';
import { useNavigate } from 'react-router-dom';

export default function NavBar ({ isLoading })  {
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const navigate = useNavigate()


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
        { currentUser ? <button className="logout" onClick={handleLogout}>Logout</button> : null }
      </nav>
    )
}