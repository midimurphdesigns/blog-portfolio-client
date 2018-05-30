import React from 'react';

import './AboutMe.css'
import TopBar from './TopBar'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'

export default function AboutMe(props) {
  return (
    <div className="page-container">
      <TopBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}