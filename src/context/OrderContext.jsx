import { useState, createContext } from "react";

const OrderContext = createContext();

function OrderProvider({ children }) {
  const [orderedDrinks, setOrderedDrinks] = useState([]);
  const [orderedRoom, setOrderedRoom] = useState({});

  return (
    <OrderContext.Provider value={{ orderedDrinks, setOrderedDrinks, orderedRoom, setOrderedRoom }}>
      {children}
    </OrderContext.Provider>
  );
}

export { OrderContext, OrderProvider };
