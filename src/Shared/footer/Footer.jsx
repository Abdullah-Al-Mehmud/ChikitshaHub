/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="max-w-6xl mx-auto pt-14">
        <footer className="relative pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-4/12 px-4">
                <h4 className="text-3xl font-semibold text-gray-700">
                  Let's keep in touch!
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-600">
                  Find us on any of these platforms, we respond 1-2 business days.
                </h5>
                <div className="mt-6 lg:mb-0 mb-6 flex items-center gap-4">

                  <FaTwitch className="w-6 h-6" />

                  <FaFacebook className="w-6 h-6" />

                  <FaLinkedin className="w-6 h-6" />

                  <FaInstagram className="w-6 h-6" />

                </div>
              </div>
              <div className="w-full lg:w-8/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-700 text-lg font-semibold mb-4">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=njs-profile"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://blog.creative-tim.com?ref=njs-profile"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial?ref=njs-profile"
                        >
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                        >
                          Faq
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-700 text-base font-semibold mb-4">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          Help & Support
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/terms?ref=njs-profile"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-gray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-gray-500 font-semibold py-1">
                  Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>{" "}
                  <a
                    href="https://www.creative-tim.com?ref=njs-profile"
                    className="text-gray-500 hover:text-gray-800"
                  >
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
