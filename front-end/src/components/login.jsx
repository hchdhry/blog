import React, { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';



const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
 

  async function loginRequest(setError) {
    try {
      const req = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await req.json();

      if (req.ok) {  
      console.log("Authentication successful:", data);
      navigate('/author');
      
      } else {
        console.error("Authentication failed:", data);
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(`Login error: ${err.message}`);
    }
  }

  const handleLogin = () => {
    loginRequest(setError);
  };

  return (
    <div className="App">
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LogIn;
