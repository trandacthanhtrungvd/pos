import DrinkCard from "@components/Card/DrinkCard";
import React, { useState } from "react";
import { getDrinks } from "../../../api";

const Drinks = () => {
  const drinks = getDrinks();
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const handleTypeSelect = (event) => {
    console.log(event.target.value);
    setSelectedType(event.target.value);
  };

  const filteredItems = drinks.filter(
    (drink) => drink.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  const result = filteredItems.filter((drink) => {
    if (selectedType === "" || selectedType === drink.type) {
      return drink;
    }
  });

  console.log(drinks);
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
          <option value="">-- Chọn loại đồ uống --</option>
          <option value="coffee">Coffee</option>
          <option value="juice">Juice</option>
          <option value="softdrink">Nước ngọt</option>
        </select>
      </div>
      {/* Rooms */}
      <div className="flex flex-[4] flex-wrap gap-4">
        {result.map((drink) => (
          <DrinkCard
            id={drink.id}
            key={drink.id}
            name={drink.name}
            price={drink.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Drinks;
