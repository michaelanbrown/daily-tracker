import React, { useState } from 'react'
import '../App.css'
import { useCurrentUser } from './context/User'
import { useNavigate } from "react-router-dom"

function Login({ getUsers, getFoods, getRecipes, getCategories, setIsLoading }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const {username, password} = formData
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const navigate = useNavigate()

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
       
        fetch("/login",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                setIsLoading(false)
                fetchCurrentUser()
                getUsers()
                getFoods()
                getCategories()
                getRecipes()
                navigate("/")
            }
             else {
                res.json().then(json => setErrors([json.errors]))
             }
        })
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder='Username' name="username" value={username} className="input" onChange={handleChange} />
                    <br/>
                    <input type="password" placeholder='Password' name="password" value={password} className="input" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input type="submit" className="submit" value="Log in" />
                </form>
                <br/>
                { errors ? <br/> : null }
                { errors.length !==0 ? <div className='error' >
                { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
                </div> : null }
            </div>
    )
}

export default Login;