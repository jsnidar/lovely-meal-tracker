import React from 'react';
import AddIngredient from './AddIngredient';
import { Button, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

const FormIngredients = ({ ingredients }) => {

  const [ingredientQuantity, setIngredientQuantity] = useState([])


  let handleAddIngredient = (e) => {
    setIngredientQuantity([...ingredientQuantity, ingredientQuantity.length])
  }

  let renderIngredients = ingredientQuantity.map ( ingredient => <AddIngredient key={ingredient} ingredients = {ingredients} />)

    return (
    <Container>
      {renderIngredients}
      <Row>
        <Button variant='warning' onClick={handleAddIngredient}>Add Ingredient</Button>
      </Row>
      
    </Container>
  )
}

export default FormIngredients;