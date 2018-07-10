import React from 'react';

export default function SectionOne(props) {
  return (
    <section className="section-container">
      <div className="vertical-align">
        <div className="sec1">
          <div className="sec-left col-8">
            <label className="about-label">I'm really good at JavaScript</label>
            <div className="icon-section">
              <i className="lighten devicon-mongodb-plain-wordmark"></i>
              <i className="lighten devicon-express-original-wordmark"></i>
              <i className="lighten devicon-react-original-wordmark"></i>
              <i className="lighten devicon-nodejs-plain-wordmark"></i>
            </div>
          </div>
          <div className="sec-right col-4">
            <img src={require('../../images/headshot.png')} alt="Headshot of Kevin Murphy" className="headshot" />
            <span className="img-description">Passionate full-stack web developer</span>
          </div>
        </div>
      </div>

    </section>
  )
}