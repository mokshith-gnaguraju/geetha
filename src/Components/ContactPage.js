import React, { useState } from 'react';
import './ContactPage.css';

const validate = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required';
  else if (fields.name.trim().length < 3) errors.name = 'Min 3 characters';

  if (!fields.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errors.email = 'Invalid email';

  if (!fields.phone.trim()) errors.phone = 'Phone is required';
  else if (!/^\d{10}$/.test(fields.phone)) errors.phone = 'Enter valid 10-digit number';

  if (!fields.course) errors.course = 'Please select a course';

  if (!fields.message.trim()) errors.message = 'Message is required';
  else if (fields.message.trim().length < 10) errors.message = 'Min 10 characters';

  return errors;
};

const ContactPage = () => {
  const [fields, setFields] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="contact-success">
      <h2>✅ Thank you, {fields.name}!</h2>
      <p>We'll reach out to you at <strong>{fields.email}</strong> shortly.</p>
    </div>
  );

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Full Name</label>
          <input name="name" value={fields.name} onChange={handleChange} placeholder="Enter your name" />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={fields.email} onChange={handleChange} placeholder="Enter your email" />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input name="phone" value={fields.phone} onChange={handleChange} placeholder="10-digit mobile number" maxLength={10} />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Course Interested</label>
          <select name="course" value={fields.course} onChange={handleChange}>
            <option value="">-- Select Course --</option>
            {['Web Development', 'Data Science', 'AI & ML', 'Cyber Security', 'Cloud Computing', 'Mobile Development'].map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.course && <span className="error">{errors.course}</span>}
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={fields.message} onChange={handleChange} rows={4} placeholder="Write your message..." />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
