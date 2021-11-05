import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const MealExchanges = (mealIngredients) => {

  const exchanges = {protein: 0, fat: 0, fruit: 0, starch: 0, vegetable: 0} 
  
  mealIngredients.mealIngredients.forEach ((ingredient) => { 
    if (ingredient.ingredient.macro === 'protein') {
      exchanges.protein += ingredient.quantity
    }else if(ingredient.ingredient.macro === 'fat') {
      exchanges.fat += ingredient.quantity
    }else if(ingredient.ingredient.macro === 'fruit') {
      exchanges.fruit += ingredient.quantity
    }else if(ingredient.ingredient.macro === 'starch') {
      exchanges.starch += ingredient.quantity
    }else if(ingredient.ingredient.macro === 'vegetable') {
      exchanges.vegetable += ingredient.quantity
    }
  })
  
  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Protien: {exchanges.protein}</ListGroup.Item>
      <ListGroup.Item>Fat: {exchanges.fat}</ListGroup.Item>
      <ListGroup.Item>Total Carbs: {exchanges.fruit + exchanges.starch}</ListGroup.Item>
      <ListGroup.Item>Starch: {exchanges.starch}</ListGroup.Item>
      <ListGroup.Item>Fruit: {exchanges.fruit}</ListGroup.Item>
      <ListGroup.Item>Vegetables: {exchanges.vegetable}</ListGroup.Item>
    </ListGroup>
  )
}

export default MealExchanges;