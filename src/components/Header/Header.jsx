import { useState } from "react";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="main">
      <div className="left-nav">
        <h1>Taiwo</h1>
      </div>

      <div className="right-nav">
        {/* Hamburger icon for mobile */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navbar */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#techstack" onClick={() => setMenuOpen(false)}>Tech Stack</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
