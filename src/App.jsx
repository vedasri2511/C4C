import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Background Component for common background styling
const BackgroundSection = ({ children }) => (
  <div className="p-8 text-center text-2xl bg-cover bg-center h-screen flex items-center justify-center" style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/diverse-hands-joined-together-forming-globe_868783-21632.jpg')` }}>
    <div className="bg-black bg-opacity-50 p-8 rounded-xl text-white">
      {children}
    </div>
  </div>
);

// Pages
const Home = () => (
  <BackgroundSection>
    <h1 className="text-5xl font-bold">Welcome to Connect for Cause</h1>
    <p className="text-xl mt-4">Bridging the gap between communities and NGOs</p>
  </BackgroundSection>
);

const About = () => (
  <div className="p-8 text-center text-2xl">
    <img src="https://i.pinimg.com/originals/c1/45/43/c14543641806429d8a7dfc53f954d799.jpg" alt="About Us" className="w-80 mx-auto rounded-lg" />
    <p className="mt-6">This web application serves as a platform connecting NGOs with the community to facilitate waste management initiatives. Users can report garbage-affected areas, enabling NGOs to coordinate and execute cleanup efforts efficiently. By fostering collaboration, it promotes cleaner and healthier communities.</p>
  </div>
);

const Contact = () => (
  <BackgroundSection>
    <h2>Contact Us</h2>
    <p>📞 9030195814 - Sonali</p>
    <p>📞 7013907298 - Veda</p>
    <p>📧 sonalibanapuram@gmail.com</p>
    <p>📧 vedasri2511@gmail.com</p>
  </BackgroundSection>
);

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('Please fill in all fields');
    } else {
      setError('');
      alert('Login successful');
    }
  };

  return (
    <BackgroundSection>
      <h2 className="text-3xl font-bold">Login Page</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 rounded-lg text-black" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 rounded-lg text-black" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 rounded-lg text-black" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-yellow-400 text-black py-2 px-6 rounded-lg">Login</button>
      </form>
    </BackgroundSection>
  );
};

const Register = () => (
  <div className="p-8 text-center text-2xl">Register Page</div>
);

// Header Component
const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md">
      <nav>
        <ul className="flex justify-center space-x-8">
          <li><Link to="/" className="text-lg font-medium hover:text-yellow-400">Home</Link></li>
          <li><Link to="/about" className="text-lg font-medium hover:text-yellow-400">About</Link></li>
          <li><Link to="/contact" className="text-lg font-medium hover:text-yellow-400">Contact</Link></li>
          <li><Link to="/login" className="text-lg font-medium hover:text-yellow-400">Log In</Link></li>
          <li><Link to="/register" className="text-lg font-medium hover:text-yellow-400">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      © 2025 Connect for Cause | All Rights Reserved
    </footer>
  );
};

// App Component
const App = () => {
  return (
    <Router>
      <Header />
      <main className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
