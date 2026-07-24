import React from 'react'
import './Fit.css'

const Fit = () => {
  return (
    <div className="fit-footer">
      <div className="fit-container">

        {/* Col 1 - About */}
        <div className="fit-col">
          <img src="/AIT-white.jpg" alt="AchieversIT Logo" className="fit-logo" />
          <p className="fit-desc">
            AchieversIT - Provides a wide group of opportunities for freshers and Experienced candidates
            who can develop their skills and build their career opportunities across multiple Companies.
          </p>
        </div>

        <div className="fit-divider" />

        {/* Col 2 - Company */}
        <div className="fit-col">
          <h4 className="fit-heading">COMPANY</h4>
          <ul className="fit-list">
            <li>Home</li>
            <li>Placements</li>
            <li>Corporate Training</li>
            <li>Contact US</li>
          </ul>
        </div>

        <div className="fit-divider" />

        {/* Col 3 - Trending Courses */}
        <div className="fit-col">
          <h4 className="fit-heading">TRENDING COURSES</h4>
          <ul className="fit-list">
            <li>UI Development Course</li>
            <li>Angular JS Course</li>
            <li>React JS Course</li>
            <li>Digital Marketing Course</li>
            <li>Python Course</li>
          </ul>
        </div>

        <div className="fit-divider" />

        {/* Col 4 - Contact Info */}
        <div className="fit-col">
          <h4 className="fit-heading">CONTACT INFO</h4>
          <p className="fit-contact-item">#63, 1st Floor, 16th Main, 8th Cross,<br />BTM 1st Stage, Bangalore, India - 560029</p>
          <p className="fit-contact-item">India : +91 9740225633</p>
          <p className="fit-contact-item">info@achieversit.com</p>
        </div>

      </div>
      <div className="fit-bottom">© 2024 AchieversIT. All Rights Reserved.</div>
    </div>
  )
}

export default Fit
