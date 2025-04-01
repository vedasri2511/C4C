import React, { useState } from "react";
import BackgroundSection from "../components/BackgroundSection";


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
export default Login;