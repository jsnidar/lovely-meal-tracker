import React from 'react';
import { Container, Stack } from 'react-bootstrap';


const MealsSummary = ({ macros }) => {

  return (
    <Container>
      <Stack gap={3}>
        <h2>Daily Exchanges</h2>
        <ul>
          <li>Protien: {macros.protein}</li>
          <li>Fat: {macros.protein}</li>
          <li>Total Carbs: {macros.protein}</li>
          <ul>
            <li>Starch: {macros.protein}</li>
            <li>Fruit: {macros.protein}</li>
          </ul>
          <li>Vegetables: {macros.protein}</li>
        </ul>
      </Stack>
    </Container>
  )
}

export default MealsSummary;