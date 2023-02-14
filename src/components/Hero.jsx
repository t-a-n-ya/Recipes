import React from 'react'
import bg from '../img/food.png'

function Hero() {
    return (
        <>
            <div className="bg">
                <div className="inner-bg">
                    <div class="img">
                    <img src={bg} alt="hero"/>
                    <h5 align="center">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                </div>

            </div>
            <div class="container recipe-container">
                <div class="row">
                    <div class="col-sm-3">
                        <a href="products.html" class="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div class="caption">
                                <h2>Veg</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-3">
                        <a href="products.html" class="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div class="caption">
                                <h2>Non-Veg</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-3">
                        <a href="products.html" class="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div class="caption">
                                <h2>Cakes</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </a>
                    </div>
                    <div class="col-sm-3">
                        <a href="products.html" class="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div class="caption">
                                <h2>Sweets</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero