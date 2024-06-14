import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { useCurrentUser } from './components/context/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import Food from './components/Food';
import NewFood from './components/NewFood';
import Today from './components/Today';
import FoodList from './components/FoodList';
import PreviousDays from './components/PreviousDays'
import Recipes from './components/Recipes';
import Ingredients from './components/Ingredients';
import RecipeShow from './components/RecipeShow';

function App() {
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const [recipes, setRecipes] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [meal, setMeal] = useState("")

  useEffect(() => {
    setErrors([])
    fetchCurrentUser()
    getUsers()
    getFoods()
    getCategories()
    getRecipes()
  },[])

  function getUsers() {
    fetch("/users")
    .then((res) => {
      if(res.ok){
        res.json().then(res => {
          setUsers(res)
          setIsLoading(false)})
      } else {
        res.json().then(json => setErrors([...errors, json.error]))
      }
    })
  }

  function getFoods() {
    fetch("/foods")
    .then((res) => {
      if(res.ok){
        res.json().then(setFoods)
      } else {
        res.json().then(json => setErrors([...errors, json.error]))
      }
    })
  }

  function getCategories() {
    fetch("/categories")
    .then((res) => {
      if(res.ok){
        res.json().then(setCategories)
      } else {
        res.json().then(json => setErrors([...errors, json.error]))
      }
    })
  }

  function getRecipes() {
    fetch("/recipes")
    .then(res => {
      if (res.ok) {
        res.json().then(setRecipes)
      } else {
        res.json().then(json => setErrors([...errors, json.error]))
      }
    })
  }

  function getIngredients() {
    fetch("/ingredients")
    .then(res => {
      if (res.ok) {
        res.json().then(setIngredients)
      } else {
        res.json().then(json => setErrors([...errors, json.error]))
      }
    })
  }

  return (
    <div className="App">
      <Router>
        <Header isLoading={isLoading}/>
        <Routes>
          <Route exact path='/login' element={<Login getUsers={getUsers} getFoods={getFoods} getRecipes={getRecipes} getIngredients={getIngredients} getCategories={getCategories} setIsLoading={setIsLoading}/>}/>
          <Route exact path='/signup' element={<Signup getUsers={getUsers} getFoods={getFoods} getRecipes={getRecipes} getIngredients={getIngredients} getCategories={getCategories} users={users} setUsers={setUsers} setIsLoading={setIsLoading}/>}/>
          <Route exact path='/' element={<Welcome errors={errors} isLoading={isLoading}/>}/>
          <Route exact path='/food' element={<Food foods={foods}/>}/>
          <Route exact path='/newfood' element={<NewFood foods={foods} setFoods={setFoods}/>}/>
          <Route exact path='/today' element={<Today setMeal={setMeal} categories={categories}/>}/>
          <Route exact path='/previousdays' element={<PreviousDays categories={categories}/>}/>
          <Route exact path='/foodlist' element={<FoodList foods={foods} meal={meal} categories={categories} setCategories={setCategories}/>}/>
          <Route exact path='/recipes/*' element={<Recipes recipes={recipes}/>}/>
          <Route exact path="/recipes/:id" element={<RecipeShow/>} />
          <Route exact path='/ingredients/*' element={<Ingredients ingredients={ingredients}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
