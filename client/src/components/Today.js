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
    const settingCalArray = currentUser && calArray.length !== currentCategories.length ? setCalArray(currentCategories.map(cat => cat.servings * currentFoods.filter(food => food.id === cat.food_id)[0].calories)) : null
    const settingCals = currentUser ? setCals(calArray.reduce((a, b) => a + b, 0)) : null
    const setCategories = currentUser ? setCurrentCategories(currentUser.categories) : null
    const breakfast = currentCategories ? setBreakfastFoods(currentCategories.filter(category => category.meal === "Breakfast")) : null
    const lunch = currentCategories ? setLunchFoods(currentCategories.filter(category => category.meal === "Lunch")) : null
    const dinner = currentCategories ? setDinnerFoods(currentCategories.filter(category => category.meal === "Dinner")) : null
    const snack = currentCategories ? setSnackFoods(currentCategories.filter(category => category.meal === "Snack")) : null
  },[currentUser, currentCategories, calArray])
  
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
    return <MealMap key={category.id} currentCategories={currentCategories} setCurrentCategories={setCurrentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null


  const lunchMap = lunchFoods ? lunchFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const dinnerMap = dinnerFoods ? dinnerFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const snackMap = snackFoods ? snackFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
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