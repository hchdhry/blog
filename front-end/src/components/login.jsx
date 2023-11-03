import React, { useEffect, useState } from 'react';
import '../App.css';


const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    async function loginRequest(){
      try{fetch("url",
      {method:"POST",
      'Content-Type': 'application/json',
      body:JSON.stringify({
        username:username,
        password:password
      })
  
    })
       
      }
      catch(err){
  console.log(`login error:${err}`)
      }
     }
  
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
