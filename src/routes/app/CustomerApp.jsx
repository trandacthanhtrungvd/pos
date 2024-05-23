import NavBar from "@components/NavBar/NavBar";
import { OrderProvider } from "@context/OrderContext";
import React from "react";
import { Outlet } from "react-router-dom";

const CustomerApp = () => {
  return (
    <OrderProvider>
      <div className="container mx-auto">
        <NavBar userType="customer" />
        <Outlet />
      </div>
    </OrderProvider>
  );
};

export default CustomerApp;
