import React from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Button } from 'react-bootstrap';

const AddIngredient = ({ ingredients, mealIngredient, updateIngredient, removeIngredient }) => {


  const macros = [...new Set(ingredients.map(ingredient => ingredient.macro))]
  
  let ingredientList = []
  if(mealIngredient.macro){
    ingredientList = ingredients.filter(ingredient => ingredient.macro === mealIngredient.macro)
  }else if(mealIngredient.ingredient) {
    ingredientList = ingredients.filter(ingredient => ingredient.macro === mealIngredient.ingredient.macro)
  }
  

  const selectMacro = (e) => {
    updateIngredient({...mealIngredient, macro: e.target.value})
  }

  const handleIngredientSelect = (e) => {
    const ingId = parseInt(e.target.value)
    updateIngredient({...mealIngredient, ingredient_id: ingId})
  }

  const increaseQuantity = () => {
    
    if(mealIngredient.macro || mealIngredient.ingredient.macro) {
      const updatedQuantity = mealIngredient.quantity + 1
      updateIngredient({...mealIngredient, quantity: updatedQuantity})
    }
  }

  const decreaseQuantity = () => {
    if(mealIngredient.macro || mealIngredient.ingredient.macro) {
      const updatedQuantity = mealIngredient.quantity > 0 ? mealIngredient.quantity -1 : mealIngredient.quantity
      updateIngredient({...mealIngredient, quantity: updatedQuantity})
    }
  }

  const displayQuantity = `  ${mealIngredient.quantity}  `
  
  return (
    <Row>
      <Col>
        <MacrosDropdown 
          macros={macros} 
          macro={mealIngredient.ingredient ? mealIngredient.ingredient.macro : mealIngredient.macro}
          selectMacro={selectMacro}
        />
      </Col>
      <Col>
        <IngredientsDropdown 
          ingredient={mealIngredient.ingredient}
          handleIngredientSelect={handleIngredientSelect} 
          ingredients={ingredientList.length > 0 ? ingredientList : ingredients} 
        />
      </Col>
      <Col>
        <Button onClick={decreaseQuantity} variant='outline-dark'>-</Button>
          {displayQuantity}
        <Button onClick={increaseQuantity} variant='outline-dark'>+</Button>
      </Col>
      <Col xs={1}>
        <Button 
          onClick={e => removeIngredient(mealIngredient)} 
          variant='outline-dark'
        >x</Button>
      </Col>
    </Row>
  )
}

export default AddIngredient;