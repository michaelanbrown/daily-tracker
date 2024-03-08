import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useCurrentUser } from "./context/User";
import MealMap from "./MealMap";

function Today({ setMeal }) {
  const navigate = useNavigate()
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [currentFoods, setCurrentFoods] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [breakfastFoods, setBreakfastFoods] = useState([])
  const [lunchFoods, setLunchFoods] = useState([])
  const [dinnerFoods, setDinnerFoods] = useState([])
  const [snackFoods, setSnackFoods] = useState([])
  const [calArray, setCalArray] = useState([])
  const [cals, setCals] = useState(0)

  useEffect(() => {
    const setFoods = currentUser ? setCurrentFoods(currentUser.foods) : null
    const settingCalArray = currentUser && calArray.length !== currentFoods.length ? setCalArray(currentFoods.map(food => food.calories)) : null
    const settingCals = currentUser ? setCals(calArray.reduce((a, b) => a + b, 0)) : null
    const setCategories = currentUser ? setCurrentCategories(currentUser.categories) : null
    const breakfast = currentCategories ? setBreakfastFoods(currentCategories.filter(category => category.meal === "Breakfast")) : null
    const lunch = currentCategories ? setLunchFoods(currentCategories.filter(category => category.meal === "Lunch")) : null
    const dinner = currentCategories ? setDinnerFoods(currentCategories.filter(category => category.meal === "Dinner")) : null
    const snack = currentCategories ? setSnackFoods(currentCategories.filter(category => category.meal === "Snack")) : null
  },[currentUser, currentCategories, calArray])

  // categories are coming from current user - need to get the food into the categories in current user
  
  function addFoodBreakfast() {
    navigate('/foodlist')
    setMeal("Breakfast")
  }

  function addFoodLunch() {
    navigate('/foodlist')
    setMeal("Lunch")
  }

  function addFoodDinner() {
    navigate('/foodlist')
    setMeal("Dinner")
  }

  function addFoodSnack() {
    navigate('/foodlist')
    setMeal("Snack")
  }

  const breakfastMap = breakfastFoods ? breakfastFoods.map(category => {
    return <MealMap key={category.id} category={category} currentFoods={currentFoods}/>
  }) : null


  const lunchMap = lunchFoods ? lunchFoods.map(food => {
    return <MealMap key={food.id} food={food} currentFoods={currentFoods}/>
  }) : null

  const dinnerMap = dinnerFoods ? dinnerFoods.map(food => {
    return <MealMap key={food.id} food={food} currentFoods={currentFoods}/>
  }) : null

  const snackMap = snackFoods ? snackFoods.map(food => {
    return <MealMap key={food.id} food={food} currentFoods={currentFoods}/>
  }) : null


  return (
    <div>
      <br/>
      <h2 className="calCount">Calories: {cals}</h2>
      <br/>
      <br/>
      <br/>
      <br/>
        <h2>Breakfast</h2>
        <button className="addfood" onClick={addFoodBreakfast}>Add Food</button>
        <br/>
        <br/>
        {breakfastMap}
        <br/>
        <br/>
        <h2>Lunch</h2>
        <button className="addfood" onClick={addFoodLunch}>Add Food</button>
        <br/>
        <br/>
        {lunchMap}
        <br/>
        <br/>
        <h2>Dinner</h2>
        <button className="addfood" onClick={addFoodDinner}>Add Food</button>
        <br/>
        <br/>
        {dinnerMap}
        <br/>
        <br/>
        <h2>Snacks</h2>
        <button className="addfood" onClick={addFoodSnack}>Add Food</button>
        <br/>
        <br/>
        {snackMap}
    </div>
  );
}

export default Today;