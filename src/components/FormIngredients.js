import React from 'react';
import AddIngredient from './AddIngredient';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const FormIngredients = ({ ingredients, setFormData, formData }) => {

  const [mealIngredients, setMealIngredients] = useState([])
  const [listId, setListId] = useState(1)


  let handleAddIngredient = (e) => {
    setMealIngredients([...mealIngredients, {listId: listId, ingredient_id: 0, portion_quantity: 0, macro: ''}])
    setListId(listId + 1)
  }

  const handleUpdateIngredient = (ingredientObj) => {
    const updatedIngredients = mealIngredients.map( (ingredient) => {
      if (ingredient.listId === ingredientObj.listId) {
        return ingredientObj
      }
      return ingredient
    })
    setMealIngredients(updatedIngredients)
    setFormData({...formData, ingredients: updatedIngredients})
  }

  const handleRemoveIngredient = (ingredientObj) => {
    const updatedIngredients = mealIngredients.filter((ingredient) => ingredient.listId !== ingredientObj.listId)
    setMealIngredients(updatedIngredients)
    setFormData({...formData, ingredients: updatedIngredients})
  }

  let renderIngredients = mealIngredients.map ( ingredient => <AddIngredient key={ingredient.listId} ingredients={ingredients} listId={listId - 1} handleUpdateIngredient={handleUpdateIngredient} handleRemoveIngredient={handleRemoveIngredient} />)

    return (
    <Container>
      <Row>
        <Col>Macros</Col>
        <Col>Ingredients</Col>
        <Col>Quantity</Col>
        <Col xs={1}></Col>
      </Row>
      {renderIngredients}
      <Row>
        <Button variant='warning' onClick={handleAddIngredient}>Add Ingredient</Button>
      </Row>
    </Container>
  )
}

export default FormIngredients;