import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-red-900 text-white py-4">
      <div className="text-left pl-20">
        <div className="text-left">
          <h1 className="font-bold">Medical ChatBot</h1>
          <p className="font-extralight">Health & Counselling</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum
            enim sequi nisi fuga odit libero? Repellat explicabo, optio tempora
            facere asperiores, assumenda inventore aperiam velit rem perferendis
            ea qui
          </p>
        </div>
        <div className="font">
          <h1 className="font-bold">Quick links</h1>
          <ul className="flex row">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact us
              </Link>
            </li>
          </ul>{" "}
        </div>
        <div>
          <h1 className="font-bold">Services</h1>
          <ul>
            <li>Individual Counselling</li>
            <li>Couple Counselling</li>
            <li>Family Counselling</li>
            <li>Career Counselling</li>
          </ul>
        </div>
        <div className="container mx-auto text-center">
          <p className="mt-2">© 2024 MyWebsite. All rights reserved.</p>
          <p>
            Contact us at{" "}
            <a href="mailto:info@mywebsite.com" className="underline">
              info@mywebsite.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
