"use client";
import axios from "axios";
import "./dishes.scss";
import { useState, useEffect } from "react";

type Dish = {
  id: number;
  imgUrl: string;
  category: string;
  name: string;
  stars: number;
  price: number;
};

const Dishes = () => {
  const [dish, setDish] = useState<Dish[]>([]);

  const fetchDishes = async () => {
    try {
      let res = await axios.get(
        "https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes?page=1&limit=4"
      );
      let data = res.data;
      setDish(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <section className="dishes-section">
      <div className="container">
        <div className="dishes-title">
          <h1>
            Our Top <b>Dishes</b>
          </h1>
        </div>
        <div className="dishes-cards grid-class">
          {dish.length > 0 ? (
            dish.map((dsh, index) => (
              <div className="card" key={index}>
                <img src={dsh.imgUrl} alt="Eror" />
                <h4>{dsh.category}</h4>
                <h2>{dsh.name}</h2>
                <div className="flex-class">
                  <span>24 min •</span>
                  <img src="./Star.svg" alt="Eror" />
                  <span>{dsh.stars}</span>
                </div>
                <div className="flex-class">
                  <p>{dsh.price}</p>
                  <img src="./Add.svg" className="add" alt="Eror" />
                </div>
              </div>
            ))
          ) : (
            <p>Loading dishes...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Dishes;
