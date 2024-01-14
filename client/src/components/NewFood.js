import React, { useState } from "react";

function NewFood({ foods, setFoods }) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    calories: '',
    fats: '',
    sugars: '',
    added_sugars: '',
    protein: ''
  })
  const {name, brand, calories, fats, sugars, added_sugars, protein} = formData

  function handleChange(e) {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
  }

  function onSubmit(e) {
    e.preventDefault()
    const food = {
      name,
      brand,
      calories,
      fats,
      sugars,
      added_sugars,
      protein
    }
    fetch('/foods', {
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(food)
    })
    .then(res => {
      if(res.ok) {
        res.json().then(food => {
          setFoods([...foods, food])
        })
      }
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='Food' name="name" value={name} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Brand' name="brand" value={brand} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Calories' name="calories" value={calories} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Fats' name="fats" value={fats} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Sugars' name="sugars" value={sugars} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Added Sugars' name="added_sugars" value={added_sugars} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Protein' name="protein" value={protein} className="input" onChange={handleChange}/>
          <br/>
          <br/>
        <input type="submit" className="submit" value="Add Food!" />
      </form>
    </div>
  );
}

export default NewFood;