import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@routes/login/LoginPage";
import {CustomerApp, StaffApp, BranchMgrApp, ManagerApp} from "./index";
import {
  Home,
  Drinks,
  Rooms,
  Promos,
  Branches,
  DrinkDetails,
  RoomDetails,
} from "@routes/customer";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="customer" element={<CustomerApp />}>
          <Route index element={<Home />}></Route>
          <Route path="drinks" element={<Drinks />}></Route>
          <Route path="drinks/:drinkId" element={<DrinkDetails />}></Route>
          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:roomId" element={<RoomDetails />}></Route>
          <Route path="promos" element={<Promos />}></Route>
          <Route path="branches" element={<Branches />}></Route>
        </Route>
        <Route path="staff" element={<StaffApp/>}></Route>
        <Route path="branchmgr" element={<BranchMgrApp />}></Route>
        <Route path="manager" element={<ManagerApp />}></Route>
      </Routes>
    </div>
  );
};

export default App;
