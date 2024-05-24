import { AuthContext } from "@context/AuthContext";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const authData = useContext(AuthContext);
  const { login, loginError } = authData;

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  return (
    <div className="mx-auto my-auto flex h-dvh max-w-md flex-col justify-center gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Tên đăng nhập" />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Tên đăng nhập"
          required
          onChange={(event) => {
            setLoginData((prev) => ({
              ...prev,
              username: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Mật khẩu" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="Mật khẩu"
          required
          onChange={(event) => {
            setLoginData((prev) => ({
              ...prev,
              password: event.target.value,
            }));
          }}
        />
      </div>
      <div className="flex items-center gap-2 font-semibold text-red-500">
        {loginError}
      </div>
      <div className="flex items-baseline justify-between">
        <Button
          onClick={() => {
            login(loginData.username, loginData.password);
          }}
        >
          Đăng nhập
        </Button>
        <NavLink className="font-semibold text-blue-500" to={"/register"}>
          Đăng ký
        </NavLink>
      </div>
    </div>
  );
};

export default LoginPage;
