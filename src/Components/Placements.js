import React from 'react';
import './Placements.css';

const companies = [
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com', role: 'Software Engineer', package: '45 LPA' },
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com', role: 'Full Stack Developer', package: '38 LPA' },
  { name: 'Amazon', logo: 'https://logo.clearbit.com/amazon.com', role: 'Cloud Engineer', package: '35 LPA' },
  { name: 'Infosys', logo: 'https://logo.clearbit.com/infosys.com', role: 'Systems Engineer', package: '12 LPA' },
  { name: 'TCS', logo: 'https://logo.clearbit.com/tcs.com', role: 'Software Developer', package: '10 LPA' },
  { name: 'Wipro', logo: 'https://logo.clearbit.com/wipro.com', role: 'Project Engineer', package: '11 LPA' },
  { name: 'Accenture', logo: 'https://logo.clearbit.com/accenture.com', role: 'Associate Developer', package: '9 LPA' },
  { name: 'Cognizant', logo: 'https://logo.clearbit.com/cognizant.com', role: 'Programmer Analyst', package: '8 LPA' },
  { name: 'IBM', logo: 'https://logo.clearbit.com/ibm.com', role: 'Data Engineer', package: '14 LPA' },
  { name: 'Capgemini', logo: 'https://logo.clearbit.com/capgemini.com', role: 'Software Analyst', package: '10 LPA' },
  { name: 'HCL', logo: 'https://logo.clearbit.com/hcltech.com', role: 'Tech Lead', package: '13 LPA' },
  { name: 'Zoho', logo: 'https://logo.clearbit.com/zoho.com', role: 'UI Developer', package: '15 LPA' },
];

const Placements = () => {
  return (
    <div className="placements-page">
      <div className="placements-hero">
        <h1>Our Placement Partners</h1>
        <p>500+ students placed in top MNC companies worldwide</p>
      </div>

      <div className="stats-bar">
        <div className="stat"><h2>500+</h2><p>Students Placed</p></div>
        <div className="stat"><h2>100+</h2><p>Partner Companies</p></div>
        <div className="stat"><h2>45 LPA</h2><p>Highest Package</p></div>
        <div className="stat"><h2>95%</h2><p>Placement Rate</p></div>
      </div>

      <div className="companies-grid">
        {companies.map((company) => (
          <div className="company-card" key={company.name}>
            <img src={company.logo} alt={company.name} onError={(e) => { e.target.style.display = 'none'; }} />
            <h3>{company.name}</h3>
            <p className="role">{company.role}</p>
            <span className="package">{company.package}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Placements;
