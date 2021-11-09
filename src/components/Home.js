import React from 'react';
import { Container, Row, Col, CardGroup, Stack } from 'react-bootstrap';
import MealCard from './MealCard';
import MealsSummary from './MealsSummary';
import AddMealForm from './AddMealForm';

const Home = ({ meals, getExchanges, macros, ingredients }) => {

  const renderMeals = meals.map((meal) => <MealCard key={meal.id} meal={meal} getExchanges={getExchanges} />)
  return (
    <div>
      <Container>
        <Stack gap={3}>
          <Row></Row>
          <Row>
            <h1>Daily Exchange Tracker</h1>
          </Row>
          <Row>
            <Col>
              <MealsSummary macros={macros}/>
            </Col>
            <Col>
              <Container>
                <Stack gap={3}>
                  <h2>Daily Exchanges Goal</h2>
                  <ul>
                    <li>Protein: 12</li>
                    <li>Fat: 6</li>
                    <li>Total Carbs: </li>
                    <ul>
                      <li>Starch: 6</li>
                      <li>Fruit: 2</li>
                    </ul>
                    <li>Vegetables: 6</li>
                  </ul>
                </Stack>
              </Container>
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
          <Row>
            <AddMealForm ingredients={ingredients} />
          </Row>
        </Stack>
      </Container>
    </div>
  );
}

export default Home;