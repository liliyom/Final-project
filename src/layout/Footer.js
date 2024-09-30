import React from 'react';

function Footer() {
  return (
    <footer className="bg-red-900 text-white py-4">
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