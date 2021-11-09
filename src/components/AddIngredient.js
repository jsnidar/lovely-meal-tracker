import React from 'react';
import { useState } from 'react';
import IngredientsDropdown from './IngredientsDropdown';
import MacrosDropdown from './MacrosDropdown';
import { Row, Col, Form, Button } from 'react-bootstrap';

const AddIngredient = ({ ingredients, listId, handleUpdateIngredient, handleRemoveIngredient }) => {
  const [macro, setMacro] = useState('')
  const [ingredient, setIngredient] = useState({listId: listId})

  const ingredientList = ingredients.filter( ingredient => ingredient.macro === macro)
  
  const handleIngredientSelect = (e) => {
    setIngredient({...ingredient, ingredient_id: e.target.value})
    handleUpdateIngredient({...ingredient, ingredient_id: e.target.value})
  }

  const handleQuantityChange = (e) => {
    setIngredient({...ingredient, portion_quantity: e.target.value})
    handleUpdateIngredient({...ingredient, portion_quantity: e.target.value})
  }
  
  return (
    <Row>
      <Col>
        <MacrosDropdown setMacro={setMacro} ingredients={ingredients} />
      </Col>
      <Col>
        <IngredientsDropdown handleIngredientSelect={handleIngredientSelect} ingredients={ingredientList} />
      </Col>
      <Col>
        <Form.Group className="mb-3" controlId="formIngredientQuantity">
          <Form.Control type="number" onChange={handleQuantityChange} placeholder="Enter quantity" />
        </Form.Group>
      </Col>
      <Col xs={1}>
        <Button onClick={e => handleRemoveIngredient(ingredient)}variant='outline-dark'>x</Button>
      </Col>
    </Row>
  )
}

export default AddIngredient;