import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MealIngredientsList = (mealIngredients) => {

  
  let ingredientsList = mealIngredients.mealIngredients.map ((ing) => {
  return <ListGroup.Item key={ing.id}>
    {ing.ingredient.portion_quantity * ing.quantity} {ing.ingredient.portion_unit} {ing.ingredient.name}
  </ListGroup.Item>
  })
  return (
    <ListGroup variant="flush">
      {ingredientsList}
    </ListGroup>
  )
}

export default  MealIngredientsList;