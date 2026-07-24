import React, { useState, useEffect } from 'react';

const mnc = [
    // Row 1
    {
        name: 'Google',
        role: 'Software Engineer',
        color: '#4285F4',
        hover: 'linear-gradient(135deg, #4285F4, #0d47a1)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.3-7.7 19.3-19.3 0-1.3-.1-2.5-.3-3.7z" />
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.6 26.9 36 24 36c-5.2 0-9.5-3.3-11.2-8H6.4C9.7 35.6 16.3 44 24 44z" />
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.4-2.3 4.4-4.2 5.8l6.2 5.2C40.9 35.3 44 30 44 24c0-1.3-.1-2.5-.4-4z" />
            </svg>
        ),
    },
    {
        name: 'Microsoft',
        role: 'Cloud Developer',
        color: '#00A4EF',
        hover: 'linear-gradient(135deg, #00A4EF, #004e8c)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <rect x="2" y="2" width="21" height="21" fill="#F25022" />
                <rect x="25" y="2" width="21" height="21" fill="#7FBA00" />
                <rect x="2" y="25" width="21" height="21" fill="#00A4EF" />
                <rect x="25" y="25" width="21" height="21" fill="#FFB900" />
            </svg>
        ),
    },
    {
        name: 'Amazon',
        role: 'AWS Solutions Architect',
        color: '#FF9900',
        hover: 'linear-gradient(135deg, #FF9900, #c75300)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <path fill="#FF9900" d="M14 28c0 1.1.4 2 1.1 2.7.7.7 1.6 1 2.7 1 .8 0 1.5-.2 2.1-.6.6-.4 1-.9 1.3-1.6l1.8.5c-.4 1.1-1.1 2-2 2.6-.9.6-2 .9-3.2.9-1.6 0-2.9-.5-3.9-1.5-1-.9-1.5-2.2-1.5-3.8 0-1.5.5-2.8 1.5-3.7 1-.9 2.3-1.4 3.9-1.4 1.2 0 2.2.3 3.1.9.9.6 1.5 1.4 1.9 2.5l-1.8.5c-.3-.7-.7-1.3-1.3-1.6-.6-.4-1.3-.5-2-.5-1.1 0-2 .3-2.7 1C14.4 26 14 26.9 14 28z" />
                <path fill="#FF9900" d="M8 34c5.5 3.5 12.5 5.5 19.5 4.5 5-.7 9.5-2.7 13-5.5.5-.4.1-1-.5-.7-3.8 1.5-7.9 2.4-12.2 2.4-4.5 0-8.8-.9-12.7-2.6-.6-.2-1 .4-.5.8l-6.6-1z" />
                <path fill="#FF9900" d="M37.5 31.5c-.7-.9-4.5-.4-6.2-.2-.5.1-.6-.4-.1-.7 3-2.1 7.9-1.5 8.5-.8.6.7-.2 5.6-3 7.9-.4.3-.9.2-.7-.3.6-1.6 2.2-5 1.5-5.9z" />
            </svg>
        ),
    },
    {
        name: 'Meta',
        role: 'React Developer',
        color: '#0082FB',
        hover: 'linear-gradient(135deg, #0082FB, #003580)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <path fill="#0082FB" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z" />
                <path fill="#fff" d="M29.6 18h-2.4c-.9 0-1.2.4-1.2 1.3V21H30l-.5 3.5h-3.5V34h-3.5V24.5H20V21h2.5v-2.1C22.5 15.9 24 14 26.9 14c1.4 0 2.7.1 2.7.1V18z" />
            </svg>
        ),
    },
    // Row 2
    {
        name: 'Apple',
        role: 'iOS Developer',
        color: '#555555',
        hover: 'linear-gradient(135deg, #555555, #111111)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <path fill="#555" d="M35.1 25.6c0-4.5 3.7-6.7 3.8-6.8-2.1-3-5.3-3.4-6.4-3.5-2.7-.3-5.3 1.6-6.7 1.6-1.4 0-3.5-1.5-5.7-1.5-2.9.1-5.6 1.7-7.1 4.3-3 5.3-.8 13 2.2 17.2 1.4 2.1 3.1 4.4 5.4 4.3 2.1-.1 3-1.4 5.6-1.4 2.6 0 3.3 1.4 5.6 1.3 2.3 0 3.8-2.1 5.2-4.2 1.7-2.4 2.3-4.7 2.4-4.8-.1 0-4.3-1.6-4.3-6.5zM30.5 12.4c1.2-1.4 2-3.4 1.8-5.4-1.7.1-3.8 1.2-5 2.6-1.1 1.3-2.1 3.3-1.8 5.2 1.9.1 3.8-1 5-2.4z" />
            </svg>
        ),
    },
    {
        name: 'Netflix',
        role: 'UI/UX Engineer',
        color: '#E50914',
        hover: 'linear-gradient(135deg, #E50914, #8b0000)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <path fill="#E50914" d="M12 6h6l6 18V6h6v36h-6L18 24v18h-6z" />
                <path fill="#B0060F" d="M24 24l6 18h-6L18 24z" />
            </svg>
        ),
    },
    {
        name: 'IBM',
        role: 'Data Engineer',
        color: '#1F70C1',
        hover: 'linear-gradient(135deg, #1F70C1, #0a3d6e)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <rect x="6" y="12" width="36" height="4" rx="1" fill="#1F70C1" />
                <rect x="6" y="20" width="36" height="4" rx="1" fill="#1F70C1" />
                <rect x="6" y="28" width="36" height="4" rx="1" fill="#1F70C1" />
                <rect x="6" y="36" width="36" height="4" rx="1" fill="#1F70C1" />
                <rect x="10" y="16" width="28" height="4" rx="1" fill="#fff" />
                <rect x="10" y="24" width="28" height="4" rx="1" fill="#fff" />
                <rect x="10" y="32" width="28" height="4" rx="1" fill="#fff" />
            </svg>
        ),
    },
    {
        name: 'Infosys',
        role: 'Full Stack Developer',
        color: '#007CC3',
        hover: 'linear-gradient(135deg, #007CC3, #004a75)',
        logo: (
            <svg viewBox="0 0 48 48" width="52" height="52">
                <circle cx="24" cy="24" r="18" fill="#007CC3" />
                <text x="24" y="30" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="Arial">infy</text>
            </svg>
        ),
    },
];

