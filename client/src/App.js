import './App.css';
import { useEffect, useState } from 'react';
// import { useContext } from 'react';
// import { UserContext } from './components/context/User';
import Header from './components/Header';
import { UserProvider } from './components/context/User';

function App() {
  // const { currentUser, setCurrentUser } = useContext(UserContext);
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])
  const [errors, setErrors] = useState([])

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
      <UserProvider>
        <Header/>
      </UserProvider>
    </div>
  );
}

export default App;
