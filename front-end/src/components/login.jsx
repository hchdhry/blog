import React, { useEffect, useState } from 'react';
import '../App.css';


const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function loginRequest(){
    try{ const req = await fetch("http://localhost:3000/login",
    {method:"POST",
    'Content-Type': 'application/json',
    body:JSON.stringify({
      username:username,
      password:password
    })

  })
  const data = await req.json();
  console.log(data);
     
    }
    catch(err){
console.log(`login error:${err}`)
    }
   }
  const handleLogin = () => {
   loginRequest()
  
   };

 

  return (
    <div className="App">
      <h1>Login</h1>
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
