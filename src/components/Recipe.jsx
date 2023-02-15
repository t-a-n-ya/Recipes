import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import pizza from '../img/pizza.jpg'


function Recipe() {

  const [recipe, setrecipe] = useState([])
  const [ingredients, setingredients] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b54b5f04afmsh0b1190d16ea1fb7p144f72jsnabda31af8611',
      'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
    }
  };
  useEffect(() => {
    fetch('https://random-recipes.p.rapidapi.com/ai-quotes/1', options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        let res = response.map((item) => {
          setrecipe(item)
          setingredients(item.ingredients)
        })
      })
      .catch(err => console.error(err));
  }, [])


  return (
    <>
      <Navbar />
      <div>
        <div className='a-recipe'>
          <div className='b'>
            <div className='c'>
            <h2>{recipe.title}</h2>
              <img src={recipe.image} className='recipe-img' alt='recipe' />
            </div>
          </div>
        </div>
        <div className='container'>
          <h1>Ingredients</h1>
          {ingredients &&
            ingredients.map((ingredient) => {
              return <p>{ingredient}</p>
            })
          }
          <h1>Directions</h1>
          {recipe && recipe.instructions &&
            recipe.instructions.map((a) => {
              return <p>--{" " + a.text}</p>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Recipe