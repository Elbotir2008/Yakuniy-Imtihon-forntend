"use client";
import { useEffect, useState } from "react";
import "./details.scss";
import axios from "axios";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/footer/Footer";

const Details = ({ params: { id } }) => {
  const [detailsDish, setDetailsDish] = useState(null);

  useEffect(() => {
    const fetchDetailsDish = async () => {
      try {
        const response = await axios.get(
          `https://654ea70d358230d8f0ccbf59.mockapi.io/api/v1/Dishes/${id}`
        );
        setDetailsDish(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetailsDish();
  }, [id]);

  return (
    <div className="div">
      <Header />
      <div className="container">
        {detailsDish ? (
          <div className="details-card" key={detailsDish.id}>
            <img src={detailsDish.imgUrl} alt="Error" />
            <h1>{detailsDish.name}</h1>
            <h4>{detailsDish.price}</h4>
            <p>{detailsDish.category}</p>
            <span>{detailsDish.stars}</span>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Details;
