import React, { useState } from 'react'
import '../App.css'
import { useCurrentUser } from './components/context/User';

function Login({ }) {
    const [errors, setErrors] = useState([])
    const { currentUser, fetchCurrentUser } = useCurrentUser()

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
            }
             else {
                res.json().then(json => setErrors([json.errors]))
             }
        })
    }


        return (
            <div>
                
            </div>
    )
}

export default Login;