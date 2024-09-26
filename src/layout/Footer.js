// import React from 'react';

// function Footer() {
//   return (
//     <footer className="bg-red-950 text-white py-4">
//       <div className="container mx-auto text-center">
//         <h1 className="text-lg">Footer</h1>
//         <p className="mt-2">© 2024 MyWebsite. All rights reserved.</p>
//         <p>
//           Contact us at <a href="mailto:info@mywebsite.com" className="underline">info@mywebsite.com</a>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>© 2024 MyWebsite. All rights reserved.</p>
        <p>Contact us at <a href="mailto:info@mywebsite.com">info@mywebsite.com</a></p>
      </div>
    </footer>
  );
};

// Inline styling example (you can also use CSS file)
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px 0',
  textAlign: 'center',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

export default Footer;
