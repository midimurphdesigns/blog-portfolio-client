import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import './Portfolio.css';
import TopBar from '../TopBar/TopBar';
import Items from './Items'

export default function Portfolio(props) {
  return (
    <div>
      <TopBar />
      <h1 className="page-title">Full Stack Apps</h1>
      <Items />
    </div>
  )
}