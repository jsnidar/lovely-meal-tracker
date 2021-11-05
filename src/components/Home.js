import React from 'react';
import { Container, Row, Col, CardGroup, Stack } from 'react-bootstrap';
import MealCard from './MealCard';
import MealsSummary from './MealsSummary';
import AddMealForm from './AddMealForm';

const Home = ({ meals, getExchanges, macros }) => {

  const renderMeals = meals.map((meal) => <MealCard key={meal.id} meal={meal} getExchanges={getExchanges} />)
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Row></Row>
          <Row>
            <h1>Daily Exchanges Tracker</h1>
          </Row>
          <Row>
            <Col>
              <MealsSummary macros={macros}/>
            </Col>
            <Col>
              <AddMealForm />
            </Col>
          </Row>
          <Row>
            <h2>Meals</h2>
          </Row>
          <Row>
            <CardGroup>
              {renderMeals}
            </CardGroup>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;