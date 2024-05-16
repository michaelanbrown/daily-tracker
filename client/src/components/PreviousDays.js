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
  const [errors, setErrors] = useState([])
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const [yearsArray, setYearsArray] = useState([])
  const [currentDate, setCurrentDate] = useState({
    month: monthsArray[new Date().getMonth()],
    day: new Date().getDate(),
    year: new Date().getFullYear()
  })

  //edit previous days to select the date and it will populate that date's meals

  function createYearArray(){
    var currentYear = new Date().getFullYear()
    var years = [];
    var startYear = currentYear - 100;
    for(var i=startYear; i<= currentYear; i++){
       years.unshift(startYear++);
    }
    setYearsArray(years);
    }

  useEffect(() => {
    createYearArray()
    const settingCals = currentUser ? setCals(calArray.reduce((a, b) => a + b, 0)) : null
    const setCategories = currentUser && currentCategories.length === 0 ? setCurrentCategories(categories.filter(category => category.user_id === currentUser.id && category.created_at === currentDate)) : null
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

  const dayOptions = daysArray.map(day => {
    return (<option value={day} key={day}>{day}</option>)
  })

  const yearOptions = yearsArray.map(year => {
    return (<option value={year} key={year}>{year}</option>)
  })

  function handleMonthChange(e) {
    setCurrentDate({
      ...currentDate,
      [e.target.id] : document.getElementById('month').value
    })
  }

  function handleDayChange(e) {
    setCurrentDate({
      ...currentDate,
      [e.target.id] : document.getElementById('day').value
    })
  }

  function handleYearChange(e) {
    setCurrentDate({
      ...currentDate,
      [e.target.id] : document.getElementById('year').value
    })
  }

  function onSubmit(e) {
    e.preventDefault()
    const date_value = currentDate['month'] + ' ' + currentDate['day'] + ', ' + currentDate['year']
    fetch(`/date/${date_value}`)
    .then(res => {
      if (res.ok) {
        res.json().then(setCurrentCategories)
      } else {
        res.json().then(json => setErrors(json.errors))
      }
    })
  }

  console.log(currentCategories)

  return (
    <div>
      <br/>
      <h2 className="calCount">
      <form onSubmit={onSubmit}>
        Month: <select id="month" className="select" defaultValue={currentDate['month']} onChange={handleMonthChange}>
              {monthOptions}
              </select>
              &nbsp;
        Day: <select id="day" className="select" defaultValue={currentDate['day']} onChange={handleDayChange}>
              {dayOptions}
              </select>    
              &nbsp;
        Year: <select id="year" className="select" defaultValue={yearsArray[yearsArray.length-1]} onChange={handleYearChange}>
              {yearOptions}
              </select>
              &nbsp;
        <input type='submit' className="select" value='Search'></input>
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