import { useState } from 'react';
import './Global/style.css'
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipe from './components/Recipe';
import Cocktail from './components/Cocktail';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Recipe' element={<Recipe />} />
        <Route exact path='/Cocktail' element={<Cocktail />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
