import { useState } from "react";
import logo from "../../assets/images/chikitshaHub-logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About Us</a>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
    </>
  );
  return (
    <div className="navbar py-3 bg-black bg-opacity-55 text-white fixed z-10 md:px-28 px-5 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            onClick={() => setShow(!show)}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {show ? (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 font-bold rounded-box w-52">
              {links}
            </ul>
          ) : (
            ""
          )}
        </div>

        <img className="w-12" src={logo} alt="" />
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <button className="flex items-center relative w-32 border-2 border-[#409bd4] text-[#409bd4] p-2 rounded-full group">
          <span>Get Start</span>
          <span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-full">
            <svg
              viewBox="0 0 25 25"
              fill="none"
              className=""
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 12H20M20 12L14 6M20 12L14 18"
                  stroke="#409bd4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
