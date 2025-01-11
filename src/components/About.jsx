// src/pages/About.jsx
import React from "react";

function About() {
  return (
    <div>
      <h1>About Keeper App</h1>
      <p>This is a simple note-keeping application.</p>

      <style>{`
        div {
          background-color: #f4f4f9;
          padding: 20px;
          font-family: Arial, sans-serif;
        }

        h1 {
          color: #333;
          text-align: center;
          font-size: 2rem;
          margin-bottom: 15px;
        }

        p {
          color: #555;
          font-size: 1.1rem;
          text-align: center;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}

export default About;
