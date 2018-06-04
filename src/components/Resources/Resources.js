import React from 'react';

import './Resources.css'

export default function Resources(props) {
  return (
    <div className="page-container">
      <h1 className="resources-page-title">Web Development Resources</h1>
      <div className="row">
        <div className="category col-4">
          <h3 className="category-title">General Web Development</h3>
          <ul>
            <li><a href="https://www.keycdn.com/blog/web-development-tools/" target="_blank">100+ Web Development Tools</a></li>
            <li><a href="https://webuilddesign.com/33-useful-youtube-channels-for-learning-web-design-and-development/" target="_blank">33 Useful Youtube channels for learning web design and development</a></li>
            <li><a href="https://designmodo.com/tools-design-2018/" target="_blank">Best tools for web designers to use in 2018</a></li>
            <li><a href="https://www.smashingmagazine.com/2018/02/comprehensive-website-planning-guide-part1/" target="_blank">A comprehensive website planning guide</a></li>
            <li><a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg/playlists" target="_blank">The Net Ninja web development youtube videos</a></li>
            <li><a href="https://webcode.tools/" target="_blank">Boilerplate code generator</a></li>
            <li><a href="https://svgr.now.sh/" target="_blank">SVG to JSX transformer</a></li>
            <li><a href="http://www.heymeta.com/" target="_blank">Hey Meta - Website meta tag checker</a></li>
            <li><a href="https://prettier.io/" target="_blank">Prettier - An opinionated code formatter</a></li>
            <li><a href="https://www.bypeople.com/" target="_blank">ByPeople - Tons of freebies and articles</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">General JavaScript</h3>
          <ul>
            <li><a href="https://medium.com/javascript-scene/12-books-every-javascript-developer-should-read-9da76157fb3" target="_blank">12 Books every JavaScript developer should read</a></li>
            <li><a href="https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e" target="_blank">How JavaScript works: inside the V8 engine + 5 tips on how to write optimized code</a></li>
            <li><a href="https://blog.bloomca.me/2018/03/24/async-patterns-js.html" target="_blank">Asynchronous Patterns in JavaScript</a></li>
            <li><a href="http://eloquentjavascript.net/" target="_blank">Eloquent JavaScript - A book explaining key concepts</a></li>
            <li><a href="https://github.com/getify/You-Dont-Know-JS" target="_blank">You Don't Know JavaScript - A book that goes VERY in depth into explaining JavaScript</a></li>
            <li><a href="https://medium.freecodecamp.org/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e" target="_blank">Examples of everything new in ECMAScript 2016, 2017, and 2018</a></li>
            <li><a href="https://codeburst.io/understanding-javascript-proxies-by-examining-on-change-library-f252eddf76c2" target="_blank">Understanding JavaScript Proxies by Examining on-change Library</a></li>
            <li><a href="https://medium.com/@fknussel/arrays-objects-and-mutations-6b23348b54aa" target="_blank">Arrays, Objects and Mutations</a></li>
            <li><a href="http://speakingjs.com/es5/" target="_blank">Speaking JavaScript - A book on JavaScript</a></li>
            <li><a href="http://exploringjs.com/es6/" target="_blank">Exploring ES6 - A book on ES6</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">React JS</h3>
          <ul>
            <li><a href="https://www.youtube.com/playlist?list=PLoYCgNOIyGABj2GQSlDRjgvXtqfDxKm5b" target="_blank">React JS video tutorials on youtube</a></li>
            <li><a href="https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd" target="_blank">How to NOT React: Common Anti-Patterns and Gotchas in React</a></li>
            <li><a href="https://medium.com/@samerbuna/react-js-frequently-faced-problems-45e7060ef884" target="_blank">React.js Frequently Faced Problems</a></li>
            <li><a href="https://medium.freecodecamp.org/react-interview-questions-c8a319ed02bd" target="_blank">React Interview Questions</a></li>
            <li><a href="https://www.youtube.com/watch?v=l9eyot_IXLY" target="_blank">React Router V4 video tutorial</a></li>
            <li><a href="https://medium.com/@manojsinghnegi/react-state-vs-props-explained-51beebd73b21" target="_blank">React State vs Props explained</a></li>
            <li><a href="https://hackernoon.com/why-im-switching-from-angular-to-react-and-redux-in-2018-cb48be00fda7" target="_blank">Why I’m switching from Angular to React and Redux in 2018</a></li>
            <li><a href="https://medium.freecodecamp.org/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76" target="_blank">Yes, React is taking over front-end development. The question is why.</a></li>
            <li><a href="https://medium.com/@bryantheastronaut/ok-here-we-go-b9f683c5a00c" target="_blank">MERN Stack — The Old Facebook Comment Box Tutorial except 2018</a></li>
            <li><a href="https://scotch.io/tutorials/conditional-routing-with-react-router-v4?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Alligator.io" target="_blank">Conditional Routing with React Router v4</a></li>
          </ul>
        </div>
      </div>

      {/* ===== */}
      {/* ROW 2 */}
      {/* ===== */}

      <div className="row">
        <div className="category col-4">
          <h3 className="category-title">HTML/CSS</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">Node JS/Express</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">MongoDB</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
      </div>

      {/* ===== */}
      {/* ROW 3 */}
      {/* ===== */}

      <div className="row">
        <div className="category col-4">
          <h3 className="category-title">SQL</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">Design & UX</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
        <div className="category col-4">
          <h3 className="category-title">Color</h3>
          <ul>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}