/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto pt-14">
        <footer className="relative pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-4/12 px-4">
                {/* <h4 className="text-3xl font-semibold text-white">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-[#fcefefd8]">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5> */}
                <div className="flex items-center gap-4">
                  <img
                    className="md:w-12 w-10"
                    src="https://i.ibb.co/98D4kxf/chikitsha-Hub-logo.png"
                    alt=""
                  />
                  <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                    Chikitsha<span className="text-[#409bd4]">Hub</span>
                  </h2>
                </div>

                <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-4">
                  <FaTwitch className="w-6 h-6" />

                  <FaFacebook className="w-6 h-6" />

                  <FaLinkedin className="w-6 h-6" />

                  <FaInstagram className="w-6 h-6" />
                </div>
              </div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="flex flex-wrap items-top mb-6 gap-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-white text-lg font-semibold mb-4">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <Link to='/about'
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to='Contact'
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link to='/tips'
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm"
                          >
                          Tips
                        </Link>
                      </li>
                      <li>
                        {/* <a
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                          Faq
                        </a> */}
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    {/* <span className="block uppercase text-white text-base font-semibold mb-4">
                      Other Resources
                    </span> */}
                    <ul className="list-unstyled">
                      <li>
                        {/* <a
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm"
                          >
                          Help & Support
                        </a> */}
                      </li>
                      <li>
                        {/* <a
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm"
                          >
                          Terms &amp; Conditions
                        </a> */}
                      </li>
                      <li>
                        {/* <a
                          className="text-[#fcefefd8] font-semibold block pb-2 text-sm"
                          >
                          Privacy Policy
                        </a> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-[#fcefefd8] font-bold py-1">
                  Copyright ©{" "}
                  <span id="get-current-year">{new Date().getFullYear()}</span>{" "}
                  <a
                    href="https://www.creative-tim.com?ref=njs-profile"
                    className="text-[#409ad4]">
                    ChikitshaHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
