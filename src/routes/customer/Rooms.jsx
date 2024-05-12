import RoomCard from "@components/Card/RoomCard";
import React, { useState } from "react";
import { getRooms } from "../../../api";
const Rooms = () => {
  const rooms = getRooms();
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("0");
  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleTypeSelect = (event) => {
    console.log(event.target.value);
    setSelectedType(event.target.value);
  };

  const filteredItems = rooms.filter(
    (room) => room.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  const result = filteredItems.filter((room) => {
    if (selectedType === "0" || selectedType === room.type) {
      return room;
    }
  });

  return (
    <div className="flex justify-between gap-4 pt-4">
      {/* Sidebar */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          className="rounded-lg border-gray-400"
          type="text"
          placeholder="Tìm phòng"
          onChange={handleSearchQuery}
        />
        <select
          className="rounded-lg border-gray-400"
          name="type"
          id="type"
          onChange={handleTypeSelect}
        >
          <option value="0">-- Chọn loại phòng --</option>
          <option value="1">Phòng loại 1</option>
          <option value="2">Phòng loại 2</option>
        </select>
      </div>
      {/* Rooms */}
      <div className="flex flex-[4] flex-wrap gap-4">
        {result.map((room) => (
          <RoomCard key={room.id} id={room.id} name={room.name} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;
