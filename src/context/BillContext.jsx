import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BillContext = createContext();

function BillProvider({ children }) {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/bill/history")
      .then((res) => setBills(res.data.data))
      .catch((error) => console.log(error));
  });

  return (
    <BillContext.Provider value={{ bills }}>{children}</BillContext.Provider>
  );
}

export { BillContext, BillProvider };