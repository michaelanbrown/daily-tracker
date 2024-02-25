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

function App() {
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser, fetchCurrentUser } = useCurrentUser()
  const [meal, setMeal] = useState("")

  useEffect(() => {
    fetchCurrentUser()
    getUsers()
    getFoods()
    getCategories()
  },[])

  function getUsers() {
    fetch("/users")
    .then((res) => {
      if(res.ok){
        res.json().then(res => {
          setUsers(res)
          setIsLoading(false)})
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  function getFoods() {
    fetch("/foods")
    .then((res) => {
      if(res.ok){
        res.json().then(setFoods)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  function getCategories() {
    fetch("/categories")
    .then((res) => {
      if(res.ok){
        res.json().then(setCategories)
      } else {
        res.json().then(json => setErrors([json.error]))
      }
    })
  }

  return (
    <div className="App">
      <Router>
        <Header isLoading={isLoading}/>
        <Routes>
          <Route exact path='/login' element={<Login getUsers={getUsers} getFoods={getFoods} getCategories={getCategories}/>}/>
          <Route exact path='/signup' element={<Signup getUsers={getUsers} getFoods={getFoods} getCategories={getCategories} users={users} setUsers={setUsers}/>}/>
          <Route exact path='/' element={<Welcome/>}/>
          <Route exact path='/food' element={<Food foods={foods}/>}/>
          <Route exact path='/newfood' element={<NewFood foods={foods} setFoods={setFoods}/>}/>
          <Route exact path='/today' element={<Today setMeal={setMeal}/>}/>
          <Route exact path='/foodlist' element={<FoodList foods={foods} meal={meal} categories={categories} setCategories={setCategories}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
