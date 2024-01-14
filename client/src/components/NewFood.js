import React, { useState } from "react";

function NewFood({ }) {
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

  return (
    <div>
      <form>
        <input type="text" placeholder='Food' name="name" value={name} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Brand' name="brand" value={brand} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Calories' name="calories" value={calories} className="input" onChange={handleChange}/>
          <br/>
        <input type="text" placeholder='Fats' name="fats" value={fats} className="input" onChange={handleChange}/>
          <br/>
      </form>
    </div>
  );
}

export default NewFood;