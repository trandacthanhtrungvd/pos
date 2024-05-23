import axios from "axios";
import { useState, createContext, useEffect } from "react";

const MenuContext = createContext();

function MenuProvider({ children }) {
  const [drinks, setDrinks] = useState([]);
  const [rooms, setRooms] = useState([]);

  // API call to get menu items
  useEffect(() => {
    axios
      .get("http://localhost:8080/menu")
      .then((res) => {
        setDrinks(
          res.data.data.map((item) => ({
            id: item.Item_ID,
            name: item.Item,
            price: item.Cost,
            img: item.Item_photo,
          })),
        );
      })
      .catch((error) => console.log(error));
  }, []);

  // API call to get rooms
  useEffect(() => {
    axios
      .get("http://localhost:8080/room")
      .then((res) => {
        setRooms(res.data.data.map(room => ({
          id: room.Room_ID,
          
        })));
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <MenuContext.Provider value={{ drinks, setDrinks, rooms, setRooms }}>
      {children}
    </MenuContext.Provider>
  );
}

export { MenuContext, MenuProvider };
