// src/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className=" mx-auto flex justify-between items-center">
        <div>
          <span>PK · en-US</span>
        </div>
        <div className="flex space-x-8">
          <div>
            <ul>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Help
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Privacy Settings
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Log in
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Cookie policy
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Company Details
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Explore
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Company
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Partners
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="hover:text-white">
                  Trips
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; Skyscanner Ltd 2002 – 2024
      </div>
    </footer>
  );
};

export default Footer;
