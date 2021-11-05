import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';



function App() {

  const [meals, setMeals] = useState([])
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/meals')
    .then(r => r.json())
    .then(meals => setMeals(meals))

    fetch('http://localhost:9292/ingredients')
    .then(r => r.json())
    .then(ingredients => setIngredients(ingredients))
  }, [])

  console.log(ingredients)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home meals={meals} />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
