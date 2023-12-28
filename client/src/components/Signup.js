import React, { useState, useContext} from 'react'
import { useCurrentUser } from './context/User';
import '../App.css'

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

    return (
        <> 
        
        </>
    )
}

export default Signup;