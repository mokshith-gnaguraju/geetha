import React, { useState, useEffect } from 'react';

const reviews = [
    { name: "Aisha Khan", course: "React Development", review: "Amazing course! The projects were real-world and the instructor explained every concept clearly.", rating: 5 },
    { name: "Ravi Kumar", course: "Python & ML", review: "Best Python course I've taken. Loved the hands-on ML projects and clear explanations.", rating: 5 },
    { name: "Sofia Martinez", course: "Full Stack Development", review: "Went from zero to full-stack developer in 3 months. The curriculum is top-notch!", rating: 4 },
    { name: "James Lee", course: "UI/UX Design", review: "Practical, modern, and well-structured. My design skills improved massively.", rating: 5 },
    { name: "Priya Nair", course: "Data Science", review: "The data science track was excellent. Real datasets and industry-relevant projects.", rating: 4 },
    { name: "Chen Wei", course: "Cloud Computing", review: "The AWS modules were incredibly detailed. Got certified right after completing this!", rating: 5 },
    { name: "Ananya Singh", course: "Java Programming", review: "Very structured and beginner-friendly. The OOP concepts were explained brilliantly.", rating: 5 },
    { name: "Carlos Gomez", course: "Cyber Security", review: "Hands-on labs made this course stand out. I feel job-ready after completing it.", rating: 4 },
    { name: "Fatima Al-Hassan", course: "DevOps & CI/CD", review: "Excellent content on Docker and Jenkins. The real project deployment was a highlight.", rating: 5 },
    { name: "Liam O'Brien", course: "Angular & TypeScript", review: "Went from basic JS to building full Angular apps. Instructor support was fantastic.", rating: 4 },
    { name: "Mei Ling", course: "Database & SQL", review: "Clear explanations on complex queries. The exercises helped me crack my interviews!", rating: 5 },
];

const avatarColors = ['#e63946', '#457b9d', '#2a9d8f', '#e9c46a', '#f4a261', '#6a4c93'];

const Student = () => {
    const [current, setCurrent] = useState(0);
    const perPage = 3;
    const total = Math.ceil(reviews.length / perPage);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % total);
        }, 3000);
        return () => clearInterval(timer);
    }, [total]);

    const visible = reviews.slice(current * perPage, current * perPage + perPage);

    return (
        <div style={styles.wrapper}>
            <p style={styles.badge}>⭐ STUDENT REVIEWS</p>
            <h2 style={styles.heading}>What Our Students Say About Us</h2>
            <p style={styles.sub}>Trusted by thousands of learners worldwide across all IT courses</p>

            <div style={styles.row}>
                {visible.map((r, i) => (
                    <div key={i} style={styles.card}>
                        <div style={styles.quoteIcon}>❝</div>
                        <p style={styles.review}>{r.review}</p>
                        <div style={styles.stars}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                        <div style={styles.footer}>
                            <div style={{ ...styles.avatar, background: avatarColors[(current * perPage + i) % avatarColors.length] }}>
                                {r.name.charAt(0)}
                            </div>
                            <div>
                                <h4 style={styles.name}>{r.name}</h4>
                                <span style={styles.course}>{r.course}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={styles.dots}>
                {Array.from({ length: total }).map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{ ...styles.dot, background: i === current ? '#e63946' : 'rgba(255,255,255,0.4)', transform: i === current ? 'scale(1.3)' : 'scale(1)' }}
                    />
                ))}
            </div>

            <div style={styles.banner}>
                <p style={styles.bannerText}>Enroll, Learn, Grow, Repeat! Get ready to achieve your learning goals with AchieversIT</p>
                <button style={styles.bannerBtn}>Contact Us</button>
            </div>
        </div>
    );
};

const styles = {
    wrapper: {
        textAlign: 'center',
        padding: '70px 40px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative',
        overflow: 'hidden',
    },
    badge: {
        display: 'inline-block', background: 'rgba(230,57,70,0.15)', color: '#e63946',
        border: '1px solid #e63946', borderRadius: '20px', padding: '4px 16px',
        fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '14px', fontWeight: 700,
    },
    heading: { fontSize: '2rem', color: '#fff', margin: '0 0 10px', fontWeight: 800 },
    sub: { color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: '40px' },
    row: {
        display: 'flex', justifyContent: 'center', gap: '24px',
        flexWrap: 'wrap',
    },
    card: {
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: '20px',
        padding: '30px 28px',
        width: '280px',
        textAlign: 'left',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s',
    },
    quoteIcon: { fontSize: '2.5rem', color: '#e63946', lineHeight: 1, marginBottom: '10px' },
    review: { color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '14px', fontStyle: 'italic' },
    stars: { color: '#f4a261', fontSize: '1rem', marginBottom: '18px' },
    footer: { display: 'flex', alignItems: 'center', gap: '12px' },
    avatar: {
        width: '46px', height: '46px', borderRadius: '50%',
        color: '#fff', fontSize: '1.2rem', lineHeight: '46px',
        textAlign: 'center', flexShrink: 0, fontWeight: 700,
    },
    name: { margin: 0, color: '#fff', fontSize: '0.95rem', fontWeight: 700 },
    course: { color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' },
    dots: { marginTop: '36px' },
    dot: {
        display: 'inline-block', width: '10px', height: '10px',
        borderRadius: '50%', margin: '0 6px', cursor: 'pointer',
        transition: 'all 0.3s',
    },
    banner: {
        marginTop: '50px',
        background: 'linear-gradient(90deg, #e63946, #f4a261)',
        borderRadius: '16px',
        padding: '30px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
    },
    bannerText: {
        color: '#fff',
        fontSize: '1.1rem',
        fontWeight: 600,
        margin: 0,
        textAlign: 'left',
        flex: 1,
    },
    bannerBtn: {
        background: '#fff',
        color: '#e63946',
        border: 'none',
        borderRadius: '30px',
        padding: '12px 30px',
        fontSize: '0.95rem',
        fontWeight: 700,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    },
};

export default Student;
