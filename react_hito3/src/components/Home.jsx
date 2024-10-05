import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import pizzas from "../pizzas.json";

const Home = () => {
  return (
    <>
      <Header />
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {pizzas.map((pizza, id) => (
              <CardPizza key={pizza.id} pizzas={pizza} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
