import NavBar from "@components/NavBar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const BranchMgrApp = () => {
  return (
    <div className="container mx-auto">
      <NavBar userType="branchmgr" />
      <Outlet />
    </div>
  );
};

export default BranchMgrApp;
