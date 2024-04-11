import React from "react";

function Welcome( { errors } ) {

  return (
    <div>
      <br/>
      <img className="fuel" src={"https://musclenerds.net/wp-content/uploads/2020/11/Food-is-Fuel.png"} alt="Food is fuel for life" width="50%" height="50%"/>
      { errors ? <br/> : null }
      { errors.length !==0 ? <div className='error' >
      { errors ? errors.map(error => <div key={error}>{error}</div>) : null }
      </div> : null }
    </div>
  );
}

export default Welcome;
