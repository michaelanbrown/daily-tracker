import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from "./context/User";
import MealMap from "./MealMap";

function Today({ users, foods, categories }) {
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [currentFoods, setCurrentFoods] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [breakfastFoods, setBreakfastFoods] = useState([])
  const [lunchFoods, setLunchFoods] = useState([])
  const [dinnerFoods, setDinnerFoods] = useState([])
  const [snackFoods, setSnackFoods] = useState([])

  useEffect(() => {
    const setFoods = currentUser ? setCurrentFoods(currentUser.foods) : null
    const setCategories = currentUser ? setCurrentCategories(currentUser.categories) : null
    const breakfast = currentCategories ? setBreakfastFoods(currentFoods.filter(food => currentCategories.filter(category => category.meal === "Breakfast").map(food => food.id).indexOf(food.id) > -1)) : null
    const lunch = currentCategories ? setLunchFoods(currentFoods.filter(food => currentCategories.filter(category => category.meal === "Lunch").map(food => food.id).indexOf(food.id) > -1)) : null
    const dinner = currentCategories ? setDinnerFoods(currentFoods.filter(food => currentCategories.filter(category => category.meal === "Dinner").map(food => food.id).indexOf(food.id) > -1)) : null
    const snack = currentCategories ? setSnackFoods(currentFoods.filter(food => currentCategories.filter(category => category.meal === "Snack").map(food => food.id).indexOf(food.id) > -1)) : null
  },[currentUser, currentCategories])

  function addFood() {
    navigate('/foodlist')
  }

  const breakfastMap = breakfastFoods ? breakfastFoods.map(food => {
    return <MealMap key={food.id} food={food}/>
  }) : null

  const lunchMap = lunchFoods ? lunchFoods.map(food => {
    return <MealMap key={food.id} food={food}/>
  }) : null

  const dinnerMap = dinnerFoods ? dinnerFoods.map(food => {
    return <MealMap key={food.id} food={food}/>
  }) : null

  const snackMap = snackFoods ? snackFoods.map(food => {
    return <MealMap key={food.id} food={food}/>
  }) : null

  return (
    <div>
        <h2>Breakfast</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        {breakfastMap}
        <br/>
        <br/>
        <h2>Lunch</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        {lunchMap}
        <br/>
        <br/>
        <h2>Dinner</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        {dinnerMap}
        <br/>
        <br/>
        <h2>Snacks</h2>
        <button className="addfood" onClick={addFood}>Add Food</button>
        {snackMap}
    </div>
  );
}

export default Today;