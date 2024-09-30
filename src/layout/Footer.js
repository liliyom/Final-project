import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-red-900 text-white py-4">
      <div className='pl-20 text-left'>
        <h1 className='font-bold'>Medical ChatBot</h1>
        <p className='font-extralight'>Health & Counselling</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eum enim sequi nisi fuga odit libero? 
          Repellat explicabo, optio tempora facere asperiores, assumenda inventore aperiam velit rem 
          perferendis ea qui</p>
      </div>
      <div className="container mx-auto text-center">
        <p className="mt-2">© 2024 MyWebsite. All rights reserved.</p>
        <p>
          Contact us at <a href="mailto:info@mywebsite.com" className="underline">info@mywebsite.com</a>
        </p>
      </div>
    </footer>
  );
}
export default Footer;