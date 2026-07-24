import React, { useEffect, useRef } from 'react';

const students = [
  { name: 'Aarav Sharma', photo: 'https://randomuser.me/api/portraits/men/11.jpg', company: 'Google', package: '28 LPA', logo: 'https://img.icons8.com/color/48/google-logo.png' },
  { name: 'Priya Nair', photo: 'https://randomuser.me/api/portraits/women/21.jpg', company: 'Amazon', package: '24 LPA', logo: 'https://img.icons8.com/color/48/amazon.png' },
  { name: 'Rahul Verma', photo: 'https://randomuser.me/api/portraits/men/32.jpg', company: 'Microsoft', package: '26 LPA', logo: 'https://img.icons8.com/color/48/microsoft.png' },
  { name: 'Sneha Patel', photo: 'https://randomuser.me/api/portraits/women/44.jpg', company: 'Infosys', package: '12 LPA', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg' },
  { name: 'Karan Mehta', photo: 'https://randomuser.me/api/portraits/men/55.jpg', company: 'TCS', package: '10 LPA', logo: 'https://www.tcs.com/content/dam/tcs/images/home/tcs-logo.svg' },
  { name: 'Divya Reddy', photo: 'https://randomuser.me/api/portraits/women/62.jpg', company: 'Wipro', package: '11 LPA', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' },
  { name: 'Arjun Singh', photo: 'https://randomuser.me/api/portraits/men/73.jpg', company: 'HCL', package: '9 LPA', logo: 'https://www.hcltech.com/themes/custom/hcltech/logo.svg' },
  { name: 'Meera Iyer', photo: 'https://randomuser.me/api/portraits/women/85.jpg', company: 'Zoho', package: '13 LPA', logo: 'https://www.zoho.com/branding/images/zoho-logo-512px.png' },
  { name: 'Vikram Das', photo: 'https://randomuser.me/api/portraits/men/91.jpg', company: 'IBM', package: '18 LPA', logo: 'https://img.icons8.com/color/48/ibm.png' },
  { name: 'Anjali Gupta', photo: 'https://randomuser.me/api/portraits/women/95.jpg', company: 'Accenture', package: '14 LPA', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
];

const row2 = [...students].reverse();

const useScroll = (ref, direction = 1) => {
  useEffect(() => {
    const track = ref.current;
    let animFrame;
    let pos = direction === 1 ? 0 : track.scrollWidth / 2;

    const scroll = () => {
      pos += 0.5 * direction;
      if (pos >= track.scrollWidth / 2) pos = 0;
      if (pos <= 0) pos = track.scrollWidth / 2;
      track.style.transform = `translateX(-${pos}px)`;
      animFrame = requestAnimationFrame(scroll);
    };

    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, [ref, direction]);
};

const CardRow = ({ data, direction }) => {
  const trackRef = useRef(null);
  useScroll(trackRef, direction);
  const duplicated = [...data, ...data];

  return (
    <div style={{ overflow: 'hidden', width: '100%', marginBottom: '20px' }}>
      <div ref={trackRef} style={{ display: 'flex', flexWrap: 'nowrap', gap: '20px', width: 'max-content', padding: '10px 20px' }}>
        {duplicated.map((s, i) => (
          <div key={i} style={{
            background: 'linear-gradient(135deg, #ffecd2, #fcb69f)', borderRadius: '14px', padding: '20px 18px',
            textAlign: 'center', boxShadow: '0 6px 24px rgba(0,0,0,0.2)',
            minWidth: '200px', cursor: 'pointer',
          }}>
            <img src={s.photo} alt={s.name} style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #ff8c00', marginBottom: '10px', imageRendering: 'auto' }} />
            <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 4px', letterSpacing: '-0.1px' }}>{s.name}</h3>
            <div style={{ borderTop: '1px solid #eee', margin: '10px 0' }} />
            <img src={s.logo} alt={s.company} style={{ width: '44px', height: '44px', objectFit: 'contain', marginBottom: '6px', imageRendering: 'auto' }} />
            <p style={{ fontSize: '13px', fontWeight: '600', color: '#333', margin: '0 0 8px' }}>{s.company}</p>
            <span style={{ display: 'inline-block', background: '#fff4e0', color: '#ff8c00', fontWeight: '700', fontSize: '13px', padding: '3px 12px', borderRadius: '20px' }}>
              💰 {s.package}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div style={{ padding: '40px 0', background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', overflow: 'hidden' }}>
      <h2 style={{ textAlign: 'center', color: '#fff', fontSize: '26px', fontWeight: '800', marginBottom: '8px' }}>
        🎓 Our Students Now at Top MNC Companies
      </h2>
      <p style={{ textAlign: 'center', color: '#aaa', fontSize: '14px', marginBottom: '30px' }}>
        Real students. Real placements. Real success.
      </p>
      <CardRow data={students} direction={1} />
      <CardRow data={row2} direction={-1} />
    </div>
  );
};

export default Box;
