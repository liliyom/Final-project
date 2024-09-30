import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-red-900 text-white p-4 border-b-2 border-transparent">
      <div className="max-w-screen-lg mx-auto flex justify-between items-center">
        <div className="logo-container w-max h-auto mr-8">
          <Link to="/" className="text-xl font-bold">
            MyLogo
          </Link>
        </div>
        <div>
          <nav>
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <button className="bg-white text-red-900 font-bold py-2 px-4 rounded hover:bg-red-900 hover:text-white border border-white">
            CHAT-BOT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
