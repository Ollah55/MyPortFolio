import './hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Text content */}
        <div className="hero-text">
          <h1>Hi, I'm Taiwo Olanrewaju Moyosoreoluwa</h1>
          <h2>Frontend Developer</h2>
          <p>
            I craft responsive, user-friendly web interfaces using React and modern web technologies.
          </p>
          <a href="#projects" className="btn">See My Work</a>
        </div>

        {/* Profile image */}
        <div className="hero-image">
          <img src="/me.jpg" alt="Taiwo Olanrewaju Moyosoreoluwa" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
