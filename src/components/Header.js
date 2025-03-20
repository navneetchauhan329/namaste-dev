import React, { useState } from "react";
import { COMPANY_LOGO } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gradient-to-r from-yellow-400 to-red-400 shadow-lg">
      <div>
        <img className="w-36 h-16" src={COMPANY_LOGO} alt="img-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 ">
          <li className="px-4 hover:text-sky-900 font-bold">
            Online Status : {onlineStatus === true ? "✅" : "🔴"}
          </li>
          <li className="px-4 hover:text-sky-900 font-bold">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4 hover:text-sky-900 font-bold">
            <Link to="/about">About Us </Link>
          </li>
          <li className="px-4 hover:text-sky-900 font-bold">
            <Link to="/contactus">Contact Us </Link>
          </li>
          <li className="px-4 hover:text-sky-900 font-bold">
            <Link to="/grocery">Grocery App</Link>
          </li>
          <li className="px-4 hover:text-sky-900 font-bold ">Cart</li>
          <button
            className="px-4 bg-sky-500 shadow-lg hover:bg-sky-700 text-white rounded-3xl"
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
