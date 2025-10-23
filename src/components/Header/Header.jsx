import './header.css'
function Header() {
  return (
    <header className="main">

      <div className="left-nav">
        <h1>Taiwo</h1>
      </div>
      <div className="right-nav">
    
        <nav className="navbar">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#techstack">Tech Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
