import React from 'react';

const stub = (title, emoji) => () => (
  <div style={{ textAlign: 'center', padding: '80px 20px', color: '#e0e0e0', background: '#0f0c29', minHeight: '80vh' }}>
    <div style={{ fontSize: '3rem' }}>{emoji}</div>
    <h2 style={{ color: '#f4a261', fontSize: '2rem', margin: '16px 0 8px' }}>{title}</h2>
    <p style={{ color: '#aaa' }}>This section is coming soon. Stay tuned!</p>
  </div>
);

export const InternshipPage   = stub('Internship Program', '🎓');
export const ReviewsPage      = stub('Student Reviews', '⭐');
export const BlogPage         = stub('Blog & Articles', '📝');
export const StudentPortal    = stub('Student Portal', '🖥️');
export const ResultsPage      = stub('Results', '📊');
export const CertificatePage  = stub('Certificate Verification', '🏆');
