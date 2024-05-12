import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const StaffApp = () => {
  return (
    <div className="container mx-auto">
      <NavBar userType="staff" />
      <Outlet />
    </div>
  );
};

export default StaffApp;
