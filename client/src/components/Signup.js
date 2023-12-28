import React, { useState, useContext} from 'react'
import { useCurrentUser } from './context/User';
import '../App.css'
import { useNavigate } from 'react-router-dom';

function Signup({  }) {
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
        
        </>
    )
}

export default Signup;