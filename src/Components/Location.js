import React from 'react';

const Location = () => {
  return (
    <div style={{ padding: '60px 20px', background: '#e8eaed', fontFamily: "'Google Sans', Roboto, Arial, sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '700', color: '#202124', marginBottom: '6px' }}>
          Our Location
        </h2>
        <p style={{ textAlign: 'center', color: '#5f6368', fontSize: '14px', marginBottom: '36px' }}>
          Come and discuss with us about your goals — We transform your goals into success!!!
        </p>

        <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>

          {/* Info Panel - Google Maps sidebar style */}
          <div style={{
            width: '320px', minWidth: '280px', background: '#fff',
            padding: '0', display: 'flex', flexDirection: 'column',
            borderRight: '1px solid #e0e0e0'
          }}>
            {/* Red top bar like Google Maps */}
            <div style={{ background: '#ea4335', padding: '20px 20px 16px', color: '#fff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '22px' }}>📍</span>
                <h3 style={{ fontSize: '18px', fontWeight: '700', margin: 0 }}>Marathahalli</h3>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.85)', margin: 0 }}>Bengaluru, Karnataka</p>
            </div>

            {/* Action buttons like Google Maps */}
            <div style={{ display: 'flex', borderBottom: '1px solid #e0e0e0', padding: '10px 16px', gap: '8px' }}>
              {['Directions', 'Save', 'Share'].map((btn, i) => (
                <button key={i} style={{
                  flex: 1, padding: '8px 4px', border: 'none', borderRadius: '8px',
                  background: i === 0 ? '#1a73e8' : '#f1f3f4', color: i === 0 ? '#fff' : '#1a73e8',
                  fontSize: '12px', fontWeight: '600', cursor: 'pointer'
                }}>{btn}</button>
              ))}
            </div>

            {/* Details */}
            <div style={{ padding: '16px 20px', flex: 1 }}>

              <div style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid #f1f3f4' }}>
                <span style={{ color: '#5f6368', fontSize: '18px', marginTop: '2px' }}>📌</span>
                <div>
                  <p style={{ fontSize: '13px', color: '#202124', margin: '0 0 2px', fontWeight: '500' }}>
                    #1, 4th Main Rd, Extension, Ayyappa Layout,
                  </p>
                  <p style={{ fontSize: '13px', color: '#5f6368', margin: 0 }}>
                    Chandra Layout, Marathahalli, Bengaluru, Karnataka 560037
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid #f1f3f4', alignItems: 'center' }}>
                <span style={{ color: '#5f6368', fontSize: '18px' }}>🕐</span>
                <div>
                  <p style={{ fontSize: '13px', color: '#188038', margin: '0 0 2px', fontWeight: '600' }}>Open now</p>
                  <p style={{ fontSize: '12px', color: '#5f6368', margin: 0 }}>Mon – Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', padding: '12px 0', borderBottom: '1px solid #f1f3f4', alignItems: 'center' }}>
                <span style={{ color: '#5f6368', fontSize: '18px' }}>📞</span>
                <p style={{ fontSize: '13px', color: '#1a73e8', margin: 0, fontWeight: '500' }}>+91 98765 43210</p>
              </div>

              <div style={{ display: 'flex', gap: '14px', padding: '12px 0', alignItems: 'center' }}>
                <span style={{ color: '#5f6368', fontSize: '18px' }}>✉️</span>
                <p style={{ fontSize: '13px', color: '#1a73e8', margin: 0, fontWeight: '500' }}>info@hondatraining.com</p>
              </div>
            </div>

            {/* Footer tag */}
            <div style={{ padding: '10px 20px', background: '#f8f9fa', borderTop: '1px solid #e0e0e0' }}>
              <p style={{ fontSize: '11px', color: '#9aa0a6', margin: 0, textAlign: 'center' }}>
                Suggest an edit · Add missing information
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div style={{ flex: 1, minWidth: '300px', minHeight: '460px' }}>
            <iframe
              title="Marathahalli Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.7012!3d12.9591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1329c4b4b4b5%3A0x1234567890abcdef!2sMarathahalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '460px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;
