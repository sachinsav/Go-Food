import React,{useState} from 'react'

function Card({food}) {
  const optionKeys = Object.keys(food.options[0]);
  return (
    
    <div className="card m-2" style={{"width": "18rem"}}>
        <img src={food.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{food.name}</h5>
          <p className="card-text">
            {food.description}
          </p>
          <div  className="container">
          <select className="m-2">
            {Array.from(Array(6)).map((i,e) => 
              <option key={e+1} value={e+1}>{e+1}</option>
              )}
          </select>
          <select className="m-2">
            {optionKeys.map(key => <option value={key}>{key}</option>)}
          </select>
          <div className="d-inline">Total Price:</div>
          </div>
        </div>
      </div>
  )
}

export default Card
