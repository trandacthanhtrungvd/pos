import { Card } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const DrinkCard = ({ id, name, price }) => {
  return (
    <Card className="max-w-sm" imgAlt="Drink Image" imgSrc="/img/drinks/1.jpg">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price} VND
        </span>
        <NavLink
          to={`/drinks/${id}`}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Chọn
        </NavLink>
      </div>
    </Card>
  );
};

export default DrinkCard;
