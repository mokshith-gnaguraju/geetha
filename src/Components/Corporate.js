import React from 'react'
import './Corporate.css'

const companies = [
  { name: 'Google',    color: '#4285F4', bg: '#e8f0fe' },
  { name: 'Microsoft', color: '#00a4ef', bg: '#e6f4ff' },
  { name: 'Amazon',    color: '#FF9900', bg: '#fff4e0' },
  { name: 'Apple',     color: '#555555', bg: '#f0f0f0' },
  { name: 'IBM',       color: '#1F70C1', bg: '#e0eeff' },
  { name: 'Infosys',   color: '#007CC3', bg: '#e0f2ff' },
  { name: 'TCS',       color: '#C00000', bg: '#ffe0e0' },
  { name: 'Wipro',     color: '#341C6B', bg: '#ede8f7' },
  { name: 'Accenture', color: '#A100FF', bg: '#f3e0ff' },
  { name: 'Deloitte',  color: '#86BC25', bg: '#f0f9e0' },
  { name: 'Capgemini', color: '#0070AD', bg: '#e0f0ff' },
  { name: 'Oracle',    color: '#F80000', bg: '#ffe0e0' },
]

const Corporate = () => {
  return (
    <div className="corporate-section">
      <h2>Our Corporate Partners</h2>
      <p>Trusted by leading MNC companies worldwide</p>
      <div className="corporate-grid">
        {companies.map((c) => (
          <div className="corporate-logo" key={c.name} style={{ background: c.bg }}>
            <span style={{ color: c.color }}>{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Corporate
