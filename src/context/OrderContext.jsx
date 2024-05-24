import { AuthContext } from "@context/AuthContext";
import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orderedDrinks, setOrderedDrinks] = useState([]);
  const [orderedRoom, setOrderedRoom] = useState(null);
  const [bills, setBills] = useState([]);

  const authData = useContext(AuthContext);
  const { user } = authData;

  useEffect(() => {
    axios
      .get("http://localhost:8080/bill", {
        headers: {
          Authorization: "Bearer " + user.accessToken,
        },
      })
      .then((res) => setBills(res.data.data))
      .catch((err) => console.error(err));
  });

  const createBill = (total) => {
    const data = {
      roomId: orderedRoom.id,
      itemsPurchased: orderedDrinks.map((drink) => {
        return {
          Item_ID: drink.id,
          Amount: drink.amount,
        };
      }),
      total: total,
      Bmgr_CCCD: "095201002828",
    };
    console.log(user.accessToken);
    axios
      .post("http://localhost:8080/bill/createBill", data, {
        headers: { Authorization: "Bearer " + user.accessToken },
      })
      .then(() => {
        setOrderedDrinks([]);
        setOrderedRoom(null);
      })
      .catch((error) => console.log(error));
  };

  return (
    <OrderContext.Provider
      value={{
        orderedDrinks,
        setOrderedDrinks,
        orderedRoom,
        setOrderedRoom,
        createBill,
        bills,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
