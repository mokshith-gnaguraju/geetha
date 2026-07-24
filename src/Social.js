import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import './Social.css'

const Social = () => {
  return (
    <div className="social-icons">
      <a href="https://facebook.com" className="fb" target="_blank" rel="noreferrer"><FaFacebookF /></a>
      <a href="https://twitter.com" className="tw" target="_blank" rel="noreferrer"><FaTwitter /></a>
      <a href="https://instagram.com" className="ig" target="_blank" rel="noreferrer"><FaInstagram /></a>
      <a href="https://youtube.com" className="yt" target="_blank" rel="noreferrer"><FaYoutube /></a>
      <a href="https://linkedin.com" className="li" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
    </div>
  )
}

export default Social
