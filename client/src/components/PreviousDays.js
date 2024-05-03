import React, { useState, useEffect } from "react";
import { useCurrentUser } from "./context/User";
import MealMap from "./MealMap";

function PreviousDays({ categories }) {
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [currentFoods, setCurrentFoods] = useState([])
  const [currentCategories, setCurrentCategories] = useState([])
  const [breakfastFoods, setBreakfastFoods] = useState([])
  const [lunchFoods, setLunchFoods] = useState([])
  const [dinnerFoods, setDinnerFoods] = useState([])
  const [snackFoods, setSnackFoods] = useState([])
  const [calArray, setCalArray] = useState([])
  const [cals, setCals] = useState(0)
  const [currentDate, setCurrentDate] = useState('');
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //edit previous days to select the date and it will populate that date's meals

  useEffect(() => {
    const settingCals = currentUser ? setCals(calArray.reduce((a, b) => a + b, 0)) : null
    const setCategories = currentUser ? setCurrentCategories(categories.filter(category => category.user_id === currentUser.id && category.created_at === currentDate)) : null
    const breakfast = currentCategories ? setBreakfastFoods(currentCategories.filter(category => category.meal === "Breakfast")) : null
    const lunch = currentCategories ? setLunchFoods(currentCategories.filter(category => category.meal === "Lunch")) : null
    const dinner = currentCategories ? setDinnerFoods(currentCategories.filter(category => category.meal === "Dinner")) : null
    const snack = currentCategories ? setSnackFoods(currentCategories.filter(category => category.meal === "Snack")) : null
    const settingCalArray = currentUser && calArray.length !== currentCategories.length ? setCalArray(currentCategories.map(cat => cat.servings * currentFoods.filter(food => food.id === cat.food_id)[0].calories)) : null
    const setFoods = currentUser ? setCurrentFoods(currentUser.foods) : null
  },[currentUser, currentFoods, calArray, currentCategories.length !== categories.length])

  const breakfastMap = breakfastFoods ? breakfastFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} setCurrentCategories={setCurrentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const lunchMap = lunchFoods ? lunchFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} setCurrentCategories={setCurrentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const dinnerMap = dinnerFoods ? dinnerFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} setCurrentCategories={setCurrentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const snackMap = snackFoods ? snackFoods.map(category => {
    return <MealMap key={category.id} currentCategories={currentCategories} setCurrentCategories={setCurrentCategories} category={category} food={currentFoods.filter(food => food.id === category.food_id)[0]}/>
  }) : null

  const monthOptions = monthsArray.map(month => {
    return (<option value={month} key={month}>{month}</option>)
})

  function handleChange(e) {
    setCurrentDate(e.target.value);
  }

  function handleMonthChange(e) {

}

  //change this to look for month, day, and year

  return (
    <div>
      <br/>
      <h2 className="calCount">
      <input type="text" placeholder='Current Date' name="currentDate" value={currentDate} className="currentDate" onChange={handleChange}/>
      <form>
        Month: <select id="month" onChange={}>
              {monthOptions}
              </select>
      </form>
          <br/>
        <br/>
        <br/>
        <br/>
        Calories: {cals}
      </h2>
      <br/>
        <h2>Breakfast</h2>
        <br/>
        {breakfastMap}
        <br/>
        <br/>
        <h2>Lunch</h2>
        <br/>
        {lunchMap}
        <br/>
        <br/>
        <h2>Dinner</h2>
        <br/>
        {dinnerMap}
        <br/>
        <br/>
        <h2>Snacks</h2>
        <br/>
        {snackMap}
    </div>
  );
}

export default PreviousDays;