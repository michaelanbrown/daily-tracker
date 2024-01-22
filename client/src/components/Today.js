import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from "./context/User";

function Today({ users, foods, categories }) {
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [currentFoods, setCurrentFoods] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])

  useEffect(() => {
    const setFoods = currentUser ? setCurrentFoods(currentUser.foods) : null
    const setCategoriess = currentUser ? setCurrentCategories(currentUser.categories) : null
  },[currentUser])

  function addFood() {
    navigate('/foodlist')
  }

  const breakfastCatId = currentCategories.filter(category => category.meal === "Breakfast").map(food => food.id)

  const breakfastFoods = currentFoods.filter(food => breakfastCatId.indexOf(food.id) > -1)

  const breakfastMap = breakfastFoods.map(food => {
    
  })

  return (
    <div>
        <h2>Breakfast</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
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