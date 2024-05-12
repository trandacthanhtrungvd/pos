import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const CustomerApp = () => {
  return (
    <div className="container mx-auto">
      <NavBar userType="customer" />
      <Outlet />
    </div>
  );
};

export default CustomerApp;
