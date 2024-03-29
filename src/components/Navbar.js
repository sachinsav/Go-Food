import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Modal from '../Modal';
import { useCartContext, useDispatchContext } from '../screens/CartContext';
import Cart from '../screens/Cart';
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatchContext();
  const [showCart, setShowCart] = useState(false);
  const cartData = useCartContext();
  
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("email");
    dispatch({type:'DROP'});
    navigate("/login", {replace: true});
  }
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isMyOrderActive, setIsMyOrderActive] = useState(false);
  
  return (
    <>
     <nav className="navbar navbar-dark bg-primary navbar-expand-md fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" onClick={()=>{setIsHomeActive(true);setIsMyOrderActive(false)}}>
          <Link className={(isHomeActive?"active ":"") + "nav-link"} aria-current="page" to="/">Home</Link>
        </li>
        {localStorage.getItem("authToken")?<li className="nav-item" onClick={()=>{setIsHomeActive(false);setIsMyOrderActive(true)}}>
          <Link className={"nav-link "+(isMyOrderActive?"active":"")} to="/myorder">My Order</Link>
        </li>:null}
        
        </ul>
        <ul className="navbar-nav ms-auto">
        {localStorage.getItem("authToken")?(
          <>
          <li className="nav-item">
          <button type="button" className="btn btn-primary nav-link" onClick={()=>setShowCart(true)}>
            My Cart <span className="badge badge-light bg-danger">{cartData.length}</span>
          </button>
          {showCart? <Modal onClose={() => {setShowCart(p => {document.getElementById("root").style.visibility = "visible"; return false;})}}>
              <Cart></Cart>
            </Modal>:null}
          </li>

          <li className="nav-item">
          <button type="button" className="btn btn-primary nav-link" onClick={handleLogout}>
          Logout
          </button>
          </li>
          </>
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
