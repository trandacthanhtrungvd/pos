import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const ManagerApp = () => {
  return (
    <div className="container mx-auto">
      <NavBar userType="manager" />
      <Outlet />
    </div>
  );
};

export default ManagerApp;
