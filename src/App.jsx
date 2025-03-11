import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Mentionslegales from "./pages/Mentionslegales";

import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 w-100">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<Mentionslegales />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
