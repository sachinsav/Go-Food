import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login", {replace: true});
  }
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
        {localStorage.getItem("authToken")?<li className="nav-item">
          <Link className="nav-link" to="/myorder">My Order</Link>
        </li>:""}
        
        </ul>
        <ul className="navbar-nav ms-auto">
        {localStorage.getItem("authToken")?(
          <div className='d-flex'>
            <div className="nav-link">My Cart</div>
            <div className="nav-link" onClick={handleLogout}>Logout</div>
          </div>
        ):(
        <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">SignUp</Link>
        </li>
        </>)}
        
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
