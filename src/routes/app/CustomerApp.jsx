import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const CustomerApp = () => {
  return (
    <>
      <NavBar userType="customer" />
      <Outlet />
    </>
  );
};

export default CustomerApp;
