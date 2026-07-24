import React from 'react';

const techs = [
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React', desc: 'A JavaScript library for building fast and interactive user interfaces.', rating: 4.8, reviews: 1240 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js', desc: 'A runtime environment to execute JavaScript on the server side.', rating: 4.7, reviews: 980 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python', desc: 'A versatile language used in web, data science, and AI development.', rating: 4.9, reviews: 2100 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript', desc: 'The core programming language of the web for dynamic content.', rating: 4.7, reviews: 1870 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript', desc: 'A strongly typed superset of JavaScript for scalable applications.', rating: 4.6, reviews: 760 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java', desc: 'A platform-independent language widely used in enterprise applications.', rating: 4.5, reviews: 1530 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', name: 'C++', desc: 'A powerful language used for system/software and game development.', rating: 4.4, reviews: 890 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB', desc: 'A NoSQL database designed for high-volume data storage.', rating: 4.6, reviews: 670 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL', desc: 'An open-source relational database management system.', rating: 4.5, reviews: 1120 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker', desc: 'A platform to develop, ship and run apps in containers.', rating: 4.8, reviews: 940 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', name: 'Kubernetes', desc: 'An open-source system for automating container deployment and scaling.', rating: 4.7, reviews: 580 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg', name: 'AWS', desc: 'A comprehensive cloud platform offering 200+ cloud services.', rating: 4.8, reviews: 2050 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', name: 'Angular', desc: 'A TypeScript-based framework for building web applications.', rating: 4.5, reviews: 810 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', name: 'Vue.js', desc: 'A progressive JavaScript framework for building user interfaces.', rating: 4.6, reviews: 720 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django', desc: 'A high-level Python web framework for rapid development.', rating: 4.6, reviews: 650 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', name: 'Flutter', desc: 'A UI toolkit for building natively compiled cross-platform apps.', rating: 4.7, reviews: 890 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', name: 'TensorFlow', desc: 'An open-source machine learning framework by Google.', rating: 4.8, reviews: 1340 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', name: 'Git', desc: 'A distributed version control system for tracking code changes.', rating: 4.9, reviews: 1760 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', name: 'Linux', desc: 'An open-source OS powering servers, desktops and embedded systems.', rating: 4.8, reviews: 1430 },
  { logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', name: 'GraphQL', desc: 'A query language for APIs enabling precise and efficient data fetching.', rating: 4.5, reviews: 510 },
];

const Stars = ({ rating }) => (
  <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginBottom: '4px' }}>
    {[1, 2, 3, 4, 5].map((star) => (
      <span key={star} style={{ fontSize: '16px', color: star <= Math.round(rating) ? '#f5a623' : '#ddd' }}>★</span>
    ))}
  </div>
);

const cardColors = [
  '#e8f4fd', '#fef9e7', '#eafaf1', '#fdf2f8',
  '#fef5e4', '#eaf4fb', '#f9ebea', '#f0f3ff',
  '#e8f8f5', '#fff3e0', '#f3e5f5', '#e1f5fe',
  '#fce4ec', '#e8f5e9', '#fff8e1', '#ede7f6',
  '#e0f7fa', '#fbe9e7', '#f1f8e9', '#e3f2fd',
];

const TechCards = () => {
  return (
    <div style={{ padding: '60px 40px', background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(10px)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Header - centered */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <p style={{ display: 'inline-block', background: 'rgba(26,26,46,0.08)', color: '#1a1a2e', border: '1px solid rgba(26,26,46,0.2)', borderRadius: '20px', padding: '4px 18px', fontSize: '0.78rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '12px' }}>
            🎓 OUR COURSES
          </p>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1a1a2e', margin: '0 0 10px' }}>
            Popular Career Oriented Courses
          </h2>
          <p style={{ color: '#666', fontSize: '15px', margin: '0 0 8px' }}>
            Industry-relevant skills taught by expert trainers
          </p>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #f4a261, #e07b39)', borderRadius: '2px', margin: '0 auto' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {techs.map((tech, i) => (
            <div key={i}
              style={{
                background: cardColors[i % cardColors.length],
                borderRadius: '14px',
                padding: '24px 20px',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1.5px solid transparent',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.13)';
                e.currentTarget.style.borderColor = 'rgba(244,162,97,0.4)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.07)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div>
                <img src={tech.logo} alt={tech.name} style={{ width: '72px', height: '72px', marginBottom: '14px', imageRendering: 'auto' }} />
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1a1a2e', marginBottom: '8px', letterSpacing: '-0.2px' }}>{tech.name}</h3>
                <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.65', margin: '0 0 16px' }}>{tech.desc}</p>
              </div>
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', paddingTop: '12px' }}>
                <Stars rating={tech.rating} />
                <div style={{ fontSize: '13px', color: '#888' }}>
                  <span style={{ fontWeight: 700, color: '#f5a623' }}>{tech.rating}</span>
                  &nbsp;({tech.reviews.toLocaleString()} reviews)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCards;
