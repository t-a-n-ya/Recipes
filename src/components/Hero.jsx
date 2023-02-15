import React from 'react'
import bg from '../img/food.png'

function Hero() {
    return (
        <>
            <div className="bg">
                <div className="inner-bg">
                    <div className="img">
                    <img src={bg} alt="hero"/>
                    <h5 align="center">Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                    </div>
                </div>

            </div>
            <div className="container recipe-container">
                <div className="row">
                    <div className="col-sm-3">
                        <a href="products.html" className="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div className="caption">
                                <h2>Veg</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="products.html" className="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div className="caption">
                                <h2>Non-Veg</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="products.html" className="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div className="caption">
                                <h2>Cakes</h2>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-3">
                        <a href="products.html" className="thumbnail a"><img src={bg} alt="Responsive" width='280px' height='200px' />
                            <div className="caption">
                                <h2>Sweets</h2>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero