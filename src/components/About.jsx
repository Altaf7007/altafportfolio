import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    "PhD in relevant field",
    "Extensive experience in Academia & Industry",
    "Published Researcher",
    "Expert in Grant Proposal Writing",
    "Corporate Trainer & Consultant",
    "INGO Project Specialist"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Dr. Samo</h2>

        <div className="about-grid">
          <div className="about-content glass">
            <h3>Bridging the Gap Between Theory & Practice</h3>
            <p>
              With a profound commitment to excellence, Dr. Altaf Samo has dedicated his career to empowering organizations and individuals through strategic insights and evidence-based practices.
            </p>
            <p>
              His work spans across academia, industry, and INGOs, creating a unique intersection of knowledge that drives innovation and sustainable growth. Whether it's crafting winning grant proposals, conducting rigorous research, or delivering transformative training, Dr. Samo brings a wealth of expertise to every project.
            </p>

            <ul className="about-highlights">
              {highlights.map((item, index) => (
                <li key={index}>
                  <CheckCircle2 className="highlight-icon" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-stats">
            <div className="stat-card glass">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">20+</span>
              <span className="stat-label">Grants Secured</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">100+</span>
              <span className="stat-label">Training Sessions</span>
            </div>
            <div className="stat-card glass">
              <span className="stat-number">15+</span>
              <span className="stat-label">Publications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
