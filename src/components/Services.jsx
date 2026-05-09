import React from 'react';
import { Search, Presentation, Briefcase, FileSignature } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Search size={40} />,
      title: "Research",
      description: "Rigorous, methodology-driven academic and applied research to uncover insights and solve complex problems."
    },
    {
      icon: <Presentation size={40} />,
      title: "Training",
      description: "Customized corporate and academic training programs designed to enhance skills and build capacity."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Consultancy",
      description: "Strategic advisory services for businesses and INGOs to optimize performance and achieve objectives."
    },
    {
      icon: <FileSignature size={40} />,
      title: "Grant Proposal Writing",
      description: "Compelling, well-structured grant proposals that secure funding for critical projects and research initiatives."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card glass" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
