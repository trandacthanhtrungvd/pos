import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@routes/login/LoginPage";
import RegisterPage from "@routes/login/RegisterPage";
import { CustomerApp, StaffApp, BranchMgrApp, ManagerApp } from "./index";
import {
  Home,
  Drinks,
  Rooms,
  Promos,
  Branches,
  DrinkDetails,
  RoomDetails,
  Cart,
  History,
} from "@routes/customer";
import {
  BranchDashboard,
  DrinksSettings,
  EditDrink,
  EditRoom,
  RoomsSettings,
  StaffSettings,
} from "@routes/branchmgr";
import { Dashboard, Feedbacks } from "@routes/manager";
import RoomStatus from "@routes/staff/RoomStatus";
import { Notifications } from "@routes/staff";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="customer" element={<CustomerApp />}>
          <Route index element={<Home />}></Route>
          <Route path="drinks" element={<Drinks />}></Route>
          <Route path="drinks/:drinkId" element={<DrinkDetails />}></Route>
          <Route path="rooms" element={<Rooms />}></Route>
          <Route path="rooms/:roomId" element={<RoomDetails />}></Route>
          <Route path="promos" element={<Promos />}></Route>
          <Route path="branches" element={<Branches />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="history" element={<History />}></Route>
        </Route>
        <Route path="staff" element={<StaffApp />}>
          <Route path="rooms" element={<RoomStatus />}></Route>
          <Route path="notifications" element={<Notifications />}></Route>
        </Route>
        <Route path="branchmgr" element={<BranchMgrApp />}>
          <Route path="dashboard" element={<BranchDashboard />}></Route>
          <Route path="staff" element={<StaffSettings />}></Route>
          <Route path="drinks" element={<DrinksSettings />}></Route>
          <Route path="drinks/:drinkId" element={<EditDrink />}></Route>
          <Route path="rooms" element={<RoomsSettings />}></Route>
          <Route path="rooms/:roomId" element={<EditRoom />}></Route>
        </Route>
        <Route path="manager" element={<ManagerApp />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="feedbacks" element={<Feedbacks />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
