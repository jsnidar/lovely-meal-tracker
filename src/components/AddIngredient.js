import React from 'react';
import { useState } from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Form, Button } from 'react-bootstrap';

const AddIngredient = ({ ingredients, mealIngredient, listId, handleUpdateIngredient, handleRemoveIngredient }) => {
  const [macro, setMacro] = useState(mealIngredient.macro ? mealIngredient.macro : '')
  const [ingredient, setIngredient] = useState(
    mealIngredient.listId ? {
      listId: mealIngredient.listId, 
      ingredient_id: mealIngredient.ingredient_id,
      quantity: mealIngredient.quantity
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

  const handleQuantityChange = (e) => {
    setIngredient({...ingredient, quantity: e.target.value})
    handleUpdateIngredient({...ingredient, quantity: e.target.value})
  }
  
  return (
    <Row>
      <Col>
        <MacrosDropdown macro={macro} setMacro={setMacro} ingredients={ingredients} handleMacroSelect={handleMacroSelect} />
      </Col>
      <Col>
        <IngredientsDropdown ingredientId={ingredient.ingredient_id} handleIngredientSelect={handleIngredientSelect} ingredients={ingredientList} />
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formIngredientQuantity">
          <Form.Control type="number" defaultValue={mealIngredient.quantity ? mealIngredient.quantity : 1} onChange={handleQuantityChange} placeholder="Enter quantity" />
        </Form.Group>
      </Col>
      <Col xs={1}>
        <Button onClick={e => handleRemoveIngredient(ingredient)}variant='outline-dark'>x</Button>
      </Col>
    </Row>
  )
}

export default AddIngredient;