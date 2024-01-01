import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { useCurrentUser } from './components/context/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { currentUser, fetchCurrentUser } = useCurrentUser()

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
          <Route exact path='/login' element={<Login getUsers={getUsers}/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
