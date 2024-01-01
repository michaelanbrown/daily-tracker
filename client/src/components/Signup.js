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
                <input placeholder='Name' type='text' name='name' value={name} className="input" onChange={handleChange} />
                <br/>
                <input placeholder='Age' type='text' name='age' value={age} className="input" onChange={handleChange} />
                <br/>
                <input placeholder='Username' type='text' name='username' value={username} className="input" onChange={handleChange} />
                <br/>
                <input placeholder='Email' type='text' name='email' value={email} className="input" onChange={handleChange} />
                <br/>
                <input placeholder='Password' type='password' name='password' value={password} className="input" onChange={handleChange} />
                <br/>
                <input type='submit' value='Sign up!' />
            </form>
            { errors ? <br/> : null }
            { errors ? errors.map(error => <div className='error' key={error}>{error}</div>) :null }
        </>
    )
}

export default Signup;