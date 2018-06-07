import React from 'react';

import './TopBar.css'

export default function TopBar(props) {
  return (
    <div className="topbar-container">
      <a href="https://drive.google.com/file/d/1pfhJxi2fI0PuzE1RIIIVzKjeyQGjedLQ/view?usp=sharing" target="_blank">Resume</a>
      <a className="divider"> | </a>
      <a href="https://www.linkedin.com/in/midimurphdesigns/" target="_blank">LinkedIn</a>
      <a className="divider"> | </a>
      <a href="https://github.com/midimurphdesigns" target="_blank">GitHub</a>
      <a className="divider"> | </a>
      <a href="mailto:midimurphdesigns@gmail.com" className="email"> midimurphdesigns@gmail.com</a>
    </div>
  )
}