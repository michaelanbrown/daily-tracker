import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients } ) {
    //will want to be able to edit ingredient serving size
    const { id } = useParams()
    const [errors, setErrors] = useState([])

    useEffect(() => {
      fetch()
    }, [])

  return (
    <div>
      
    </div>
  );
}

export default IngredientShow;