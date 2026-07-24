import React from 'react'

const stats = [
  { value: '8+', label: 'Years of Excellence' },
  { value: '10K+', label: 'Students Placed' },
  { value: '100%', label: 'Placement Support' },
  { value: '200+', label: 'Lab Hours' },
]

const Known = () => {
  return (
    <div style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)', padding: '70px 40px', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ display: 'inline-block', background: 'rgba(233,69,96,0.15)', color: '#e94560', border: '1px solid #e94560', borderRadius: '20px', padding: '4px 18px', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 700, marginBottom: '16px' }}>
            🎯 KNOW US BETTER
          </p>
          <h2 style={{ color: '#fff', fontSize: '2rem', fontWeight: 800, margin: '0 0 12px', textShadow: '0 0 30px rgba(233,69,96,0.3)' }}>
            Your Future Starts Here
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #e94560, #f4a261)', borderRadius: '2px', margin: '0 auto' }} />
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '50px' }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(233,69,96,0.25)',
              borderRadius: '16px',
              padding: '28px 20px',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(233,69,96,0.1)'; e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(233,69,96,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#e94560', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', fontWeight: 500, letterSpacing: '0.5px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '20px',
          padding: '40px 48px',
          backdropFilter: 'blur(10px)',
        }}>
          <p style={{ lineHeight: '2.1', color: '#d0d0d0', fontSize: '16px', textAlign: 'justify', textIndent: '35px', letterSpacing: '0.3px', margin: 0 }}>
            We, <strong style={{ color: '#fff' }}>AchieversIT</strong>, are here to assist you in gaining the best deal of knowledge and landing at your dream job. Fresher or experienced, we always have a hope to hop into new domains and fields to quicken up the pace in your career growth. With <strong style={{ color: '#f4a261' }}>8 years of outstanding quality training</strong> in the IT sector, AchieversIT has gained its own fame in leading individuals to their dream jobs. Whether your background is technical or non-technical, we offer a wide range of courses including <em style={{ color: '#a8c8ff' }}>Front-end Development, Back-end Courses, Mobile Development, Full Stack Development, Digital Marketing, Database Programming,</em> and <em style={{ color: '#a8c8ff' }}>Project Management</em> — all with flexible modes of learning such as Classroom Training, Live Virtual Instructor-Led Sessions, and Self-Study (e-Learning). Our key benefits include <strong style={{ color: '#f4a261' }}>90 hours of training, 200 hours of lab practical sessions, 100% placement support, industry-aligned curriculum,</strong> and <strong style={{ color: '#f4a261' }}>24×7 team support</strong> — all at a reasonable course fee.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Known
