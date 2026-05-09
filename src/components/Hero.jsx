import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <h2 className="hero-subtitle">Expert Consultancy & Research</h2>
          <h1 className="hero-title">
            Empowering <span className="highlight">Academia & Industry</span> Through Strategic Insights.
          </h1>
          <p className="hero-description">
            Dr. Altaf Samo offers comprehensive services in research, training, consultancy, and grant proposal writing. Bridging the gap between theory and practice for impactful outcomes.
          </p>
          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">
              Explore Services <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn btn-outline">
              Work With Me
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-wrapper glass">
            {/* Placeholder for Dr. Samo's Image */}
            <div className="abstract-shape">
               <BookOpen size={64} className="hero-icon" />
            </div>
            <div className="floating-badge badge-1 glass">
              <span className="badge-value">10+</span>
              <span className="badge-text">Years Experience</span>
            </div>
            <div className="floating-badge badge-2 glass">
              <span className="badge-value">100%</span>
              <span className="badge-text">Client Success</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
