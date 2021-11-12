import React, { useEffect } from 'react';
import { useState } from 'react';
import AddIngredient from './AddIngredient';
import { Button, Container, Col, Row } from 'react-bootstrap';

const FormIngredients = ({ ingredients, setFormData, formData }) => {

  const [mealIngredients, setMealIngredients] = useState([])
  const [listId, setListId] = useState(1)

  useEffect (() => {
      let mimickId = 1
      const fetchedMealIngredients = []
      formData.meal_ingredients.forEach( meal_ingredient => {
        fetchedMealIngredients.push({
            listId: mimickId, 
            ingredient_id: meal_ingredient.ingredient_id,
            quantity: meal_ingredient.quantity, 
            macro: meal_ingredient.macro 
          })
        mimickId++
        setMealIngredients(fetchedMealIngredients)
        setListId(mimickId)
      })

      
  }, [formData.meal_ingredients])

  
  const handleAddIngredient = (e) => {
    setMealIngredients(
      [...mealIngredients, {
        listId: listId, 
        ingredient_id: 0, 
        quantity: 0, 
        macro: ''}])
    setListId(listId + 1)
  }

  const handleUpdateIngredient = (ingredientObj) => {
    const updatedIngredients = mealIngredients.map( (ingredient) => {
      if (ingredient.listId === ingredientObj.listId) {
        return ingredientObj
      }
      return ingredient
    })
    setFormData({...formData, meal_ingredients: updatedIngredients})
  }

  const handleRemoveIngredient = (ingredientObj) => {
    const updatedIngredients = mealIngredients.filter((ingredient) => ingredient.listId !== ingredientObj.listId)
    setMealIngredients(updatedIngredients)
    setFormData({...formData, meal_ingredients: updatedIngredients})
  }

  let renderIngredients = mealIngredients.map ( mealIngredient => {
    
    return <AddIngredient key={mealIngredient.listId} mealIngredient={mealIngredient} ingredients={ingredients} listId={listId - 1} handleUpdateIngredient={handleUpdateIngredient} handleRemoveIngredient={handleRemoveIngredient} />
  })

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