import React from 'react';
import { GraduationCap, Building2, Globe2 } from 'lucide-react';
import './Audience.css';

const Audience = () => {
  const sectors = [
    {
      icon: <GraduationCap size={48} />,
      title: "Academia",
      description: "Partnering with universities and research institutions to elevate academic standards, secure research funding, and publish high-impact findings."
    },
    {
      icon: <Building2 size={48} />,
      title: "Industry",
      description: "Collaborating with corporate entities to optimize operations, train leadership teams, and conduct market-driven research for strategic advantage."
    },
    {
      icon: <Globe2 size={48} />,
      title: "INGOs",
      description: "Supporting International Non-Governmental Organizations with impact assessments, capacity building, and compelling grant proposals to drive social change."
    }
  ];

  return (
    <section id="audience" className="section audience-section">
      <div className="container">
        <h2 className="section-title">Target Sectors</h2>
        <div className="audience-grid">
          {sectors.map((sector, index) => (
            <div className="audience-card glass" key={index}>
              <div className="audience-icon">
                {sector.icon}
              </div>
              <h3 className="audience-title">{sector.title}</h3>
              <p className="audience-description">{sector.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Audience;
