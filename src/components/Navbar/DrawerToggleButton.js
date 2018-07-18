import React from 'react'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../../state/app'
import './DrawerToggleButton.css'

export function DrawerToggleButton({sideDrawerOpen, toggleDrawer}) {
  return (
    <button
      onClick={() => toggleDrawer(!sideDrawerOpen)}
      className="toggle-button"
    >
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
      <div className="toggle-button-line" />
    </button>
  )
}

export default connect(
  state => ({ sideDrawerOpen: state.app.sideDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) })
)(DrawerToggleButton)
