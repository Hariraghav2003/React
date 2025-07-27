import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About.js";
import Contact from "./Contact.js";
function Home() {
  return (
    <Router>
      <nav>
        |<Link to="/about">About</Link> |<Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Home;
