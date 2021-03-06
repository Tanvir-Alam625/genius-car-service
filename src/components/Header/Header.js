import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuAlt4Icon } from "@heroicons/react/solid";
import CustomLink from "./CustomLink";
import logo from "../../images/logo.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import User from "../Home/User/User";
import profileLogo from "../../images/icon/profileLogo.png";
const Header = () => {
  const [open, setOpen] = useState(true);
  const [profile, setProfile] = useState(true);
  const [user] = useAuthState(auth);
  return (
    <header>
      <nav className="py-4 px-8 lg:px-20 lg:py-6 flex  bg-cyan-500 flex-col lg:flex-row justify-between w-full lg:items-center">
        <div className="nv-logo">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[100px] md:w-[200px]" />
          </Link>
        </div>
        <div
          className={` absolute top-[50px] md:top-[70px] w-full lg:w-auto bg-cyan-500 py-6 px-3 lg:p-0 lg:static lg:mt-0 duration-100 ease-in z-30 ${
            open ? "left-[-100%]" : "left-[0px]"
          }`}
        >
          <ul className="flex flex-col lg:flex-row py-8 lg:py-0">
            <CustomLink to="/">
              <li
                onClick={() => setOpen(!open)}
                className="mr-4 mb-4 lg:mb-0 text-xl  font-semibold cursor-pointer  pl-3 decoration-transparent"
              >
                Home
              </li>
            </CustomLink>
            <CustomLink to="/services">
              <li
                onClick={() => setOpen(!open)}
                className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white  cursor-pointer  pl-2"
              >
                Services
              </li>
            </CustomLink>
            <CustomLink to="/experts">
              <li
                onClick={() => setOpen(!open)}
                className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white  cursor-pointer  pl-2"
              >
                Experts
              </li>
            </CustomLink>
            <CustomLink to="/contact">
              <li
                onClick={() => setOpen(!open)}
                className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white cursor-pointer  pl-2"
              >
                Contact
              </li>
            </CustomLink>
            <CustomLink to="/about">
              <li
                onClick={() => setOpen(!open)}
                className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white cursor-pointer   pl-2"
              >
                About
              </li>
            </CustomLink>
            {user && (
              <>
                <CustomLink to="/add">
                  <li
                    onClick={() => setOpen(!open)}
                    className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white cursor-pointer  pl-2"
                  >
                    Add Service
                  </li>
                </CustomLink>
                <CustomLink to="/manage">
                  <li
                    onClick={() => setOpen(!open)}
                    className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white cursor-pointer pl-2"
                  >
                    Manage
                  </li>
                </CustomLink>
                <CustomLink to="/orderHistory">
                  <li
                    onClick={() => setOpen(!open)}
                    className="mr-4 mb-4 lg:mb-0 text-xl hover:text-white cursor-pointer  pl-2"
                  >
                    Orders
                  </li>
                </CustomLink>
              </>
            )}
            <div className="user flex flex-col relative bg-cyan-500">
              {user?.uid ? (
                <div className="flex justify-center">
                  <img
                    title={user.email}
                    onClick={() => setProfile(!profile)}
                    src={profileLogo}
                    className=" cursor-pointer font-semibold h-[30px] "
                    alt="profileLogo"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              ) : (
                <CustomLink to="/login">
                  <li
                    onClick={() => setOpen(!open)}
                    className="mr-4 mb-4 lg:mb-0 text-xl font-semibold hover:text-white cursor-pointer  pl-3"
                  >
                    Login
                  </li>
                </CustomLink>
              )}
              {user && profile && <User />}
            </div>
          </ul>
        </div>
        <MenuAlt4Icon
          onClick={() => setOpen(!open)}
          className=" block lg:hidden absolute right-2 md:right-8 font-semibold  top-2 md:top-6 h-8 w-8 text-teal-300 cursor-pointer border rounded"
        />
      </nav>
    </header>
  );
};

export default Header;
