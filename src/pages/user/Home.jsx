import React from "react";
import "../../styles/user/home.css"

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to SoleVera</h1>
        <p>Step intos style with our premium footwear collection</p>
      </header>

      <main className="home-main">
        <button className="shop-button">Shop Now</button>
        <img
          src="/shoes-hero.png"
          alt="Stylish Shoes"
          className="hero-image"
        />
      </main>

      <footer className="home-footer">
        © 2026 SoleVera. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;