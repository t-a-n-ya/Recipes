import React from 'react'
import bg2 from '../img/food1.jpg'

function PopularRecipes() {
    return (
        <>

            <div class="col-sm-3">
                <div class="card-body">
                    <img src={bg2} class="card-img-top" alt="..." />
                    <h5 class="card-title a" >Recipe 1</h5>
                    <p class="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>


        </>
    )
}

export default PopularRecipes