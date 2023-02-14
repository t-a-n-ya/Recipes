import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import PopularRecipes from './PopularRecipes'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <div class="container">
                <h2>popular recipes</h2>
                <div class="row">
                    <PopularRecipes />
                    <PopularRecipes />
                    <PopularRecipes />
                    <PopularRecipes />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home