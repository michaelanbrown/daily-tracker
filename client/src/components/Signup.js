import React, { useState, useContext} from 'react'
import { useCurrentUser } from './context/User';
import '../App.css'

function Signup({  }) {
    const { currentUser, fetchCurrentUser } = useCurrentUser()
    const [errors, setErrors] = useState([])

    return (
        <> 
        
        </>
    )
}

export default Signup;