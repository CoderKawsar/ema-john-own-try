import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div className="menu">
        <a href="/order">Order</a>
        <a href="/order-review">Order Review</a>
        <a href="/manage-inventory">Manage Inventory</a>
      </div>
    </nav>
  );
};

export default Header;
