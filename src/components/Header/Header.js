// import { useState } from "react";
// import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
// import { useDispatch, useSelector } from "react-redux";
// import store from "../utils/store";
// import { logout } from "../utils/UserSlice";



const Header = () => {
  
  return (
    <div className="flex bg-primary justify-between items-center p-4 shadow-md fixed top-0 left-0 right-0 z-10">
      <div>
      <Link to={"/"}>
            <p className="px-2 font-bold text-secondary text-5xl">PDF<span className="text-base">morph</span></p>
          </Link>
      </div>
      <div className="flex">
      <Link to={"/my-pdf"}>
            <p className="px-2 text-tertiary hover:text-secondary">My Pdf's</p>
        </Link>

        <Link to={"/login"}>
            <p className="px-2 text-tertiary hover:text-secondary">Login</p>
        </Link>

        <Link to={"/signup"}>
            <p className="px-2 text-tertiary hover:text-secondary">Signup</p>
        </Link>
        <Link to={"/"}>
            <p className="px-2 text-tertiary hover:text-secondary">Logout</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
