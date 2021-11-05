import React from 'react';
import { Container, Row, CardGroup } from 'react-bootstrap';
import MealCard from './MealCard';

const Home = ({ meals }) => {

  const renderMeals = meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
  return (
    <div>
      <Container>
        <Row>
          <h1>Meal Tracker</h1>
        </Row>
        <Row>
          <CardGroup>
            {renderMeals}
          </CardGroup>
          
        </Row>
      </Container>
    </div>
  );
}

export default Home;