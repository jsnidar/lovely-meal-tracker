import React from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Button } from 'react-bootstrap';

const AddIngredient = ({ ingredients, mealIngredient, handleUpdateIngredient, handleRemoveIngredient }) => {
  const macros = [...new Set(ingredients.map(ingredient => ingredient.macro))]
  
  const ingredientList = ingredients.filter(ingredient => ingredient.macro === mealIngredient.macro)

  const handleMacroSelect = (e) => {
    handleUpdateIngredient({...mealIngredient, macro: e.target.value})
  }

  const handleIngredientSelect = (e) => {
    const ingId = parseInt(e.target.value)
    handleUpdateIngredient({...mealIngredient, ingredient_id: ingId})
  }

  const increaseQuantity = () => {
    if(mealIngredient.macro) {
      const updatedQuantity = mealIngredient.quantity + 1
      handleUpdateIngredient({...mealIngredient, quantity: updatedQuantity})
    }
  }

  const decreaseQuantity = () => {
    if(mealIngredient.macro) {
      const updatedQuantity = mealIngredient.quantity > 0 ? mealIngredient.quantity -1 : mealIngredient.quantity
      handleUpdateIngredient({...mealIngredient, quantity: updatedQuantity})
    }
  }

  const displayQuantity = `  ${mealIngredient.quantity}  `
  
  return (
    <Row>
      <Col>
        <MacrosDropdown 
          macros={macros} 
          macro={mealIngredient.macro}
          handleMacroSelect={handleMacroSelect}
        />
      </Col>
      <Col>
        <IngredientsDropdown 
          ingredientId={mealIngredient.ingredient_id} 
          handleIngredientSelect={handleIngredientSelect} 
          ingredients={ingredientList} 
        />
      </Col>
      <Col>
        <Button onClick={decreaseQuantity} variant='outline-dark'>-</Button>
          {displayQuantity}
        <Button onClick={increaseQuantity} variant='outline-dark'>+</Button>
      </Col>
      <Col xs={1}>
        <Button 
          onClick={e => handleRemoveIngredient(mealIngredient)} 
          variant='outline-dark'
        >x</Button>
      </Col>
    </Row>
  )
}

export default AddIngredient;