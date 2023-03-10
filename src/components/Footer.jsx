import React from 'react'

function Footer() {
  return (
    <footer id='footer'>
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-5 col-md-6">
              <div className="footer-info">
                <h3>MyCookBook</h3>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li> <a href="#">Home</a></li>
                <li> <a href="#">About us</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li> <a href="#">Vegetarian</a></li>
                <li> <a href="#">Non-vegetarian</a></li>
                <li> <a href="#">Cakes</a></li>
                <li> <a href="#">Sweets</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
                    <p align="center">&copy; Copyright <strong><span>MyCookBook</span></strong>. All Rights Reserved</p>
                  </div>
    </footer>
  )
}

export default Footer