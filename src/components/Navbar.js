import React, { Component } from 'react'
import { Link } from 'gatsby'
import Radium from 'radium'

class Navbar extends Component {
  render() {
    return (
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#5DA5F2',
          width: '100%',
          height: '70px',
          top: '0',
          left: '0',
          borderBottom: '1px solid black',
        }}
      >
        <nav
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            padding: '0, 10px',
          }}
        >
          <div>
            <a
              style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '35px',
                color: 'white',
                fontWeight: '500',
                width: 200,
                fontFamily: 'Pacifico',
                paddingLeft: 20,
              }}
              href="//kevinmurphywebdev.com"
            >
              Kevin Murphy
            </a>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              height: '100%',
              width: '100%',
            }}
          >
            <ul
              style={{
                display: 'flex',
                flexDirection: 'row',
                textDecoration: 'none',
                listStyleType: 'none',
                padding: '10px',
                color: 'white',
                fontFamily: 'Montserrat',
                paddingTop: 50,
              }}
            >
              <li>
                <a
                  key="1"
                  href="//kevinmurphywebdev.com"
                  style={styles.navItems}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  key="2"
                  href="//kevinmurphywebdev.com/portfolio"
                  style={styles.navItems}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  key="3"
                  href="//kevinmurphywebdev.com/resources"
                  style={styles.navItems}
                >
                  Resources
                </a>
              </li>
              <li>
                <a key="4" href="/" style={styles.navItems}>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

const styles = {
  navItems: {
    padding: '10px',
    color: 'white',
    ':hover': {
      color: '#BDE1FC',
    },
  },
}

export default Radium(Navbar)
