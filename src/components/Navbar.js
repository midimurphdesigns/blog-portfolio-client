import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <header
        style={{
          display: 'flex',
          flexDirection: 'row',
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
            flexDirection: 'row',
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
          // style={{
          //   display: 'flex',
          //   flexDirection: 'row',
          //   fontSize: '25px',
          //   textDecoration: 'none',
          //   color: 'white',
          //   fontWeight: '500',
          // }}
          >
            <a
              style={{
                display: 'flex',
                flexDirection: 'row',
                fontSize: '15px',
                textDecoration: 'none',
                color: 'white',
                fontWeight: '500',
                width: '100%',
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

          <div
            style={{
              flex: '0.5',
            }}
          />
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
              }}
            >
              <li>
                <a
                  href="//kevinmurphywebdev.com"
                  style={{
                    padding: '10px',
                    color: 'white',
                  }}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="//kevinmurphywebdev.com/portfolio"
                  style={{
                    padding: '10px',
                    color: 'white',
                  }}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="//kevinmurphywebdev.com/resources"
                  style={{
                    padding: '10px',
                    color: 'white',
                  }}
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="//blog.kevinmurphywebdev.com"
                  style={{
                    padding: '10px',
                    color: 'white',
                  }}
                >
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
