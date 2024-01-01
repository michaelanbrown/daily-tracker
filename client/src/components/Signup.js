import React, { useState, useContext} from 'react'
import { useCurrentUser } from './context/User';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Signup({ getUsers, getFoods, getCategories, users, setUsers }) {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name:'',
        age: '',
        username: '',
        email:'',
        password:''
    })
    const {name, age, username, email, password} = formData
    const navigate = useNavigate();

    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            age,
            username,
            email,
            password
        }   
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    fetchCurrentUser(user)
                    setUsers([...users, user])
                    getUsers()
                    getFoods()
                    getCategories()
                })
            } else {
                res.json().then(json => setErrors(json.errors))
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
        <> 
            <form onSubmit={onSubmit}>
                Name: <input type='text' name='name' value={name} onChange={handleChange} />
                <br/>
                Age: <input type='text' name='age' value={age} onChange={handleChange} />
                <br/>
                Username: <input type='text' name='username' value={username} onChange={handleChange} />
                <br/>
                Email: <input type='text' name='email' value={email} onChange={handleChange} />
                <br/>
                Password: <input type='password' name='password' value={password} onChange={handleChange} />
                <br/>
            </form>
        </>
    )
}

export default Signup;