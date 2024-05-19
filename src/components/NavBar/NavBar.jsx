import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { Link, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const customerTabList = [
  { id: "home", title: "Trang chủ", destination: "" },
  { id: "drinks", title: "Thực đơn", destination: "drinks" },
  { id: "rooms", title: "Phòng", destination: "rooms" },
  { id: "promos", title: "Khuyến mãi", destination: "promos" },
  { id: "branches", title: "Chi nhánh", destination: "branches" },
  { id: "cart", title: "Giỏ hàng", destination: "cart" },
];

const staffTabList = [
  { id: "drinks", title: "Thực đơn", destination: "drinks" },
  { id: "rooms", title: "Phòng", destination: "rooms" },
  { id: "notifications", title: "Thông báo", destination: "notifications" },
];

const branchmgrTabList = [
  { id: "dashboard", title: "Doanh thu", destination: "dashboard" },
  { id: "staff", title: "Quản lý nhân viên", destination: "staff" },
  { id: "drinks", title: "Quản lý thực đơn", destination: "drinks" },
  { id: "rooms", title: "Quản lý phòng", destination: "rooms" },
];

const managerTabList = [
  { id: "dashboard", title: "Doanh thu", destination: "dashboard" },
  { id: "feedbacks", title: "Phản hồi", destination: "feedbacks" },
];

const NavBar = ({ userType = "customer" }) => {
  const [tabList, setTabList] = useState([]);

  useEffect(() => {
    if (userType === "customer") {
      setTabList(customerTabList);
    } else if (userType === "staff") {
      setTabList(staffTabList);
    } else if (userType === "branchmgr") {
      setTabList(branchmgrTabList);
    } else if (userType === "manager") {
      setTabList(managerTabList);
    }
  }, [userType]);

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
            <Dropdown.Item as={NavLink} to={"/"}>Đăng xuất</Dropdown.Item>
          </Dropdown>
        </div>
        <Navbar.Collapse>
          {tabList.map((tab) => (
            <Navbar.Link
              key={tab.id}
              as={NavLink}
              to={`/${userType}/${tab.destination}`}
            >
              {tab.title}
            </Navbar.Link>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
