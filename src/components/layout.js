import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href="https://kevinmurphywebdev.com"
          >
            {title}
          </a>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <a
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            href="https://kevinmurphywebdev.com"
          >
            {title}
          </a>
        </h3>
      )
    }
    return (
      <div
        style={{
          backgroundImage: `linear-gradient( to bottom, #cfe8fd, rgba(232,244,254,.5) ), url(../../../../content/assets/km-logo.png)`,
        }}
      >
        <header
          style={{
            backgroundColor: 'blue',
            width: '100%',
            height: '70px',
            top: '0',
            left: '0',
          }}
        >
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              padding: '0, 10px',
            }}
          >
            <div
              style={{
                flex: '1',
              }}
            />
            <div
              style={{
                fontSize: '35px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '500',
              }}
            >
              <a
                style={{
                  fontSize: '35px',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: '500',
                }}
                href="//kevinmurphywebdev.com"
              >
                Kevin Murphy
              </a>
            </div>
            <div
              style={{
                flex: '1',
              }}
            />
            {/* <div className="toggle-button">
              <DrawerToggleButton />
            </div> */}
            <div
              style={{
                flex: '0.5',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }}
            >
              <ul>
                <li>
                  <a href="//kevinmurphywebdev.com">About Me</a>
                </li>
                <li>
                  <a href="//kevinmurphywebdev.com/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="//kevinmurphywebdev.com/resources">Resources</a>
                </li>
                <li>
                  <a href="//blog.kevinmurphywebdev.com">Blog</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()},{` `}
            <a href="https://kevinmurphywebdev.com">Kevin Murphy</a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Layout
