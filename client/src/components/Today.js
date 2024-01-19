import React from "react";
import { useNavigate } from 'react-router-dom';

function Today({ users, foods, categories }) {
  const navigate = useNavigate()

  function addFood() {
    navigate('/foodlist')
  }

  return (
    <div>
        <h2>Breakfast</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        <br/>
        <br/>
        <h2>Lunch</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        <h2>Dinner</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        <h2>Snacks</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
    </div>
  );
}

export default Today;