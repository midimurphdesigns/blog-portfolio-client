import React from 'react';

import './Resources.css'
import ScrollTop from '../ScrollTop/ScrollTop'

export default function Resources(props) {
  return (
    <div className="page-container">
      <ScrollTop />
      <h1 className="resources-page-title" id="header">Web Development Resources</h1>
      <h2 className="resources-page-subtitle">A personally curated list of articles, tutorials, books, and more</h2>
      <div className="index">
        {/* <label className="index-title">Index:</label> */}
        <ul className="index-list">
          <li><a href="#general-web-development">General Web Development</a></li>
          <li><a href="#general-javascript">General JavaScript</a></li>
          <li><a href="#react">React JS</a></li>
        </ul>
        <ul className="index-list">
          <li><a href="#html-css">HTML & CSS</a></li>
          <li><a href="#node-express">Node & Express</a></li>
          <li><a href="#mongodb">MongoDB</a></li>
        </ul>
        <ul className="index-list">
          <li><a href="#postgresql">PostgreSQL</a></li>
          <li><a href="#design-ux">Design & UX</a></li>
          <li><a href="#color">Color</a></li>
        </ul>
      </div>

      <div className="">
        <div className="category">
          <h3 className="category-title" id="general-web-development">General Web Development</h3>
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
        <div className="category">
          <h3 className="category-title" id="general-javascript">General JavaScript</h3>
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
        <div className="category">
          <h3 className="category-title" id="react">React JS</h3>
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

      <div className="">
        <div className="category">
          <h3 className="category-title" id="html-css">HTML/CSS</h3>
          <ul>
            <li><a href="http://www.csszengarden.com/" target="_blank">CSS Zen Garden - Styling Ideas and Inspiration</a></li>
            <li><a href="https://css-tricks.com/" target="_blank">CSS Tricks - Styling Ideas and Inspiration</a></li>
            <li><a href="https://blog.logrocket.com/how-css-works-parsing-painting-css-in-the-critical-rendering-path-b3ee290762d3?ref=ewebdesign.com" target="_blank">How CSS works: Parsing & painting CSS in the critical rendering path</a></li>
            <li><a href="https://medium.com/@jillplatts/6-minute-beginners-guide-to-css-flexbox-527b3ff3480b" target="_blank">5 Minute Beginner’s Guide to CSS Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">A Complete Guide to Flexbox</a></li>
            <li><a href="https://www.cssmatic.com/box-shadow" target="_blank">Box Shadow CSS Generator</a></li>
            <li><a href="https://css-tricks.com/almanac/properties/b/box-shadow/" target="_blank">Box Shadow Variations</a></li>
            <li><a href="https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf" target="_blank">The ultimate CSS battle: Grid vs Flexbox</a></li>
            <li><a href="https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525" target="_blank">Modern CSS Explained For Dinosaurs</a></li>
            <li><a href="https://medium.freecodecamp.org/a-beginners-guide-to-css-grid-3889612c4b35" target="_blank">A Beginner’s Guide to CSS Grid</a></li>
          </ul>
        </div>
        <div className="category">
          <h3 className="category-title" id="node-express">Node & Express</h3>
          <ul>
            <li><a href="https://www.sohamkamani.com/blog/2018/05/30/understanding-how-expressjs-works/" target="_blank">How express.js works - Understanding the internals of the express library</a></li>
            <li><a href="https://www.thenativeweb.io/blog/2018-06-12-15-47-from-node-to-go-there-and-back-again/" target="_blank">From Node.js to Go: There, and back again</a></li>
            <li><a href="https://www.youtube.com/watch?v=Z1ktxiqyiLA" target="_blank">Node.js Login System With Passport</a></li>
            <li><a href="https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5" target="_blank">What exactly is Node.js?</a></li>
            <li><a href="https://noderize.js.org/" target="_blank">Noderize - Create a Node app in less than 30 seconds</a></li>
            <li><a href="https://www.codementor.io/equimper/testing-your-api-with-postman-4tuwpkswp" target="_blank">Testing your API with Postman</a></li>
            <li><a href="https://alligator.io/nodejs/express-basics/?utm_campaign=Revue%20newsletter&utm_medium=Newsletter&utm_source=Alligator.io" target="_blank">Basic Express Server in Node.js</a></li>
            <li><a href="https://scotch.io/tutorials/easy-node-authentication-setup-and-local" target="_blank">Easy Node Authentication: Setup and Local</a></li>
            <li><a href="https://www.youtube.com/watch?v=K8spO4hHMhg" target="_blank">Scaling NodeJS beyond the ordinary | JSConf Iceland 2018</a></li>
            <li><a href="https://www.youtube.com/watch?v=TlB_eWDSMt4" target="_blank">Node.js Tutorial for Beginners: Learn Node in 1 Hour</a></li>
          </ul>
        </div>
        <div className="category">
          <h3 className="category-title" id="mongodb">MongoDB</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=pWbMrx5rVBE" target="_blank">MongoDB In 30 Minutes - Traversy Media</a></li>
            <li><a href="https://mlab.com/welcome/" target="_blank">mLab - Host your database for free</a></li>
            <li><a href="https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design-part-1" target="_blank">6 Rules of Thumb for MongoDB Schema Design</a></li>
            <li><a href="https://hackernoon.com/mongodb-vs-mysql-comparison-which-database-is-better-e714b699c38b" target="_blank">MongoDB vs MySQL Comparison: Which Database is Better?</a></li>
            {/* <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li> */}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="category">
          <h3 className="category-title" id="postgresql">PostgreSQL</h3>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=AFiqctkoVJ4&list=PLillGF-RfqbaEmlPcX5e_ejaK7Y5MydkW" target="_blank">Recipe App Using Node.js & PostgreSQL</a></li>
            <li><a href="https://severalnines.com/blog/my-favorite-postgresql-queries-and-why-they-matter" target="_blank">My Favorite PostgreSQL Queries and Why They Matter</a></li>
            <li><a href="https://www.postgresql.org/docs/10/static/tutorial.html" target="_blank">Official PostgreSQL Tutorial</a></li>
            <li><a href="https://www.youtube.com/watch?v=xaWlS9HtWYw" target="_blank">SQL Tutorial for Beginners 1: Installing PostgreSQL and Creating Your First Database</a></li>
            <li><a href="https://www.pgadmin.org/" target="_blank">pgAdmin development platform for PostgreSQL</a></li>
            {/* <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li>
            <li><a href="" target="_blank">article title</a></li> */}
          </ul>
        </div>
        <div className="category">
          <h3 className="category-title" id="design-ux">Design & UX</h3>
          <ul>
            <li><a href="https://medium.com/sketch-app-sources/the-ui-and-ux-design-pocket-guide-volume-one-dfb3675ea828?ref=webdesignernews.com" target="_blank">The ‘UI and UX Design’ Pocket Guide</a></li>
            <li><a href="https://www.webdesignerdepot.com/2018/05/frictionless-ux-how-to-create-smooth-user-flows/?ref=webdesignernews.com" target="_blank">frictionless UX: How to create smooth user flows</a></li>
            <li><a href="https://uxtricks.design/blogs/ux-design/inclusive-design-designing-for-accessibility/?ref=ewebdesign.com" target="_blank">Inclusive Design: How to Design for Accessibility</a></li>
            <li><a href="https://www.webdesignerdepot.com/2018/05/a-simple-introduction-to-intrinsic-web-design/?ref=webdesignernews.com" target="_blank">A simple introduction to intrinsic web design</a></li>
            <li><a href="https://webdesign.tutsplus.com/articles/the-basics-of-design-thinking--cms-30426?ref=webdesignernews.com" target="_blank">The Basics of Design Thinking</a></li>
            <li><a href="https://uxmyths.com/" target="_blank">UX Myths - Frequent user experience misconceptions</a></li>
            <li><a href="https://design.google/library/io-2018-our-definitive-guide-design/?ref=webdesignernews.com" target="_blank">I/O 2018: Google's Definitive Guide to Design</a></li>
            <li><a href="https://medium.com/@erikdkennedy/7-rules-for-creating-gorgeous-ui-part-1-559d4e805cda" target="_blank">7 Rules for Creating Gorgeous UI</a></li>
            <li><a href="https://medium.com/thinking-design/how-to-turn-user-research-into-smart-design-decisions-c2c6f02f98b" target="_blank">How to Turn User Research into Smart Design Decisions</a></li>
            <li><a href="https://ewebdesign.com/4-psychology-principles-web-designers-must-know/?ref=ewebdesign.com" target="_blank">4 Psychology Principles Web Designers Must Know</a></li>
          </ul>
        </div>
        <div className="category">
          <h3 className="category-title" id="color">Color</h3>
          <ul>
            <li><a href="https://palx.jxnblk.com/" target="_blank">PALX - Automatic UI Color Palette Generator</a></li>
            <li><a href="https://toolness.github.io/accessible-color-matrix/" target="_blank">Accessible Color Palette - Contrasting Text Pairs with Accessible Color Palette Builder</a></li>
            <li><a href="http://chir.ag/projects/name-that-color/#61EDB1" target="_blank">Name that Color - Better Color Names with Color Name & Hue</a></li>
            <li><a href="http://palette.site/" target="_blank">Site Palette - Get the essential colors from a website</a></li>
            <li><a href="https://www.huesnap.com/" target="_blank">Hue Snap - Color palette ideas</a></li>
            <li><a href="https://duotone.shapefactory.co/" target="_blank">Duotone image effect generator</a></li>
            <li><a href="https://www.smashingmagazine.com/2010/02/color-theory-for-designer-part-3-creating-your-own-color-palettes/" target="_blank">Color Theory for Designers: How To Create Your Own Color Schemes</a></li>
            <li><a href="https://www.smashingmagazine.com/2016/04/web-developer-guide-color/" target="_blank">A Simple Web Developer's Color Guide</a></li>
            <li><a href="http://www.colorzilla.com/" target="_blank">Colorzilla - Grab colors from any website</a></li>
            <li><a href="http://www.colorzilla.com/gradient-editor/" target="_blank">Ultimate CSS Gradient Generator</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
}