import React from 'react';
import { Container, Stack } from 'react-bootstrap';


const MealsSummary = ({ macros }) => {

  return (
    <Container>
      <Stack gap={3}>
        <h2>Daily Exchanges</h2>
        <ul>
          <li>Protein: {macros.protein}</li>
          <li>Fat: {macros.fat}</li>
          <li>Total Carbs: {macros.starch + macros.fruit}</li>
          <ul>
            <li>Starch: {macros.starch}</li>
            <li>Fruit: {macros.fruit}</li>
          </ul>
          <li>Vegetables: {macros.vegetable}</li>
        </ul>
      </Stack>
    </Container>
  )
}

export default MealsSummary;