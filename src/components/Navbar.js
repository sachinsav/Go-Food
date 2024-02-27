import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About us</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
