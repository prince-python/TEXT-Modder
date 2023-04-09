import React from 'react'

export const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-white bg-white text-black shadow-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">TEXT-MODDER</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item mx-2 mt-2 mb-2">
              <a class="nav-link text-black btn btn-whitetext-black shadow-lg " href="https://prince-python.github.io/PrinceJat/">MY PORTFOLIO</a>
            </li>
            <li class="nav-item mx-2 mt-2 mb-2">
              <a class="nav-link text-black btn btn-white text-black shadow-lg " href="https://live-wether-app-using-django-arr2lwcbt-prince-python.vercel.app/" >LIVE WETHER APP</a>
            </li>
 </ul>
    </div>
  </div>
</nav>
  </>
  )
};

