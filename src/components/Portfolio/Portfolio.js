import React from 'react';

import './Portfolio.css';
import TopBar from './TopBar';

export default function Portfolio(props) {
  return (
    <div className="portfolio-page-container">
      <TopBar />
      <h1 className="page-title">Full Stack Apps</h1>

      <div className="project-container row">
        <label className="project-label col-4">Musixchange</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Final Capstone</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">DSA Capstone project</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Noteful</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Bookmark App</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <h1 className="page-title">WordPress Development</h1>

      <div className="project-container row">
        <label className="project-label col-4">IPRA Foundation</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Herndon Friends Meeting</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Nation Analytics</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

      <div className="project-container row">
        <label className="project-label col-4">Smithsonian Institution</label>
        <div className="col-8">
          <p className="project-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia odio consequuntur atque quam in, voluptates iusto officiis nulla tempore perferendis accusamus, inventore repellat ipsum rem iure odit eligendi! Totam, corporis.</p>
        </div>
      </div>

    </div>
  )
}