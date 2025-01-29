import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/home';
import AboutUs from './Pages/About/about';
import Blog from './Pages/Blogs/blogs';
import Services from './Pages/Services/services';
import Contact from './Pages/Contact/contact';
import Projects from './Pages/Projects/projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
