import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import './Portfolio.css';
import TopBar from '../TopBar/TopBar';
import FullStackItems from './FullStackItems'
import WordPressItems from './WordPressItems'

export default function Portfolio(props) {
  return (
    <div>
      <TopBar />
      <h1 className="page-title">Full Stack Apps</h1>
      <FullStackItems />
      <h1 className="page-title">WordPress Development</h1>
      <WordPressItems />
    </div>
  )
}