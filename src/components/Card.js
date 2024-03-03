import React,{useState, useRef, useEffect} from 'react'
import { useCartContext, useDispatchContext } from '../screens/CartContext';

function Card({food}) {
  const optionKeys = Object.keys(food.options[0]);

  const [qty, setQty] = useState(1);
  const [unitPrice, setUnitPrice] = useState(0);
  const optionRef = useRef();

  useEffect(()=>{
    setUnitPrice(optionRef.current.value)
  },[])
  let finalPrice = qty * food.options[0][unitPrice];

  //cart
  const cartData = useCartContext(); //cart- food data array
  const dispatch = useDispatchContext(); //set cart data
  const handleAddToCart = ()=>{
    dispatch({type:"ADD", id:food._id, categoryName: food.CategoryName, name:food.name, img:food.img, description: food.description, option:food.options, price:finalPrice, qty: qty, size:unitPrice});
    console.log(cartData)
  }



  return (
    
    <div className="card m-2" style={{"width": "18rem"}}>
        <img src={food.img} className="card-img-top" alt="..." style={{height:"190px", objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">{food.name}</h5>
          <p className="card-text">
            {food.description}
          </p>
          <div  className="container">
          <select className="m-2" onChange={(e)=>setQty(e.target.value)}> 
            {Array.from(Array(6)).map((i,e) => 
              <option key={e+1} value={e+1}>{e+1}</option>
              )}
          </select>
          <select className="m-2" ref={optionRef} onChange={(e)=>setUnitPrice(e.target.value)}>
            {optionKeys.map(key => <option key={key} value={key}>{key}</option>)}
          </select>
          <div className="d-inline "><b>  ₹{finalPrice}/-</b></div>
          <hr></hr>
          <button className='btn btn-primary' onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
        
      </div>
  )
}

export default Card
