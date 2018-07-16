import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'

import './index.css'
import '../styles/layout-overide.css'

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'
import SideDrawer from '../components/Navbar/SideDrawer'
import Backdrop from '../components/Navbar/Backdrop'

import Media from 'react-media'

const TemplateWrapper = ({ children, sideDrawerOpen, toggleDrawer }) => {
  if (!sideDrawerOpen) {
    return (
      <div>
        <Helmet
          title="Kevin Murphy Web Dev"
          meta={[
            {
              name: 'Full Stack Web Development',
              content: "I'm really good at javascript",
            },
            {
              name:
                'javascript, react, reactjs, mongo, mongodb, express, node, nodejs, fullstack, frontend, web, development, web development',
              content: "I'm really good at javascript",
            },
          ]}
        />
        <Navbar />
        <SideDrawer show={sideDrawerOpen} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 980,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Media query={{ maxWidth: 848 }}>
            {matches =>
              matches ? (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 1 }}>{children()}</div>
                </div>
              ) : (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 2.5, paddingRight: '30px' }}>
                    {children()}
                  </div>

                  <div style={{ flex: 1 }}>
                    <Sidebar
                      title="Blog (Under Construction)"
                      description="Articles on modern web apps. All articles are written by Kevin Murphy, Fullstack Web Development."
                    />
                    <Sidebar
                      title="Author"
                      description="Kevin Murphy is a Full-stack Web Developer specializing in React and Node.js based in Paradise Valley, AZ."
                    />
                  </div>
                </div>
              )
            }
          </Media>
        </div>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <Helmet
          title="Kevin Murphy Web Dev"
          meta={[
            {
              name: 'Full Stack Web Development',
              content: "I'm really good at javascript",
            },
            {
              name:
                'javascript, react, reactjs, mongo, mongodb, express, node, nodejs, fullstack, frontend, web, development, web development',
              content: "I'm really good at javascript",
            },
          ]}
        />
        <Navbar />
        <SideDrawer show={sideDrawerOpen} />
        <Backdrop />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 980,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <Media query={{ maxWidth: 848 }}>
            {matches =>
              matches ? (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 1 }}>{children()}</div>
                </div>
              ) : (
                <div
                  style={{
                    margin: '0 auto',
                    maxWidth: 980,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '100%',
                    padding: '25px',
                  }}
                >
                  <div style={{ flex: 2.5, paddingRight: '30px' }}>
                    {children()}
                  </div>

                  <div style={{ flex: 1 }}>
                    <Sidebar
                      title="Blog (Under Construction)"
                      description="Articles on modern web apps. All articles are written by Kevin Murphy, Fullstack Web Development."
                    />
                    <Sidebar
                      title="Author"
                      description="Kevin Murphy is a Full-stack Web Developer specializing in React and Node.js based in Paradise Valley, AZ."
                    />
                  </div>
                </div>
              )
            }
          </Media>
        </div>
        <Footer />
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default connect(
  state => ({ sideDrawerOpen: state.app.sideDrawerOpen }),
  dispatch => ({ toggleDrawer: open => dispatch(toggleDrawerAction(open)) })
)(TemplateWrapper)

// console.log(TemplateWrapper);

// TemplateWrapper.propTypes = {
//   children: PropTypes.func
// };

// export default TemplateWrapper;
