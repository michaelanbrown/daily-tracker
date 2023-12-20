import React, { useState } from 'react'
import '../App.css'
import { useCurrentUser } from './context/User'
import { useHistory } from "react-router-dom"

function Login({ }) {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })
    const {username, password} = formData
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const history = useHistory()

    function onSubmit(e){
        e.preventDefault()
        const customer = {
            username,
            password
        }
       
        fetch("/login",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(customer)
        })
        .then(res => {
            if (res.ok) {
                fetchCurrentUser()
                history.push("/")
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

        //fix usehistory and usecontext

        return (
            <div>
                <form onSubmit={onSubmit}>
                    Username: <input type="text" name="username" value={username} onChange={handleChange} />
                        <br/>
                    Password: <input type="password" name="password" value={password} onChange={handleChange} />
                        <br/>
                        <input type="submit" value="Log in" />
                </form>
                <br/>
                { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
            </div>
    )
}

export default Login;