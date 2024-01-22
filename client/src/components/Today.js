import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from "./context/User";
import BreakfastMap from "./BreakfastMap";

function Today({ users, foods, categories }) {
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [currentFoods, setCurrentFoods] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [breakfastFoods, setBreakfastFoods] = useState([])

  useEffect(() => {
    const setFoods = currentUser ? setCurrentFoods(currentUser.foods) : null
    const setCategories = currentUser ? setCurrentCategories(currentUser.categories) : null
    const breakfast = currentCategories ? setBreakfastFoods(currentFoods.filter(food => currentCategories.filter(category => category.meal === "Breakfast").map(food => food.id).indexOf(food.id) > -1)) : null
  },[currentUser, currentCategories])

  function addFood() {
    navigate('/foodlist')
  }

  const breakfastMap = breakfastFoods.map(food => {
    <BreakfastMap food={food}/>
  })

  console.log(breakfastFoods)

  return (
    <div>
        <h2>Breakfast</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        {breakfastMap}
        <br/>
        <br/>
        <h2>Lunch</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        <br/>
        <br/>
        <h2>Dinner</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        <br/>
        <br/>
        <h2>Snacks</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
    </div>
  );
}

export default Today;