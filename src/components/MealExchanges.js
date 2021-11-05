import React from 'react';
import { ListGroup } from 'react-bootstrap';

const MealExchanges = ({ exchanges }) => {

  return (
    <ListGroup variant="flush">
      <ListGroup.Item>Protein: {exchanges.protein}</ListGroup.Item>
      <ListGroup.Item>Fat: {exchanges.fat}</ListGroup.Item>
      <ListGroup.Item>Total Carbs: {exchanges.fruit + exchanges.starch}</ListGroup.Item>
      <ListGroup.Item>Starch: {exchanges.starch}</ListGroup.Item>
      <ListGroup.Item>Fruit: {exchanges.fruit}</ListGroup.Item>
      <ListGroup.Item>Vegetables: {exchanges.vegetable}</ListGroup.Item>
    </ListGroup>
  )
}

export default MealExchanges;