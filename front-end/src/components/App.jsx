// App.jsx or App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './login';
import Home from './home';
import Author from "./author"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/author"element={<Author/>}/>
      </Routes>
    </Router>
  );
}

export default App;
