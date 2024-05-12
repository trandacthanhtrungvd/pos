import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { Link } from "react";
import { NavLink, Outlet } from "react-router-dom";

const CustomerNavBar = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="#">
          <img
            src="/img/brand.png"
            className="mr-3 h-6 sm:h-9"
            alt="Brand Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Coffee House
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User Avatar" img="/img/avatar.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Thanh Trung</span>
              <span className="block truncate text-sm font-medium">
                trandacthanhtrung@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Divider />
            <Dropdown.Item>Đăng xuất</Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Collapse>
          <Navbar.Link as={NavLink} to={"home"}>
            Trang chủ
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={"drinks"}>
            Thực đơn
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={"rooms"}>
            Phòng
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={"promos"}>
            Khuyến mãi
          </Navbar.Link>
          <Navbar.Link as={NavLink} to={"branches"}>
            Chi nhánh
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default CustomerNavBar;
