import React from "react";

import "./TopBar.css";

export default function TopBar(props) {
  return (
    <div className="topbar-container">
      <a
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/19Oc6_PwzvxSH-7RnXrcKHvpVVfnIsdP7/view?usp=sharing"
        target="_blank"
      >
        Resume
      </a>
      <span className="divider"> | </span>
      <a
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/midimurphdesigns/"
        target="_blank"
      >
        LinkedIn
      </a>
      <span className="divider"> | </span>
      <a
        rel="noopener noreferrer"
        href="https://github.com/midimurphdesigns"
        target="_blank"
      >
        GitHub
      </a>
      <span className="divider"> | </span>
      <a
        rel="noopener noreferrer"
        href="mailto:midimurphdesigns@gmail.com"
        className="email"
      >
        {" "}
        midimurphdesigns@gmail.com
      </a>
    </div>
  );
}
