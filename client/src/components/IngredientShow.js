import React from "react";
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function IngredientShow( { ingredients, ingredient } ) {
    //will want to be able to edit ingredient serving size
    const { id } = useParams()

  return (
    <div>
      
    </div>
  );
}

export default IngredientShow;