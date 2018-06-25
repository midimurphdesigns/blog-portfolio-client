import React from 'react';

export default function SectionTwo(props) {
  return (
    <section className="section-container">
      <div className="vertical-align">
        <div className="sec2">
          <div className="sec-left col-4">
            <div className="label-tile-sec2">
              <span>I can...</span>
            </div>
          </div>
          <div className="sec2-right col-8">
            <div className="skills-list">
              <ul>
                <li>Manage data flow with React</li>
                <li>Manage state with Redux</li>
                <li>Create RESTful APIs</li>
                <li>Make SQL and noSQL databases</li>
              </ul>
            </div>
            <div className="skills-list">
              <ul>
                <li>Authenticate user sessions</li>
                <li>Persist data across sessions</li>
                <li>Design wireframes</li>
                <li>Style with CSS and SASS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}