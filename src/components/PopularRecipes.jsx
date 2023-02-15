import React from 'react'
import bg2 from '../img/food1.jpg'

function PopularRecipes() {
    return (
        <>

            <div className="col-sm-3">
                <div className="card-body">
                    <img src={bg2} className="card-img-top" alt="..." />
                    <h5 className="card-title a" >Recipe 1</h5>
                    <p className="card-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>


        </>
    )
}

export default PopularRecipes