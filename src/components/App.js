import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';



function App() {

  const [meals, setMeals] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [macros, setMacros] = useState({})

  useEffect(() => {

    const getMacroSummary = (meals) => {
      const macrosArray = []
      meals.forEach( meal => {
        macrosArray.push(getExchanges(meal))
      })
      let macrosObj = {protein: 0, fat: 0, fruit: 0, starch: 0, vegetable: 0}
      for(const macro in macrosObj) {
        macrosObj[macro] = sumOfOneMacro(macrosArray, macro)
      }
      return macrosObj;
    }

    fetch('http://localhost:9292/meals')
    .then(r => r.json())
    .then(meals => {
      setMeals(meals)
      setMacros(getMacroSummary(meals))
    })

    fetch('http://localhost:9292/ingredients')
    .then(r => r.json())
    .then(ingredients => setIngredients(ingredients))
  }, [])

  const getExchanges = (meal) => {
    let exchanges = {protein: 0, fat: 0, fruit: 0, starch: 0, vegetable: 0}
  
    meal.meal_ingredients.forEach ((ingredient) => { 
      if (ingredient.ingredient.macro === 'protein') {
        exchanges.protein += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'fat') {
        exchanges.fat += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'fruit') {
        exchanges.fruit += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'starch') {
        exchanges.starch += ingredient.quantity
      }else if(ingredient.ingredient.macro === 'vegetable') {
        exchanges.vegetable += ingredient.quantity
      }
    })
    return exchanges;
  }

  const sumOfOneMacro = (arrayOfObjects, key) => {
    let initialValue = 0
    let sum = arrayOfObjects.reduce(
      (previousValue, currentValue) => previousValue + currentValue[key], initialValue)
    return sum
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={
          <Home 
            meals={meals} 
            getExchanges={getExchanges} 
            macros={macros}
            ingredients={ingredients}
          />
        }>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
