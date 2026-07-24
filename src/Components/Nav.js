import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useCart } from './CartContext';

const courses = [
  { name: 'Web Development', items: ['HTML & CSS', 'JavaScript', 'React JS', 'Node JS', 'Full Stack'] },
  { name: 'Data Science', items: ['Python Basics', 'Machine Learning', 'Deep Learning', 'NLP', 'Data Visualization'] },
  { name: 'AI & ML', items: ['AI Fundamentals', 'Neural Networks', 'Computer Vision', 'Reinforcement Learning'] },
  { name: 'Cyber Security', items: ['Ethical Hacking', 'Network Security', 'Cryptography', 'Penetration Testing'] },
  { name: 'Cloud Computing', items: ['AWS', 'Azure', 'Google Cloud', 'DevOps', 'Docker & Kubernetes'] },
  { name: 'Mobile Development', items: ['Android', 'iOS', 'React Native', 'Flutter'] },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const { cart, addToCart } = useCart();
  const cartCount = cart.length;
  const navigate = useNavigate();

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
    setSubDropdown(null);
  };

  const toggleSubDropdown = (name) => {
    setSubDropdown(subDropdown === name ? null : name);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img src='/AIT-white.jpg' alt='logo' className="navbar-logo" /></Link>
      </div>

      <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>☰</button>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>

        <li className="dropdown">
          <button onClick={() => toggleDropdown('courses')}>All Courses ▾</button>
          {dropdown === 'courses' && (
            <ul className="dropdown-menu">
              {courses.map((course) => (
                <li key={course.name} className="sub-dropdown">
                  <button onClick={() => toggleSubDropdown(course.name)}>
                    {course.name} ▸
                  </button>
                  {subDropdown === course.name && (
                    <ul className="sub-dropdown-menu">
                      {course.items.map((item) => (
                        <li key={item}>
                          <button className="course-add-btn" onClick={() => {
                            addToCart({ name: item, category: course.name });
                            navigate('/cart');
                          }}>{item}</button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><Link to="/placements">Placements</Link></li>
        <li><Link to="/internship">Internship</Link></li>

        <li className="dropdown">
          <button onClick={() => toggleDropdown('students')}>Existing Students ▾</button>
          {dropdown === 'students' && (
            <ul className="dropdown-menu">
              <li><Link to="/students/portal">Student Portal</Link></li>
              <li><Link to="/students/results">Results</Link></li>
              <li><Link to="/students/certificate">Certificate</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown">
          <button onClick={() => toggleDropdown('about')}>About Us ▾</button>
          {dropdown === 'about' && (
            <ul className="dropdown-menu">
              <li><Link to="/contact">Contact Details</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/table">Reviews</Link></li>
        <li><Link to="/data">Blog</Link></li>

        <li>
          <Link to="/cart" className="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f4a261" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </li>

      </ul>
    </nav>
  );
};

export default Nav;
