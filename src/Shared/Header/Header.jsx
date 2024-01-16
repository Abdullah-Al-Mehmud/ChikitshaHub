import { useState } from "react";
import logo from "../../assets/images/chikitshaHub-logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
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

        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
