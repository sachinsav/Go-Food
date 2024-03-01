import React from "react";

function Carousel({setSearch}) {
  return (
    <div id="carouselExample" className="carousel slide mb-3">
      <div
        className="carousel-caption d-sm-block"
        style={{ zIndex: "10" }}
      >
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            onChange = {(e)=>setSearch(e.target.value)}
            aria-describedby="search-addon"
          />
         
            
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/random/900x150?burger"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x150?pizza"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/random/900x150?biryani"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
