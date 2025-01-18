import React from "react";
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 py-4 bg-white text-black-l-500">
      <div className="container">
        <div className="h-wrapper flex items-center gap-5 justify-between">
          <Link to="/" target="_black" className="logo w-[300px]">
            <img src={logo} alt="logo" />
          </Link>
          <nav className="flex items-center gap-7">
            <ul className="nav-links flex items-center gap-8">
              <li>
                <NavLink
                  to="/about"
                  target="_black"
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-800"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/project"
                  target="_black"
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-800"
                  }
                >
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  target="_black"
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-800"
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  target="_black"
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-800"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="close-icon lg:hidden absolute top-5 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  d="M342.6 150.6a32 32 0 0 0-45.3-45.3L192 210.7 86.6 105.4a32 32 0 0 0-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0 0 45.3 45.3L192 301.3l105.4 105.3a32 32 0 0 0 45.3-45.3L237.3 256l105.3-105.4z"
                  fill="#000"
                ></path>
              </svg>
            </div>
          </nav>

          <Link to="/contact" target="_black" className="btn">
            Get It Support
          </Link>
          <div className="menu-icon lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                fill="#000"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
