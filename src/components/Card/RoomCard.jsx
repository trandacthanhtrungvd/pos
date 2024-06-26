import { Card } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const RoomCard = ({ id, type }) => {
  const typeText = {
    0: "Phòng chung",
    1: "Phòng nhỏ",
    2: "Phòng vừa",
    3: "Phòng lớn",
  };

  return (
    <Card className="max-w-sm" imgSrc="/img/rooms/1.jpg" imgAlt="Room Image">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Phòng {id}
      </h5>
      <div className="font-normal text-gray-700 dark:text-gray-400">
        {typeText[type]}
      </div>
      <NavLink
        to={`${id}`}
        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        Chọn
      </NavLink>
    </Card>
  );
};

export default RoomCard;
