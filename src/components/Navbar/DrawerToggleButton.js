import React from 'react'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../../state/app'
// import { sideDrawerToggle } from '../../actions/side-drawer-actions'
import './DrawerToggleButton.css'

export function DrawerToggleButton({sideDrawerOpen, toggleDrawer}) {
  // console.log('side drawer toggle button props', props)
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

// export default (DrawerToggleButton);
// export default connect()(DrawerToggleButton);
