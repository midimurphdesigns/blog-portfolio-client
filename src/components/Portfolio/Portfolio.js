import React from "react";
import "semantic-ui-css/semantic.min.css";

import "./Portfolio.css";
import TopBar from "../TopBar/TopBar";
import FullStackItems from "./FullStackItems";
import WordPressItems from "./WordPressItems";

export default function Portfolio(props) {
  return (
    <div className="portfolio-page-container">
      <div className="bg-fullstack">
        <TopBar />
        <h1 className="page-title" id="header">
          Full Stack Apps
        </h1>
        <div className="items-container">
          <FullStackItems />
        </div>
      </div>
      <div className="bg-wordpress">
        <h1 className="page-title-wordpress">WordPress Development</h1>
        <div className="items-container">
          <WordPressItems />
        </div>
      </div>
    </div>
  );
}
