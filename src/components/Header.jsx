// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Keeper</h1>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/">Home</Link>
      </nav>

      <style>
        {`
          header {
            background-color: #333;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-family: Arial, sans-serif;
          }

          h1 {
            font-size: 1.8rem;
            margin: 0;
          }

          nav {
            display: flex;
            gap: 20px;
          }

          nav a {
            color: white;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.3s ease;
          }

          nav a:hover {
            color: #ff6347; /* Tomato color on hover */
          }
        `}
      </style>
    </header>
  );
}

export default Header;
