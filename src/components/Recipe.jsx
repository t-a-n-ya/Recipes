import React from 'react';
import Navbar from './Navbar';
import pizza from '../img/pizza.jpg'


function Recipe() {
  return (
    <>
      <Navbar />
      <div>
      <div className='a-recipe'>
        <div className='b'>
          <div className='c'>
            <img src={pizza} width='450px' height='600px'/>
            <div className='recipe-info'>
              <h2>Recipe name</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                quis sed do eiusmod tempor incididunt ut labore et nostrud ut aliquip ex ea commodo consequate</p>
              <div style={{display:"flex", justifyContent:"space-between",flexDirection:"column"}}>
                <strong>prep time : 5 min</strong>
                <strong>cooking time : 30 min</strong>
                <strong>serving : 4</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='container'>
        <h1>Ingredients</h1>
        <p>hykhhhlhlu</p>
        <p>hykhhhlhlu</p>
        <p>hykhhhlhlu</p>
        <p>hykhhhlhlu</p>
        <p>hykhhhlhlu</p>
        <h1>Directions</h1>
        <strong>step 1</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <strong>step 2</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <strong>step 3</strong>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </div>
      </div>
    </>
  )
}

export default Recipe