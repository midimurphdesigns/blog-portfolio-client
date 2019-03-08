import React from "react";

export default function SectionOne(props) {
  return (
    <section className="section-container">
      <div className="vertical-align">
        <div className="sec1">
          <div className="sec-left col-8">
            <label className="about-label">I make useful things with...</label>
            <div className="icon-section">
              <i className="lighten devicon-react-original-wordmark" />
              <i className="lighten devicon-nodejs-plain-wordmark" />
              <i className="lighten devicon-amazonwebservices-plain-wordmark" />
              <i className="lighten devicon-visualstudio-plain-wordmark" />
            </div>
          </div>
          <div className="sec-right col-4">
            <img
              src={require("../../images/headshot.png")}
              alt="Headshot of Kevin Murphy"
              className="headshot"
            />
            <h4
              className="img-description"
              // style={{ color: "white", position: "absolute", top: 50 }}
            >
              Kevin Murphy
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
