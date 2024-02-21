import React from 'react'

function Card() {
  return (
    <div className="card m-2" style={{"width": "18rem"}}>
        <img src="https://source.unsplash.com/random/200x200?pizza" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div  className="container">
          <select className="m-2">
            {Array.from(Array(6)).map((i,e) => 
              <option key={e+1} value={e+1}>{e+1}</option>
              )}
          </select>
          <select className="m-2">
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
          <div className="d-inline">Total Price:</div>
          </div>
        </div>
      </div>
  )
}

export default Card
