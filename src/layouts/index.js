import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import "../styles/layout-overide.css";

import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Footer from '../components/Footer/Footer'

import Media from "react-media";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Navbar />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 980,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <Media query={{ maxWidth: 848 }}>
        {matches =>
          matches ? (
            <div
              style={{
                margin: "0 auto",
                maxWidth: 980,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                padding: "25px"
              }}
            >
              <div style={{ flex: 1 }}>{children()}</div>
            </div>
          ) : (
              <div
                style={{
                  margin: "0 auto",
                  maxWidth: 980,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  height: "100%",
                  padding: "25px"
                }}
              >
                <div style={{ flex: 2.5, paddingRight: "30px" }}>
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
);

console.log(TemplateWrapper);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;