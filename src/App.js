import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import RegisterAsVolunteer from "./pages/RegisterAsVolunteer";
import RegisterAsNgo from "./pages/RegisterAsNgo";

const App = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/volunteer" element={<RegisterAsVolunteer />} />
          <Route path="/register/ngo" element={<RegisterAsNgo />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);

export default App;
