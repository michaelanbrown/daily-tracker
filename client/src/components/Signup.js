import React, { useState, useContext} from 'react'
import { useCurrentUser } from './context/User';
import '../App.css'

function Signup({  }) {
    const { currentUser, fetchCurrentUser } = useCurrentUser()

    return (
        <> 
        
        </>
    )
}

export default Signup;