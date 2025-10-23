import './techstack.css';

const TechStack = () => {
  const techs = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind'];

  return (
    <section id="tech" className="tech-stack">
      <h2>Tech Stack</h2>
      <div className="tech-grid">
        {techs.map((tech, idx) => (
          <div key={idx} className="tech-item">{tech}</div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
