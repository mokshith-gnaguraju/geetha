import React, { useState } from 'react'

const inputStyle = {
  padding: '10px 12px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '14px',
  outline: 'none',
  transition: 'border 0.2s',
  width: '100%',
  boxSizing: 'border-box',
};

const Data = () => {
  const [form, setForm] = useState({ fullName: '', contact: '', altContact: '', email: '', opinion: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const fullText = "Electric vehicles (EVs) are rapidly transforming the global automotive industry by offering a sustainable alternative to traditional combustion engines. First, the environmental benefits are significant, as EVs produce zero tailpipe emissions, which drastically reduces air pollution in urban areas. Furthermore, battery technology has advanced to the point where modern EVs can travel hundreds of miles on a single charge, alleviating range anxiety for consumers. In addition, governments worldwide are incentivizing this shift by offering tax rebates and investing heavily in charging infrastructure. Ultimately, the transition to electric mobility represents a crucial step toward achieving long-term climate goals.";
  const preview = fullText.split('.')[0] + '.';

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = 'Full Name is required.';
    if (!form.contact.trim()) e.contact = 'Contact Number is required.';
    else if (!/^\d{10}$/.test(form.contact)) e.contact = 'Enter a valid 10-digit number.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) { setErrors(e2); setSuccess(false); }
    else { setErrors({}); setSuccess(true); setForm({ fullName: '', contact: '', altContact: '', email: '', opinion: '' }); }
  };

  const handle = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
    setSuccess(false);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '360px', padding: '24px', borderRadius: '16px', boxShadow: '0 8px 30px rgba(0,0,0,0.15)', background: '#fff' }}>

        <h1 style={{ backgroundColor: '#e40521', color: '#fff', padding: '12px', textAlign: 'center', textDecoration: 'underline', borderRadius: '10px', margin: 0, fontSize: '24px', letterSpacing: '1px' }}>Bio-Data</h1>

        {success && <div style={{ color: '#155724', fontWeight: 'bold', background: '#d4edda', padding: '10px 14px', borderRadius: '8px', border: '1px solid #c3e6cb' }}>✔ Form submitted successfully!</div>}

        {['fullName', 'contact', 'altContact', 'email'].map((field) => (
          <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <label style={{ fontWeight: '600', color: '#444', fontSize: '14px' }}>
              {field === 'fullName' ? 'Full Name' : field === 'contact' ? 'Contact Number' : field === 'altContact' ? 'Alternative Contact Number' : 'Email'}
              {field !== 'altContact' && <span style={{ color: 'red' }}> *</span>}
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              placeholder={`Please Enter Your ${field === 'fullName' ? 'Name' : field === 'contact' ? 'Contact Number' : field === 'altContact' ? 'Alternative Contact Number' : 'Email'}`}
              value={form[field]}
              onChange={handle(field)}
              style={inputStyle}
            />
            {errors[field] && <span style={{ color: 'red', fontSize: '12px' }}>{errors[field]}</span>}
          </div>
        ))}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <label style={{ fontWeight: '600', color: '#444', fontSize: '14px' }}>Opinion</label>
          <textarea placeholder='Please Enter Your Opinion' rows={4} value={form.opinion} onChange={handle('opinion')} style={{ ...inputStyle, resize: 'none' }} />
        </div>

        <div style={{ background: '#f0f4ff', padding: '28px', borderRadius: '10px', fontSize: '14px', color: '#333', lineHeight: '1.7', border: '1px solid #d0d9f0' }}>
          <p style={{ margin: '0 0 10px 0' }}>{expanded ? fullText : preview}</p>
          <button type='button' onClick={() => setExpanded(!expanded)} style={{ background: '#007bff', color: '#fff', padding: '6px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px', fontWeight: '600' }}>
            {expanded ? 'Read Less ▲' : 'Read More ▼'}
          </button>
        </div>

        <button type='submit' style={{ background: 'linear-gradient(135deg, #28a745, #218838)', color: '#fff', padding: '12px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(40,167,69,0.4)' }}>
          Submit
        </button>

      </form>
    </div>
  );
}

export default Data