const MNCCard = ({ company }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: hovered ? company.hover : 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(12px)',
                border: hovered ? `1.5px solid ${company.color}` : '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '30px 20px',
                flex: '1 1 0',
                minWidth: '0',
                textAlign: 'center',
                cursor: 'pointer',
                transform: hovered ? 'translateY(-10px) scale(1.04)' : 'translateY(0) scale(1)',
                boxShadow: hovered ? `0 20px 50px rgba(0,0,0,0.5), 0 0 25px ${company.color}44` : '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            }}
        >
            {/* Glow blob */}
            <div style={{
                position: 'absolute', top: '-40%', left: '-40%',
                width: '180%', height: '180%',
                background: `radial-gradient(circle, ${company.color}33 0%, transparent 65%)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
            }} />

            {/* Logo circle */}
            <div style={{
                width: '74px', height: '74px', borderRadius: '50%',
                background: hovered ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
                border: `2px solid ${hovered ? company.color : 'rgba(255,255,255,0.15)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                transition: 'all 0.35s',
                position: 'relative', zIndex: 1,
                boxShadow: hovered ? `0 0 20px ${company.color}88` : 'none',
            }}>
                {company.logo}
            </div>

            <h3 style={{
                color: '#fff', fontSize: '1.1rem', fontWeight: 800,
                margin: '0 0 6px', position: 'relative', zIndex: 1,
                textShadow: hovered ? `0 0 14px ${company.color}` : 'none',
                transition: 'text-shadow 0.3s',
            }}>{company.name}</h3>

            <p style={{
                color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
                fontSize: '0.8rem', margin: 0, fontWeight: 500,
                position: 'relative', zIndex: 1, transition: 'color 0.3s',
            }}>{company.role}</p>

            {/* Hired badge on hover */}
            <div style={{
                marginTop: '14px',
                display: 'inline-block',
                background: hovered ? 'rgba(255,255,255,0.2)' : 'transparent',
                border: `1px solid ${hovered ? 'rgba(255,255,255,0.4)' : 'transparent'}`,
                borderRadius: '20px',
                padding: '3px 14px',
                fontSize: '0.72rem',
                color: '#fff',
                fontWeight: 600,
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(6px)',
                transition: 'all 0.3s ease',
                position: 'relative', zIndex: 1,
            }}>✅ Hiring Our Students</div>
        </div>
    );
};

