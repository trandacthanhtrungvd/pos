import { Button } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mx-auto my-auto flex h-dvh max-w-fit flex-col justify-center gap-8">
      <Button as={NavLink} to="customer">
        Customer
      </Button>
      <Button as={NavLink} to="staff">
        Staff
      </Button>
      <Button as={NavLink} to="branchmgr">
        Branch Manager
      </Button>
      <Button as={NavLink} to="manager">
        Manager
      </Button>
    </div>
  );
};

export default LoginPage;
