import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import { sideDrawerToggle } from '../../actions/side-drawer-actions';
import { toggleDrawer as toggleDrawerAction } from '../../state/app'
import './SideDrawer.css'

// export class SideDrawer extends React.Component {
//   render() {
export function SideDrawer({ sideDrawerOpen, toggleDrawer }) {
  let drawerClasses = 'side-drawer'
  if (sideDrawerOpen) {
    drawerClasses = 'side-drawer open'
  }

  return (
    <nav className={drawerClasses}>
      <ul className="mobile-navigation-items">
        <li>
          <Link
            onClick={() => toggleDrawer(!sideDrawerOpen)}
            className="logo-sidedrawer"
            to="/"
          >
            Kevin Murphy
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleDrawer(!sideDrawerOpen)} to="/">
            About Me
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleDrawer(!sideDrawerOpen)} to="/portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link onClick={() => toggleDrawer(!sideDrawerOpen)} to="/resources">
            Resources
          </Link>
        </li>
        <li>
          <a
            onClick={() => toggleDrawer(!sideDrawerOpen)}
            href="blog.kevinmurphywebdev.com"
            target="_blank"
          >
            Blog
          </a>
        </li>
      </ul>
    </nav>
  )
  // }
}

export default connect(
  state => ({ sideDrawerOpen: state.app.sideDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) })
)(SideDrawer)

// export default connect()(SideDrawer);
