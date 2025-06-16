import React from 'react';
import '../Css/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <h1>🎬 FilmFlicks</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#bookings">Bookings</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
