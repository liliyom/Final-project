import React, { useState } from "react";
import Header from "../layout/header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data: ", formData);
  };

  return (
         <div>
<Header></Header>
    <div className="flex justify-evenly h-screen bg-white text-white p-8">
    <div className="flex flex-col justify-center max-w-md border border-black p-4 bg-red-900" >
    <h1 className="text-4xl font-bold mb-5">Contact Me</h1>
    <h2 className="text-2xl mb-3">Get in touch</h2>
    <p className="text-lg mb-2">Email: developer@javascript.com</p>
    <p className="text-lg mb-6">Phone: +65 XXX XXX</p>
    <p className="text-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula
      eu nunc et sollicitudin. Cras pulvinar nisi at imperdiet pharetra.
    </p>
  </div>

  <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full max-w-lg bg-red-900 border border-black px-3 py-1">
    <div className="flex space-x-4 mb-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full p-3 text-black border border-black rounded-md focus:outline-none bg-transparent"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 text-black border border-black rounded-md focus:outline-none bg-transparent"
      />
    </div>
    <div className="mb-6">
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="w-full p-3 text-black border border-black rounded-md focus:outline-none bg-transparent h-32"
      />
    </div>
    <button
      type="submit"
      className="w-24 py-2 border border-black rounded-md hover:bg-red-900 hover:text-white transition duration-300"
    >
      Send
    </button>
  </form>
</div>
</div> 
  );
};

export default Contact;
