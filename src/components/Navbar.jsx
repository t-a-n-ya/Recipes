import React from 'react'

function Navbar() {
  return (
    <>
        <header id="header" class="fixed-top d-flex align-items-cente">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
    
      <h1 class="logo me-auto me-lg-0"><a href="index.html" class="a">MyCookBook</a></h1>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#menu">Categories</a></li>
          <li><a class="nav-link scrollto" href="#specials">Specials</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Navbar