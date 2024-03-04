import React from 'react'
import Delete from '@mui/icons-material/Delete';

import { useCartContext, useDispatchContext } from './CartContext';
export default function Cart() {
  let data = useCartContext();
  let dispatch = useDispatchContext();
  document.getElementById("root").style.visibility = "hidden";
  if (data.length === 0) {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg fs-4 text-white ps-3">
        <b>My Cart</b>
        </nav>
        <div className='mt-5 ms-2 w-100 fs-5'>The Cart is Empty!</div>
      </div>
    )
  }


  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("email");
    
    let response = await fetch("https://gofood-1mm6.onrender.com/api/addOrder", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        orders: data
      })
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0)
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg fs-4 text-white ps-3">
        <b>My Cart</b>
      </nav>
      <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr>
                <th scope='row' >{index + 1}</th>
                <td >{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td ><button type="button" className="btn p-0"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-primary mt-3 p-2 text-white' onClick={handleCheckOut} > Check Out </button>
        </div>
      </div>



    </div>
  )
}