const students = [
    { name: 'Aisha Khan', course: 'React Developer', initials: 'AK', color: '#e63946' },
    { name: 'Ravi Kumar', course: 'Python & ML Engineer', initials: 'RK', color: '#457b9d' },
    { name: 'Sofia Martinez', course: 'Full Stack Developer', initials: 'SM', color: '#2a9d8f' },
    { name: 'James Lee', course: 'UI/UX Designer', initials: 'JL', color: '#f4a261' },
    { name: 'Priya Nair', course: 'Data Scientist', initials: 'PN', color: '#6a4c93' },
];

const Archi = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % students.length), 2500);
        return () => clearInterval(timer);
    }, []);

    const s = students[current];
    const row1 = mnc.slice(0, 4);
    const row2 = mnc.slice(4, 8);

    return (
        <div style={styles.wrapper}>
            <p style={styles.badge}>🏢 OUR RECRUITERS</p>
            <h2 style={styles.heading}>Top MNC Companies Hiring Our Students</h2>
            <p style={styles.sub}>AchieversIT graduates are placed in the world's leading tech companies</p>

            {/* Row 1 */}
            <div style={styles.row}>{row1.map((c, i) => <MNCCard key={i} company={c} />)}</div>
            {/* Row 2 */}
            <div style={{ ...styles.row, marginBottom: '60px' }}>{row2.map((c, i) => <MNCCard key={i} company={c} />)}</div>

            {/* Student Slideshow */}
            <h3 style={styles.slideTitle}>🎓 Our Success Stories</h3>
            <div style={styles.slideBox}>
                <div style={{ ...styles.avatar, background: s.color }}>{s.initials}</div>
                <h4 style={styles.slideName}>{s.name}</h4>
                <p style={styles.slideCourse}>{s.course}</p>
                <div style={styles.dots}>
                    {students.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setCurrent(i)}
                            style={{ ...styles.dot, background: i === current ? '#e63946' : 'rgba(255,255,255,0.3)', transform: i === current ? 'scale(1.4)' : 'scale(1)' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles = {
    wrapper: { textAlign: 'center', padding: '70px 40px', background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)', overflow: 'hidden' },
    badge: { display: 'inline-block', background: 'rgba(230,57,70,0.15)', color: '#e63946', border: '1px solid #e63946', borderRadius: '20px', padding: '4px 16px', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '14px', fontWeight: 700 },
    heading: { fontSize: '2rem', color: '#fff', margin: '0 0 10px', fontWeight: 800 },
    sub: { color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: '40px' },
    row: { display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'nowrap', marginBottom: '20px' },
    slideTitle: { color: '#fff', fontSize: '1.4rem', fontWeight: 700, marginBottom: '30px' },
    slideBox: { display: 'inline-flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '24px', padding: '40px 60px' },
    avatar: { width: '90px', height: '90px', borderRadius: '50%', color: '#fff', fontSize: '2rem', lineHeight: '90px', fontWeight: 800, marginBottom: '16px' },
    slideName: { color: '#fff', fontSize: '1.2rem', fontWeight: 700, margin: '0 0 6px' },
    slideCourse: { color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', marginBottom: '24px' },
    dots: { display: 'flex', gap: '10px', justifyContent: 'center' },
    dot: { width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer', display: 'inline-block', transition: 'all 0.3s' },
};

export default Archi;
