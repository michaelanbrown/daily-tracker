import React from "react";
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from "./context/User";

function Welcome( { errors, isLoading } ) {
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const navigate = useNavigate()

  function clickSignUp() {
    navigate("/signup")
  }

  function clickLogin() {
    navigate("/login")
  }

  return (
    <div>
      <br/>
      <img className="fuel" src={"https://foodisfuelllc.com/wp-content/uploads/2020/01/Food-is-Fuel_200-3.png"} alt="Food is fuel for life" width="30%" height="30%"/>
      <br/>
      { currentUser && isLoading ? null : <button className="welcome" onClick={clickSignUp}>Signup</button>}
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      { currentUser ? null : <button className="welcome" onClick={clickLogin}>Login</button>}
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
    </div>
  );
}

export default Welcome;
