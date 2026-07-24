import React, { useState, useEffect } from 'react';

const slides = [
  { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=100&auto=format&fit=crop', label: 'Circuit Board' },
  { url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&q=100&auto=format&fit=crop', label: 'Coding' },
  { url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=100&auto=format&fit=crop', label: 'AI and Robotics' },
  { url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1920&q=100&auto=format&fit=crop', label: 'Laptops and Tech' },
  { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=100&auto=format&fit=crop', label: 'Server Room' },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', boxShadow: '0 10px 40px rgba(0,0,0,0.25)' }}>

      <img
        src={slides[current].url}
        alt={slides[current].label}
        style={{ width: '100%', height: '70vh', objectFit: current === 2 ? 'contain' : 'cover', display: 'block', background: '#000', imageRendering: 'auto' }}
      />

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }} />

      {/* Label + Button — fully centered */}
      <div style={{
        position: 'absolute', bottom: '70px', left: 0, right: 0,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
      }}>
        <div style={{ color: '#fff', fontSize: '24px', fontWeight: 800, letterSpacing: '2px', textShadow: '0 2px 12px rgba(0,0,0,0.9)', textAlign: 'center' }}>
          {slides[current].label}
        </div>
        <button style={{
          padding: '12px 36px', fontSize: '15px', fontWeight: 700,
          color: '#fff', background: 'linear-gradient(135deg, #ff8c00, #ff4500)',
          border: 'none', borderRadius: '50px', cursor: 'pointer',
          boxShadow: '0 6px 20px rgba(255,69,0,0.45)', letterSpacing: '0.5px',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.06)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(255,69,0,0.6)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,69,0,0.45)'; }}
        >
          Explore Courses
        </button>
      </div>

      {/* Dots — centered */}
      <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', alignItems: 'center' }}>
        {slides.map((_, i) => (
          <span key={i} onClick={() => setCurrent(i)} style={{
            width: i === current ? '24px' : '10px', height: '10px',
            borderRadius: '5px',
            background: i === current ? '#4fc3f7' : 'rgba(255,255,255,0.5)',
            cursor: 'pointer', display: 'inline-block', transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Slide counter */}
      <div style={{ position: 'absolute', top: '16px', right: '20px', background: 'rgba(0,0,0,0.55)', color: '#fff', fontSize: '13px', padding: '5px 12px', borderRadius: '20px', backdropFilter: 'blur(4px)' }}>
        {current + 1} / {slides.length}
      </div>

      {/* Prev / Next */}
      <button onClick={prev} style={btnStyle('left')}>&#8249;</button>
      <button onClick={next} style={btnStyle('right')}>&#8250;</button>
    </div>
  );
};

const btnStyle = (side) => ({
  position: 'absolute', top: '50%', [side]: '20px',
  background: 'rgba(255,255,255,0.15)',
  backdropFilter: 'blur(8px)',
  color: '#fff', border: '2px solid rgba(255,255,255,0.35)',
  borderRadius: '50%', width: '50px', height: '50px',
  fontSize: '30px', cursor: 'pointer',
  transform: 'translateY(-50%)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  transition: 'background 0.3s',
});

export default Slider;
