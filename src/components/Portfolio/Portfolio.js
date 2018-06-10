import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import ScrollTop from '../ScrollTop/ScrollTop'

import './Portfolio.css';
import TopBar from '../TopBar/TopBar';
import FullStackItems from './FullStackItems'
import WordPressItems from './WordPressItems'

export default function Portfolio(props) {
  return (
    <div className="portfolio-page-container">
      <TopBar />
      <h1 className="page-title" id="header">Full Stack Apps</h1>
      <div className="items-container">
        <FullStackItems />
      </div>

      <h1 className="page-title">WordPress Development</h1>
      <div className="items-container">
        <WordPressItems />
      </div>
    </div>
  )
}