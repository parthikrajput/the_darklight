import React, { useState, useEffect } from "react";
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="fixed w-full top-0 left-0 py-4 bg-white text-black-l-500 z-20">
      <div className="container">
        <div className="h-wrapper flex items-center gap-5 justify-between">
          <Link
            to="/"
            target="_self"
            aria-label="Homepage"
            className="logo w-[200px] sm:w-[270px] xl:w-[300px]"
          >
            <img src={logo} alt="logo" />
          </Link>
          <nav
            className={`flex lg:items-center gap-10 lg:relative lg:w-fit lg:h-auto top-0 
              ${
                windowWidth <= 1023
                  ? isMenuOpen
                    ? "left-0"
                    : "left-[-1000px]"
                  : "left-0"
              } 
              w-[300px] h-screen fixed lg:p-0 px-5 pt-14 pb-6 z-10 bg-white transition-all duration-500 ease-linear`}
          >
            <ul className="nav-links flex lg:items-center gap-8 lg:flex-row flex-col">
              <li>
                <NavLink
                  to="/"
                  aria-label="Home"
                  target="_self"
                  onClick={() => {
                    closeMenu();
                    closeDropdown();
                  }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  aria-label="About"
                  target="_self"
                  onClick={() => {
                    closeMenu();
                    closeDropdown();
                  }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-600"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  aria-label="Service"
                  target="_self"
                  onClick={() => {
                    setDropdownOpen((prev) => !prev);
                    closeMenu();
                  }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-600"
                  }
                >
                  Service <FaChevronDown className="ml-1" />
                </NavLink>
                {dropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg w-56 z-10">
                    {[
                      { path: "/service/ui_ux_design", label: "UI/UX Design" },
                      {
                        path: "/service/mobile_app_development",
                        label: "Mobile App Development",
                      },
                      {
                        path: "/service/web_development",
                        label: "Web Development",
                      },
                      { path: "/service/cms", label: "CMS" },
                      {
                        path: "/service/graphic_design",
                        label: "Graphic Design",
                      },
                      {
                        path: "/service/digital_marketing",
                        label: "Digital Marketing",
                      },
                      { path: "/service/testing_qa", label: "Testing & QA" },
                      {
                        path: "/service/3d_animations_video_content",
                        label: "3D Animations & Video Content",
                      },
                      {
                        path: "/service/branding_identity",
                        label: "Branding & Identity",
                      },
                    ].map(({ path, label }) => (
                      <li key={path}>
                        <Link
                          to={path}
                          className="block px-4 py-2 hover:bg-gray-200"
                          onClick={() => closeDropdown()}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <NavLink
                  to="/team"
                  aria-label="Team"
                  target="_self"
                  onClick={() => {
                    closeMenu();
                    closeDropdown();
                  }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-600"
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  aria-label="Contact"
                  target="_self"
                  onClick={() => {
                    closeMenu();
                    closeDropdown();
                  }}
                  className={({ isActive }) =>
                    isActive ? "text-blue-l-800" : "text-black-l-600"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div
              className="close-icon lg:hidden absolute top-5 right-5 cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                className="w-[30px] h-[30px]"
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  d="M342.6 150.6a32 32 0 0 0-45.3-45.3L192 210.7 86.6 105.4a32 32 0 0 0-45.3 45.3L146.7 256 41.4 361.4a32 32 0 0 0 45.3 45.3L192 301.3l105.4 105.3a32 32 0 0 0 45.3-45.3L237.3 256l105.3-105.4z"
                  fill="#0B062D"
                ></path>
              </svg>
            </div>
          </nav>

          <div className="flex items-center gap-8">
            <Link
              to="/contact"
              aria-label="Contact"
              target="_self"
              className="btn hidden sm:flex"
            >
              Get It Support
            </Link>
            <div
              className="menu-icon lg:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              <svg
                className="w-[30px] h-[30px]"
                xmlns="http://www.w3.org/2000/svg"
                height="22"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                  fill="#0B062D"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
