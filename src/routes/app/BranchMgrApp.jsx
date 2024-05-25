import NavBar from "@components/NavBar/NavBar";
import { BillProvider } from "@context/BillContext";
import React from "react";
import { Outlet } from "react-router-dom";

const BranchMgrApp = () => {
  return (
    <BillProvider>
      <div className="container mx-auto">
        <NavBar userType="branchmgr" />
        <Outlet />
      </div>
    </BillProvider>
  );
};

export default BranchMgrApp;
