import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import Logo2 from "../resources/images/Logo2.svg";
import Logo1 from "../resources/images/logo-without background.png";
import Logo2 from "../resources/images/logo-without background.png";
// import { findByLabelText } from "@testing-library/react";

function Navbar({ NavLink }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="px-7 mx-auto  lg:px-6">
      <div className="relative sm:py-6 ">
        <nav
          className="relative flex items-center justify-between sm:h-12 sm:py-6 md:justify-center"
          aria-label="Global"
        >


          <div className="flex lg:w-auto   w-full items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between  w-full lg:w-auto py-5">

              <Link to="/" className="w-24 ml-8 mb:ml-[-10px] mb:mr-[2rem]">
                <span className="sr-only ">SIT</span>
                <img className="w-full   " src={Logo2} alt="logo" />
              </Link>


              <div className="lg:hidden sm:block" >
              <h1 className="text-black font-bold text-sm   ">
                SINEX INSTITUTE OF TECHNOLOGY
              </h1>
            </div>


              <div className="flex items-center justify-end w-3/4  -mr-2 lg:hidden">
                {/* <!-- side menu --> */}
                <div className="flex ">
                  <input
                    type="checkbox"
                    readOnly
                    checked={isMenuOpen ? true : false}
                    id="drawer-toggle"
                    className="relative sr-only peer"
                  />
                  <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg peer-checked:translate-x-0">
                    <div className=" py-4 flex justify-center items-center flex-col">
                      <Link
                        to="/"
                        className="w-28"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        <span className="sr-only">SIT-Campus</span>
                        <img className="w-full" src={Logo1} alt="logo" />
                      </Link>


                      <hr className="w-[90%] my-5 " />
                      <div className="list-none text-center mt-5">

                        {NavLink.map((navlink, i) => {
                          return (
                            <li className="" key={i}>
                              <Link
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                key={navlink.id}
                                to={navlink.link}
                                className={
                                  path === navlink.link
                                    ? "mx-4 text-base font-bold  pb-2 list-none border-blue-500 hover:text-blue-600 text-blue-600"
                                    : " mx-4 text-center pb-2 leading-loose text-gray-500 hover: hover:border-blue-500 hover:transition-colors duration-300 ease-in-out"
                                }
                                target=""
                              >
                                {navlink.name}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                      <div className="text-center pt-5">
                        <div className=" flex justify-between items-center w-full rounded-full shadow">
                          <Link
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="/login"
                            className={`w-1/2 inline-flex items-center px-4 py-2 text-base ${path === "/login"
                              ? "bg-blue-500 text-white font-bold"
                              : "bg-white text-blue-500 font-bold"
                              } border border-transparent rounded-full transition-all duration-500 ease-in-out  cursor-pointer font-base  `}
                          >
                            Sign In
                          </Link>
                          <span className="text-blue-500 font-bold">
                            {path !== "/login" && path !== "/signup"
                              ? "|"
                              : ` `}
                          </span>
                          <Link
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            to="/signup"
                            className={`w-1/2 inline-flex items-center px-4 py-2 text-base 
                ${path === "/signup"
                                ? "bg-blue-500 text-white font-bold"
                                : "bg-white text-blue-500 font-bold"
                              }
                border border-transparent transition-all duration-500 ease-linear rounded-full cursor-pointer font-base  `}
                          >
                            Sign up
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  htmlFor="drawer-toggle"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="bg-gray-100 rounded-sm p-2"
                  type="button"
                  aria-expanded="false"
                >
                  {isMenuOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      htmlFor="drawer-toggle"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-full bi bi-x-lg"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                  ) : (
                    <svg
                      htmlFor="drawer-toggle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-full bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex lg:space-x-10 h- list-none">

            <div  >
              <h1 className="text-black font-bold text-3xl lg:block ">
                SINEX INSTITUTE OF TECHNOLOGY
              </h1>
            </div>

            {NavLink.map((navlink, i) => {
              return (
                <li className="" key={i}>
                  <Link
                    key={navlink.id}
                    to={navlink.link}
                    className={
                      path === navlink.link
                        ? "mx-4 text-base font-bold border-b-2 pb-2 list-none border-blue-500 hover:text-blue-600 text-blue-600"
                        : " mx-4 text-center pb-2 leading-loose text-gray-500 hover:border-b-2 hover:border-blue-500 hover:transition-colors duration-300 ease-in-out"
                    }
                    target=""
                  >
                    {navlink.name}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="hidden lg:absolute lg:flex lg:items-center lg:justify-end lg:inset-y-0 lg:right-0">
            <div className=" flex justify-center items-center rounded-full shadow">
              <Link
                to="/login"
                className={`inline-flex items-center px-4 py-2 text-base ${path === "/login"
                  ? "bg-blue-500 text-white font-bold"
                  : "bg-white text-blue-500 font-bold"
                  } border border-transparent rounded-full transition-all duration-500 ease-in-out  cursor-pointer font-base  `}
              >
                Sign In
              </Link>
              <span className="text-blue-500 font-bold">
                {path !== "/login" && path !== "/signup" ? "|" : ` `}
              </span>
              <Link
                to="/signup"
                className={`inline-flex items-center px-4 py-2 text-base 
                ${path === "/signup"
                    ? "bg-blue-500 text-white font-bold"
                    : "bg-white text-blue-500 font-bold"
                  }
                border border-transparent transition-all duration-500 ease-linear rounded-full cursor-pointer font-base  `}
              >
                Sign up
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;