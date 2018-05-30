import React from 'react';

export default function SectionOne(props) {
  return (
    <section className="section-container">
      <div className="sec1">
        <div className="sec-left col-8">
          <label className="about-label">I'm really good at JavaScript</label>
          <div className="icon-section">
            <i class="lighten devicon-mongodb-plain-wordmark"></i>
            <i class="lighten devicon-express-original-wordmark"></i>
            <i class="lighten devicon-react-original-wordmark"></i>
            <i class="lighten devicon-nodejs-plain-wordmark"></i>
          </div>
        </div>
        <div className="sec-right col-4">
          <div className="label-tile">
            <span>MERN</span>
            <span>Stack</span>
          </div>
        </div>
      </div>

    </section>
  )
}