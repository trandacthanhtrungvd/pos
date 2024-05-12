import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const ManagerApp = () => {
  return (
    <>
      <NavBar userType="manager" />
      <Outlet />
    </>
  );
};

export default ManagerApp;
