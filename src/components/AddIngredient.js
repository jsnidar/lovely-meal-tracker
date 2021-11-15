import React from 'react';
import { useState } from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Button } from 'react-bootstrap';

const AddIngredient = ({ ingredients, mealIngredient, listId, handleUpdateIngredient, handleRemoveIngredient }) => {
  const [macro, setMacro] = useState(mealIngredient.macro ? mealIngredient.macro : '')
  const [ingredient, setIngredient] = useState(
    mealIngredient.listId ? {
      listId: mealIngredient.listId, 
      ingredient_id: mealIngredient.ingredient_id,
      quantity: mealIngredient.quantity ? mealIngredient.quantity : 1
    } : {listId: listId}
  )

  const ingredientList = ingredients.filter( ingredient => ingredient.macro === macro)
  const handleIngredientSelect = (e) => {
    const ingId = parseInt(e.target.value)
    setIngredient({...ingredient, ingredient_id: ingId})
    handleUpdateIngredient({...ingredient, ingredient_id: ingId})
  }

  const handleMacroSelect = (e) => {
    setMacro(e.target.value)
  }

  const increaseQuantity = () => {
    if(mealIngredient.macro) {
      const updatedQuantity = ingredient.quantity + 1
      setIngredient({...ingredient, quantity: updatedQuantity})
      handleUpdateIngredient({...ingredient, quantity: updatedQuantity})
    }
  }
  
  const decreaseQuantity = () => {
    if(mealIngredient.macro) {
      const updatedQuantity = ingredient.quantity > 0 ? ingredient.quantity -1 : ingredient.quantity
      setIngredient({...ingredient, quantity: updatedQuantity})
      handleUpdateIngredient({...ingredient, quantity: updatedQuantity})
    }
  }

  const displayQuantity = `  ${ingredient.quantity}  `
  
  return (
    <Row>
      <Col>
        <MacrosDropdown macro={macro} setMacro={setMacro} ingredients={ingredients} handleMacroSelect={handleMacroSelect} />
      </Col>
      <Col>
        <IngredientsDropdown ingredientId={ingredient.ingredient_id} handleIngredientSelect={handleIngredientSelect} ingredients={ingredientList} />
      </Col>
      <Col>
        <Button onClick={decreaseQuantity} variant='outline-dark'>-</Button>
          {displayQuantity}
        <Button onClick={increaseQuantity} variant='outline-dark'>+</Button>
      </Col>
      <Col xs={1}>
        <Button onClick={e => handleRemoveIngredient(ingredient)} variant='outline-dark'>x</Button>
      </Col>
    </Row>
  )
}

export default AddIngredient;