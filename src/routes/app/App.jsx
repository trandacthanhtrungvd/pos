import CustomerNavBar from "@components/NavBar/CustomerNavBar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Drinks, Rooms, Promos, Branches, DrinkDetails, RoomDetails } from "@routes/customer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="customer" element={<CustomerNavBar />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="drinks" element={<Drinks />}></Route>
          <Route path="drinks/:drinkId" element={<DrinkDetails />}></Route>
          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:roomId" element={<RoomDetails />}></Route>
          <Route path="promos" element={<Promos />}></Route>
          <Route path="branches" element={<Branches />}></Route>
        </Route>
        <Route path="staff" element={<></>}>
        </Route>
        <Route path="branchmgr" element={<></>}>
        </Route>
        <Route path="manager" element={<></>}>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
