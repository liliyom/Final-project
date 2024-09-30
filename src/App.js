import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Services from "./pages/Services";
import Footer from "./layout/Footer";
import Layout from "./layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Home />
            </Layout>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
