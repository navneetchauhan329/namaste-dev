import React, { useState } from "react";
import { COMPANY_LOGO } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={COMPANY_LOGO} alt="img-logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlineStatus === true ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us </Link>
          </li>
          <li>
            <Link to="/grocery">Grocery App</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() =>
              setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
            }
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
