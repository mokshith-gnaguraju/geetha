import React, { useState, useEffect } from 'react';

const mnc = [
    {
        name: 'Google',
        role: 'Software Engineer',
        color: '#4285F4',
        hover: 'linear-gradient(135deg, #4285F4 0%, #0d47a1 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.3-7.7 19.3-19.3 0-1.3-.1-2.5-.3-3.7z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.6 26.9 36 24 36c-5.2 0-9.5-3.3-11.2-8H6.4C9.7 35.6 16.3 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.4-2.3 4.4-4.2 5.8l6.2 5.2C40.9 35.3 44 30 44 24c0-1.3-.1-2.5-.4-4z"/>
            </svg>
        ),
    },
    {
        name: 'Microsoft',
        role: 'Cloud Developer',
        color: '#00A4EF',
        hover: 'linear-gradient(135deg, #00A4EF 0%, #004e8c 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <rect x="2"  y="2"  width="21" height="21" fill="#F25022"/>
                <rect x="25" y="2"  width="21" height="21" fill="#7FBA00"/>
                <rect x="2"  y="25" width="21" height="21" fill="#00A4EF"/>
                <rect x="25" y="25" width="21" height="21" fill="#FFB900"/>
            </svg>
        ),
    },
    {
        name: 'Amazon',
        role: 'AWS Solutions Architect',
        color: '#FF9900',
        hover: 'linear-gradient(135deg, #FF9900 0%, #c75300 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <path fill="#FF9900" d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18 18-8.1 18-18S33.9 6 24 6z"/>
                <path fill="#fff" d="M14 28.5c3.5 2.5 8 3.8 12.5 3.3 3.2-.4 6.1-1.7 8.3-3.5.3-.3.1-.6-.3-.4-2.4 1-5 1.5-7.8 1.5-2.9 0-5.6-.6-8.1-1.7-.4-.1-.7.3-.4.5l-4.2.3z"/>
                <path fill="#fff" d="M32.5 26.8c-.4-.6-2.9-.3-4-.1-.3 0-.4-.2-.1-.5 1.9-1.3 5-.9 5.4-.5.4.5-.1 3.6-1.9 5.1-.3.2-.6.1-.4-.2.4-1 1.4-3.2 1-3.8z"/>
                <path fill="#fff" d="M29 18v-.9c0-.1.1-.2.2-.2h4c.1 0 .2.1.2.2v.8c0 .1-.1.3-.3.5l-2 2.9c.7 0 1.5.1 2.2.5.1.1.2.2.2.3v1c0 .1-.1.2-.3.1-1.2-.6-2.8-.7-4.1 0-.1.1-.3 0-.3-.1v-.9c0-.2.1-.4.2-.6l2.4-3.4H29c-.1 0-.2-.1-.2-.2z"/>
            </svg>
        ),
    },
    {
        name: 'Meta',
        role: 'React Developer',
        color: '#0082FB',
        hover: 'linear-gradient(135deg, #0082FB 0%, #003580 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <path fill="#0082FB" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4z"/>
                <path fill="#fff" d="M29.6 18h-2.4c-.9 0-1.2.4-1.2 1.3V21H30l-.5 3.5h-3.5V34h-3.5V24.5H20V21h2.5v-2.1C22.5 15.9 24 14 26.9 14c1.4 0 2.7.1 2.7.1V18z"/>
            </svg>
        ),
    },
    {
        name: 'Apple',
        role: 'iOS Developer',
        color: '#888888',
        hover: 'linear-gradient(135deg, #888888 0%, #111111 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <path fill="#888" d="M35.1 25.6c0-4.5 3.7-6.7 3.8-6.8-2.1-3-5.3-3.4-6.4-3.5-2.7-.3-5.3 1.6-6.7 1.6-1.4 0-3.5-1.5-5.7-1.5-2.9.1-5.6 1.7-7.1 4.3-3 5.3-.8 13 2.2 17.2 1.4 2.1 3.1 4.4 5.4 4.3 2.1-.1 3-1.4 5.6-1.4 2.6 0 3.3 1.4 5.6 1.3 2.3 0 3.8-2.1 5.2-4.2 1.7-2.4 2.3-4.7 2.4-4.8-.1 0-4.3-1.6-4.3-6.5zM30.5 12.4c1.2-1.4 2-3.4 1.8-5.4-1.7.1-3.8 1.2-5 2.6-1.1 1.3-2.1 3.3-1.8 5.2 1.9.1 3.8-1 5-2.4z"/>
            </svg>
        ),
    },
    {
        name: 'Netflix',
        role: 'UI/UX Engineer',
        color: '#E50914',
        hover: 'linear-gradient(135deg, #E50914 0%, #8b0000 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <rect width="48" height="48" rx="8" fill="#141414"/>
                <path fill="#E50914" d="M13 8h6l5 17V8h6v32h-6l-5-17v17h-6z"/>
            </svg>
        ),
    },
    {
        name: 'IBM',
        role: 'Data Engineer',
        color: '#1F70C1',
        hover: 'linear-gradient(135deg, #1F70C1 0%, #0a3d6e 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <rect x="5"  y="10" width="38" height="5" rx="1" fill="#1F70C1"/>
                <rect x="5"  y="19" width="38" height="5" rx="1" fill="#1F70C1"/>
                <rect x="5"  y="28" width="38" height="5" rx="1" fill="#1F70C1"/>
                <rect x="5"  y="37" width="38" height="5" rx="1" fill="#1F70C1"/>
                <rect x="10" y="14" width="28" height="5" rx="1" fill="#fff"/>
                <rect x="10" y="23" width="28" height="5" rx="1" fill="#fff"/>
                <rect x="10" y="32" width="28" height="5" rx="1" fill="#fff"/>
            </svg>
        ),
    },
    {
        name: 'Infosys',
        role: 'Full Stack Developer',
        color: '#007CC3',
        hover: 'linear-gradient(135deg, #007CC3 0%, #004a75 100%)',
        logo: (
            <svg viewBox="0 0 48 48" width="50" height="50">
                <circle cx="24" cy="24" r="20" fill="#007CC3"/>
                <text x="24" y="29" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="bold" fontFamily="Arial, sans-serif">infy</text>
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
                padding: '34px 20px 28px',
                flex: '1 1 0',
                minWidth: '0',
                textAlign: 'center',
                cursor: 'pointer',
                transform: hovered ? 'translateY(-12px) scale(1.04)' : 'translateY(0) scale(1)',
                boxShadow: hovered
                    ? `0 24px 48px rgba(0,0,0,0.5), 0 0 30px ${company.color}55`
                    : '0 4px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
            }}/>

            {/* Logo circle */}
            <div style={{
                width: '76px', height: '76px', borderRadius: '50%',
                background: hovered ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
                border: `2px solid ${hovered ? company.color : 'rgba(255,255,255,0.15)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
                transition: 'all 0.38s',
                position: 'relative', zIndex: 1,
                boxShadow: hovered ? `0 0 22px ${company.color}99` : 'none',
            }}>
                {company.logo}
            </div>

            <h3 style={{
                color: '#fff', fontSize: '1.05rem', fontWeight: 800,
                margin: '0 0 6px', position: 'relative', zIndex: 1,
                textShadow: hovered ? `0 0 16px ${company.color}` : 'none',
                transition: 'text-shadow 0.3s',
            }}>{company.name}</h3>

            <p style={{
                color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.45)',
                fontSize: '0.78rem', margin: '0 0 14px', fontWeight: 500,
                position: 'relative', zIndex: 1, transition: 'color 0.3s',
            }}>{company.role}</p>

            {/* Hiring badge */}
            <div style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '20px',
                padding: '3px 13px',
                fontSize: '0.7rem',
                color: '#fff',
                fontWeight: 600,
                opacity: hovered ? 1 : 0,
                transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                transition: 'all 0.3s ease 0.05s',
                position: 'relative', zIndex: 1,
            }}>✅ Hiring Our Students</div>
        </div>
    );
};

const stories = [
    [
        { name: 'Arjun Mehta',    role: 'Placed at Google',    pkg: '42 LPA', avatar: 'AM', color: '#4285F4', msg: '"AchieversIT transformed my career. The hands-on projects and mock interviews gave me the confidence to crack Google. Best decision of my life!"' },
        { name: 'Sneha Reddy',    role: 'Placed at Microsoft', pkg: '38 LPA', avatar: 'SR', color: '#00A4EF', msg: '"The mentors here are industry experts who genuinely care. I went from a fresher to a Microsoft engineer in just 6 months!"' },
        { name: 'Karthik Raj',    role: 'Placed at Amazon',    pkg: '35 LPA', avatar: 'KR', color: '#FF9900', msg: '"Real-world AWS projects during training made my Amazon interview feel like a walk in the park. Highly recommend AchieversIT!"' },
        { name: 'Divya Sharma',   role: 'Placed at Meta',      pkg: '40 LPA', avatar: 'DS', color: '#0082FB', msg: '"From zero React knowledge to Meta developer — AchieversIT made it possible with their structured curriculum and live projects."' },
    ],
    [
        { name: 'Rahul Nair',     role: 'Placed at Apple',     pkg: '45 LPA', avatar: 'RN', color: '#888888', msg: '"The iOS development track was incredibly detailed. AchieversIT prepared me for every round of the Apple interview process."' },
        { name: 'Priya Iyer',     role: 'Placed at Netflix',   pkg: '36 LPA', avatar: 'PI', color: '#E50914', msg: '"I never imagined working at Netflix. AchieversIT\'s UI/UX course and portfolio guidance made my dream a reality!"' },
        { name: 'Vikram Singh',   role: 'Placed at IBM',       pkg: '28 LPA', avatar: 'VS', color: '#1F70C1', msg: '"The data engineering modules were top-notch. IBM was impressed with my project work — all thanks to AchieversIT trainers."' },
        { name: 'Ananya Pillai',  role: 'Placed at Infosys',   pkg: '22 LPA', avatar: 'AP', color: '#007CC3', msg: '"AchieversIT gave me the skills and confidence to land my first job at Infosys. The placement support was outstanding!"' },
    ],
];

const cardThemes = [
    {
        borderRadius: '24px',
        bg: 'linear-gradient(145deg, rgba(66,133,244,0.08), rgba(13,71,161,0.18))',
        hoverBg: 'linear-gradient(145deg, rgba(66,133,244,0.28), rgba(13,71,161,0.45))',
        quoteColor: '#a8c8ff',
    },
    {
        borderRadius: '16px 40px 16px 40px',
        bg: 'linear-gradient(145deg, rgba(229,9,20,0.08), rgba(139,0,0,0.18))',
        hoverBg: 'linear-gradient(145deg, rgba(229,9,20,0.28), rgba(139,0,0,0.45))',
        quoteColor: '#ffaaaa',
    },
    {
        borderRadius: '40px 16px 40px 16px',
        bg: 'linear-gradient(145deg, rgba(31,112,193,0.08), rgba(10,61,110,0.18))',
        hoverBg: 'linear-gradient(145deg, rgba(31,112,193,0.28), rgba(10,61,110,0.45))',
        quoteColor: '#90caf9',
    },
    {
        borderRadius: '32px',
        bg: 'linear-gradient(145deg, rgba(0,124,195,0.08), rgba(0,74,117,0.18))',
        hoverBg: 'linear-gradient(145deg, rgba(0,124,195,0.28), rgba(0,74,117,0.45))',
        quoteColor: '#80deea',
    },
];

const StoryCard = ({ story, idx }) => {
    const [hovered, setHovered] = useState(false);
    const theme = cardThemes[idx % 4];
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                flex: '1 1 0', minWidth: 0,
                padding: '28px 22px 24px',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: theme.borderRadius,
                background: hovered ? theme.hoverBg : theme.bg,
                border: `1.5px solid ${hovered ? story.color : story.color + '44'}`,
                boxShadow: hovered
                    ? `0 20px 48px rgba(0,0,0,0.5), 0 0 28px ${story.color}44`
                    : `0 6px 24px ${story.color}18`,
                transform: hovered ? 'translateY(-10px) scale(1.03)' : 'translateY(0) scale(1)',
                transition: 'all 0.38s cubic-bezier(0.175,0.885,0.32,1.275)',
                cursor: 'pointer',
            }}
        >
            {/* animated top bar */}
            <div style={{
                position: 'absolute', top: 0, left: 0,
                height: '4px',
                width: hovered ? '100%' : '40%',
                background: `linear-gradient(90deg, ${story.color}, ${story.color}88)`,
                transition: 'width 0.4s ease',
                borderRadius: '4px 4px 0 0',
            }} />

            {/* glow blob */}
            <div style={{
                position: 'absolute', top: '-30%', right: '-20%',
                width: '160px', height: '160px', borderRadius: '50%',
                background: `radial-gradient(circle, ${story.color}33, transparent 70%)`,
                opacity: hovered ? 1 : 0,
                transition: 'opacity 0.4s',
                pointerEvents: 'none',
            }} />

            {/* big quote icon */}
            <div style={{
                fontSize: '3rem', lineHeight: 1,
                color: hovered ? story.color : story.color + '55',
                marginBottom: '10px',
                transition: 'color 0.3s',
            }}>❝</div>

            {/* message */}
            <p style={{
                color: hovered ? '#fff' : 'rgba(255,255,255,0.75)',
                fontSize: '0.84rem', lineHeight: 1.75,
                fontStyle: 'italic', marginBottom: '22px',
                position: 'relative', zIndex: 1,
                transition: 'color 0.3s',
            }}>{story.msg}</p>

            {/* stars */}
            <div style={{ color: '#f4a261', fontSize: '0.85rem', marginBottom: '16px' }}>★★★★★</div>

            {/* footer */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
                <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: hovered ? story.color : story.color + 'bb',
                    color: '#fff', fontSize: '1rem', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: hovered ? `0 0 18px ${story.color}` : 'none',
                    transition: 'all 0.3s',
                }}>{story.avatar}</div>
                <div>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.92rem' }}>{story.name}</div>
                    <div style={{ color: theme.quoteColor, fontSize: '0.75rem', fontWeight: 600 }}>{story.role}</div>
                    <div style={{
                        display: 'inline-block', marginTop: '4px',
                        background: story.color + '33', border: `1px solid ${story.color}66`,
                        borderRadius: '10px', padding: '1px 10px',
                        color: '#fff', fontSize: '0.7rem', fontWeight: 700,
                    }}>💰 {story.pkg}</div>
                </div>
            </div>
        </div>
    );
};

const Trainer = () => {
    const row1 = mnc.slice(0, 4);
    const row2 = mnc.slice(4, 8);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setSlide(p => (p + 1) % stories.length), 3500);
        return () => clearInterval(t);
    }, []);

    return (
        <div style={styles.wrapper}>
            <p style={styles.badge}>🏢 TOP RECRUITERS</p>
            <h2 style={styles.heading}>MNC Companies Hiring Our Students</h2>
            <p style={styles.sub}>Our graduates are placed in the world's leading tech companies</p>

            <div style={styles.row}>{row1.map((c, i) => <MNCCard key={i} company={c} />)}</div>
            <div style={{ ...styles.row, marginBottom: '60px' }}>{row2.map((c, i) => <MNCCard key={i} company={c} />)}</div>

            {/* Success Stories Slider */}
            <p style={styles.badge}>🌟 SUCCESS STORIES</p>
            <h2 style={{ ...styles.heading, marginBottom: '8px' }}>Our Students' Achievements</h2>
            <p style={{ ...styles.sub, marginBottom: '36px' }}>Real stories from real students who transformed their careers</p>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'nowrap', marginBottom: '24px', transition: 'all 0.5s ease' }}>
                {stories[slide].map((s, i) => <StoryCard key={i} story={s} idx={i} />)}
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                {stories.map((_, i) => (
                    <span key={i} onClick={() => setSlide(i)} style={{
                        width: '10px', height: '10px', borderRadius: '50%', cursor: 'pointer',
                        display: 'inline-block', transition: 'all 0.3s',
                        background: i === slide ? '#e63946' : 'rgba(255,255,255,0.3)',
                        transform: i === slide ? 'scale(1.4)' : 'scale(1)',
                    }} />
                ))}
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        textAlign: 'center',
        padding: '70px 40px',
        background: 'linear-gradient(135deg, #0a0a1a, #1a1a2e, #16213e)',
        overflow: 'hidden',
    },
    badge: {
        display: 'inline-block', background: 'rgba(230,57,70,0.15)', color: '#e63946',
        border: '1px solid #e63946', borderRadius: '20px', padding: '4px 16px',
        fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '14px', fontWeight: 700,
    },
    heading: { fontSize: '2rem', color: '#fff', margin: '0 0 10px', fontWeight: 800 },
    sub: { color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', marginBottom: '44px' },
    row: {
        display: 'flex', justifyContent: 'center',
        gap: '20px', flexWrap: 'nowrap', marginBottom: '20px',
    },
};

export default Trainer;
