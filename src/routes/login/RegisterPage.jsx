import { AuthContext } from "@context/AuthContext";
import { Button, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";

const RegisterPage = () => {
  const authData = useContext(AuthContext);
  const { register, registerError } = authData;

  const [account, setAccount] = useState({
    userid: "",
    password: "",
    username: "",
  });
  const [info, setInfo] = useState({
    phone: "",
    email: "",
  });

  return (
    <div className="mx-auto my-auto flex h-dvh max-w-md flex-col justify-center gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="userid" value="Tên đăng nhập" />
        </div>
        <TextInput
          id="userid"
          type="text"
          placeholder="Tên đăng nhập"
          required
          onChange={(event) => {
            setAccount((prev) => ({
              ...prev,
              userid: event.target.value,
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
            setAccount((prev) => ({
              ...prev,
              password: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Tên khách hàng" />
        </div>
        <TextInput
          id="username"
          type="text"
          placeholder="Tên khách hàng"
          required
          onChange={(event) => {
            setAccount((prev) => ({
              ...prev,
              username: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone" value="Số điện thoại" />
        </div>
        <TextInput
          id="phone"
          type="text"
          placeholder="Số điện thoại"
          required
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              phone: event.target.value,
            }));
          }}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="text"
          placeholder="Email"
          required
          onChange={(event) => {
            setInfo((prev) => ({
              ...prev,
              email: event.target.value,
            }));
          }}
        />
      </div>
      <div className="font-semibold text-red-500">{registerError}</div>
      <div>
        <Button
          onClick={() => {
            register(
              account.userid,
              account.password,
              account.username,
              info.phone,
              info.email,
            );
          }}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;
