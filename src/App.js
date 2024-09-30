import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

import Navbar from "./components/Navbar";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout> <Home /></Layout>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
