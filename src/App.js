
import "./App.css"
import {Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";

function App() {
  

  return (
    <div className="App">
    <header>
      <Navbar/>
    </header>
      <h1>welcome to react router</h1>
      <Routes>
      <Route path= "/" element ={ < Home /> }/>
      <Route path= "/about" element ={ < About /> }/>
      <Route path= "/contact" element ={ < Contact /> }/>


      </Routes>
    </div>
  );
}

export default App;