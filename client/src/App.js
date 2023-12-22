import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import { useCurrentUser } from './components/context/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './components/Login';

function App() {
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState([])
  const { currentUser, fetchCurrentUser } = useCurrentUser()

  useEffect(() => {
    getUsers()
    getFoods()
    getCategories()
  },[])

  function getUsers() {
    fetch("/users")
    .then((res) => {
      if(res.ok){
        res.json().then(setUsers)
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
        <Header/>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
