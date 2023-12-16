// Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our application!</p>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;
