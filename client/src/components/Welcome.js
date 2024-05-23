import React from "react";
import { useNavigate } from 'react-router-dom';

function Welcome( { errors } ) {

  return (
    <div>
      <br/>
      <img className="fuel" src={"https://foodisfuelllc.com/wp-content/uploads/2020/01/Food-is-Fuel_200-3.png"} alt="Food is fuel for life" width="30%" height="30%"/>
      <br/>
      <button className="new">Signup</button>
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
    </div>
  );
}

export default Welcome;
