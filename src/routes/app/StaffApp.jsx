import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const StaffApp = () => {
  return (
    <>
      <NavBar userType="staff" />
      <Outlet />
    </>
  );
};

export default StaffApp;
