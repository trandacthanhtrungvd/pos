import DrinkCard from "@components/Card/DrinkCard";
import { MenuContext } from "@context/MenuContext";
import React, { useContext, useState } from "react";

const Drinks = () => {
  const menuData = useContext(MenuContext);
  const { drinks } = menuData;
  
  const [query, setQuery] = useState("");
  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = drinks.filter(
    (drink) => drink.name.toLowerCase().indexOf(query.toLowerCase()) !== -1,
  );

  console.log(drinks);
  return (
    <div className="flex justify-between gap-4 pt-4">
      {/* Sidebar */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          className="rounded-lg border-gray-400"
          type="text"
          placeholder="Tìm món"
          onChange={handleSearchQuery}
        />
      </div>
      {/* Rooms */}
      <div className="flex flex-[4] flex-wrap gap-4">
        {filteredItems.map((drink) => (
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
