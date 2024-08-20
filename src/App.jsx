import Navbar from "./components/Navbar";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  const [section, setSection] = useState('home')
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: "Epilogue, 'Noto Sans', sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Router>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route exact path="/servicios" element={<Services />} /> 
                <Route exact path="/contacto" element={<Contact />} /> 
                <Route exact path="/blog" element={<Blog />} /> 
              </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

