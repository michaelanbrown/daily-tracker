import React, { useState } from 'react'
import '../App.css'

function Login({ }) {
    const [errors, setErrors] = useState([])

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
        
    }

        return (
            <div>
                
            </div>
    )
}

export default Login;