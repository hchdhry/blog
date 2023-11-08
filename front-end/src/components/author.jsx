import { useState } from "react";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import "../app.css";
import { set } from "mongoose";

const Author = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleStatusClick = () => {
    navigate('/');
  };

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const req = await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, text: message })
      });

      if (req.ok) {
        setStatus("click here to see post");
      } else {
        setError("error");
      }
    } catch (err) {
      setError("error");
    }
  }

  return (
    <div className="Author">
      {status && <p style={{ color: 'green' }} onClick={handleStatusClick}>{status}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h1>Make Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Author;
