/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { MdLogout } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/authProbiver";
const Header = () => {
  const [show, setShow] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "mr-6 text-[#409bd4] text-lg font-semibold"
            : "mr-6 text-lg font-semibold"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/specialties"
        className={({ isActive }) =>
          isActive
            ? "mr-6 text-[#409bd4] text-lg font-semibold"
            : "mr-6 text-lg font-semibold"
        }
      >
        Specialties
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "mr-6 text-[#409bd4] text-lg font-semibold"
            : "mr-6 text-lg font-semibold"
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          isActive
            ? "mr-6 text-[#409bd4] text-lg font-semibold"
            : "mr-6 text-lg font-semibold"
        }
      >
        Contact Us
      </NavLink>
    </>
  );

  return (
    <div
      className={`fixed max-w-full top-0 left-0 right-0 mx-auto z-10 ${
        isScrolled ? "bg-gray-200 text-black" : "bg-none text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto navbar py-3 px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              onClick={() => setShow(!show)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-black font-bold rounded-box w-52"
              >
                {links}
              </ul>
            ) : (
              ""
            )}
          </div>

          <Link to="/">
            <div className="flex items-center md:gap-4 gap-2">
              <img
                className="md:w-12 w-10"
                src="https://i.ibb.co/98D4kxf/chikitsha-Hub-logo.png"
                alt=""
              />
              <h2 className="md:text-3xl text-xl font-semibold">
                Chikitsha<span className="text-[#409bd4]">Hub</span>
              </h2>
            </div>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="avatar">
                  <div className="w-12 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="text-black w-full" to="/userProfile">
                    <h1 className="text-center">Your Profile</h1>
                  </Link>
                </li>
                <li>
                  <Link className="text-black w-full" to="/">
                    <h1 className="text-center">Join as a Doctor</h1>
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-sm bg-transparent border-none bg-white text-start text-blue-700"
                    onClick={logOut}
                  >
                    <div className="flex justify-between gap-2">
                      <span>
                        <MdLogout />
                      </span>
                      <span>Log out</span>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/login"}>
              <button className="flex items-center relative w-24 border-2 border-[#409bd4] text-[#409bd4] px-4 py-2 rounded-full group">
                <span>Login</span>
                <span
                  className={`absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center rounded-full ${
                    isScrolled ? "bg-gray-200" : "bg-[#080b0e]"
                  }`}
                >
                  <LuLogIn className="h-10" />
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
