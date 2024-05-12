import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const BranchMgrApp = () => {
  return (
    <>
      <NavBar userType="branchmgr" />
      <Outlet />
    </>
  );
};

export default BranchMgrApp;
