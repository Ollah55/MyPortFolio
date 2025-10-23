import { useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contacts';
import Footer from './components/Footer/Footer';
import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    document.querySelectorAll('section').forEach(section => observer.observe(section));

    function parallaxScroll() {
      document.querySelectorAll('.parallax-layer').forEach(layer => {
        const speed = 5000;
        const offset = window.pageYOffset;
        layer.style.transform = `translateY(${offset * speed}px)`;
      });
    }
    window.addEventListener('scroll', parallaxScroll);

    return () => {
      window.removeEventListener('scroll', parallaxScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="parallax-container">
        <div className="parallax-section">
          <div className="parallax-layer"></div>
          <Hero />
        </div>

        <div className="parallax-section">
          <div className="parallax-layer"></div>
          <About />
        </div>

        <div className="parallax-section">
          <div className="parallax-layer"></div>
          <Projects />
        </div>

        <div className="parallax-section">
          <div className="parallax-layer"></div>
          <TechStack />
        </div>

        <div className="parallax-section">
          <div className="parallax-layer"></div>
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;