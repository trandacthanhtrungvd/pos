import { Button, Navbar, NavbarLink } from "flowbite-react";
import React, { Link } from "react";

const NavBar = () => {
  return (
    <div className="container mx-auto">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="#">
          <img src="/brand.png" className="mr-3 h-6 sm:h-9" alt="Brand Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Coffee House
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Trang chủ
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            Thực đơn
          </Navbar.Link>
          <Navbar.Link href="#">Phòng</Navbar.Link>
          <Navbar.Link href="#">Khuyến mãi</Navbar.Link>
          <Navbar.Link as={NavbarLink}>Chi nhánh</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
