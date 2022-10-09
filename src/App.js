import React from "react";
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Navbar from './Components/Navbar/Navbar'
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
