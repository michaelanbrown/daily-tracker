import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  const [foods, setFoods] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    
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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
