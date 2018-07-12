import React from "react";

import { Item } from "semantic-ui-react";
import "./Portfolio.css";

const items = [
  {
    childKey: 0,
    image: require("../../images/concert-connect-preview.png"),
    header: "ConcertConnect",
    description:
      "An app that allows users to search for live music in their area and invite friends to shows they've found.",
    meta: "React, Redux, MongoDB, Node, Express",
    extra: (
      <div>
        <a
          rel="noopener noreferrer"
          href="https://concertconnect-client.herokuapp.com/"
          target="_blank"
        >
          Live App
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/kttm-development/kttm-client"
          target="_blank"
        >
          Github Client Repo
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/kttm-development/kttm-server"
          target="_blank"
        >
          Github Server Repo
        </a>
      </div>
    )
  },
  {
    childKey: 1,
    image: require("../../images/musixchange-preview.png"),
    header: "Musixchange",
    description:
      "An app that facilitates buying and selling music gear. This app allowed me to combine two main passions of mine; music and web development.",
    meta: "React, Redux, MongoDB, Node, Express",
    extra: (
      <div>
        <a
          rel="noopener noreferrer"
          href="http://musixchange.netlify.com/"
          target="_blank"
        >
          Live App
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/midimurphdesigns/musixchange-client"
          target="_blank"
        >
          Github Client Repo
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/midimurphdesigns/musixchange-server"
          target="_blank"
        >
          Github Server Repo
        </a>
      </div>
    )
  },
  {
    childKey: 2,
    image: require("../../images/staccato-preview.png"),
    header: "Staccato",
    description:
      "An app to help learn music theory. This app is cool because of the algorithm involving linked lists used to suggest new questions.",
    meta: "React, Redux, MongoDB, Node, Express",
    extra: (
      <div>
        <a
          rel="noopener noreferrer"
          href="https://staccato-music-theory.netlify.com/"
          target="_blank"
        >
          Live App
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/midimurphdesigns/staccato-client"
          target="_blank"
        >
          Github Client Repo
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/midimurphdesigns/staccato-server"
          target="_blank"
        >
          Github Server Repo
        </a>
      </div>
    )
  },
  {
    childKey: 3,
    image: require("../../images/noteful-preview1.png"),
    header: "Noteful",
    description:
      "A good 'ol note taking app. I built the backend four times to learn four different ways of storing data including SQL and noSQL.",
    meta: "MongoDB, PostgreSQL, Node, Express, Jquery, HTML, CSS",
    extra: (
      <div>
        <a
          rel="noopener noreferrer"
          href="https://kevin-noteful-v4.herokuapp.com/"
          target="_blank"
        >
          Live App
        </a>
        <br />
        <a
          rel="noopener noreferrer"
          href="https://github.com/midimurphdesigns/noteful-v4"
          target="_blank"
        >
          Github Repo
        </a>
      </div>
    )
  }
  // {
  //   childKey: 4,
  //   image: require('../../images/petful-preview.png'),
  //   header: 'Petful',
  //   description: 'An app using a algorithm to set up a queue based data structure allowing you to adopt animals from a shelter.',
  //   meta: 'MongoDB, React, Node, Express, CSS',
  //   extra: <a href="https://petful-kj.netlify.com/" target="_blank">https://petful-kj.netlify.com/</a>,
  // },
];

const ItemExampleProps = () => <Item.Group items={items} />;

export default ItemExampleProps;
