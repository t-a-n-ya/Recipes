import React from 'react'

function Navbar() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

          <h1 className="logo me-auto me-lg-0"><a href="#" className="a">MyCookBook</a></h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#menu">Categories</a></li>
              <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
          </nav>

        </div>
      </header>
    </>
  )
}

export default Navbar