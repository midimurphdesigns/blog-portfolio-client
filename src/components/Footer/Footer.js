import React from 'react';

import './Footer.css';

export default function Footer(props) {
    return (
        <div className="footer-container">
            <div className="footer-navigation">
                <a href="//kevinmurphywebdev.com" className="footer-navigation-text">About Me</a>
                <a href="//kevinmurphywebdev.com/portfolio" className="footer-navigation-text">Portfolio</a>
            </div>

            <div className="text-container">
                <span className="footer-text-top">Kevin Murphy</span>
                <label className="footer-text">Full stack web developer</label>
            </div>

            <div className="footer-navigation">
                <a href="//kevinmurphywebdev.com/resources" className="footer-navigation-text">Resources</a>
                <a href="/" className="footer-navigation-text">Blog</a>
            </div>
        </div>
    )
}