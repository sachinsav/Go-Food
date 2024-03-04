import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
function Home() {
  const [cards, setCards] = useState([]);
  const [category, setCategory] = useState([]);
  const [searh, setSearch] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("https://gofood-1mm6.onrender.com/api/fooditems");
      const responseJson = await response.json();
      setCards(responseJson[0]);
      setCategory(responseJson[1]);
      
    } catch (err) {
      console.log(err);
      return;
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Carousel setSearch={setSearch}/>
      <div className="container">
        {category.length === 0
          ? ""
          : category.map((cat) => (
              <div key={cat._id} className="row mb-3">
                <h3>{cat.CategoryName}</h3>
                {cards.length === 0
                  ? ""
                  : cards
                      .filter((food) => food.CategoryName === cat.CategoryName && food.name.toLowerCase().includes(searh.toLowerCase()))
                      .map((food) => <div key={food._id} className="col-xm-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center"><Card food={food} /></div>)}
              </div>
            ))}
      </div>
    </>
  );
}

export default Home;
