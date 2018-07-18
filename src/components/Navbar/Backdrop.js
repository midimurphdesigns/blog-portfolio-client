import React from 'react'
import { connect } from 'react-redux'

import { toggleDrawer as toggleDrawerAction } from '../../state/app'
import './Backdrop.css'

export function Backdrop({ sideDrawerOpen, toggleDrawer }) {
  return (
    <div onClick={() => toggleDrawer(!sideDrawerOpen)} className="backdrop" />
  )
}

export default connect(
  state => ({ sideDrawerOpen: state.app.sideDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) })
)(Backdrop)
