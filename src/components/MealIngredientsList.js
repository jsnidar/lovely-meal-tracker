import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MealIngredientsList = ({ mealIngredients }) => {

  
  let ingredientsList = mealIngredients.map ((ing) => {
  
  const Fraction = require('fractional').Fraction
  const decimalValue = +(ing.ingredient.portion_quantity * ing.quantity).toPrecision(2)
  const quantity = (new Fraction(decimalValue).toString())
  let pluralize = require('pluralize')
  
  console.log(decimalValue)
  let unit = ing.ingredient.portion_unit
  if (unit === 'cup' && decimalValue > 1) {
    unit = pluralize(unit, decimalValue)
  }

  return <ListGroup.Item key={ing.id}>
    {quantity} {unit === 'each' ? "" : unit} {unit === 'each' ? pluralize(ing.ingredient.name, decimalValue): ing.ingredient.name}
  </ListGroup.Item>
  })
  return (
    <ListGroup variant="flush">
      {ingredientsList}
    </ListGroup>
  )
}

export default  MealIngredientsList;