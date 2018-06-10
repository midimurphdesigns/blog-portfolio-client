import React from 'react';

import { Item } from 'semantic-ui-react';
import './Portfolio.css';

const items = [
  {
    childKey: 0,
    image: require('../../images/musixchange-preview.png'),
    header: 'Musixchange',
    description: 'A full stack app that facilitates buying and selling music gear. This app allowed me to combine two main passions of mine; music and web development.',
    meta: 'React, Redux, MongoDB, Node, Express',
    extra: 'musixchange.netlify.com',
  },
  {
    childKey: 1,
    image: require('../../images/staccato-preview2.png'),
    header: 'Staccato',
    description: 'An app to help learn music theory. This app is cool because of the algorithm involving linked lists used to suggest new questions.',
    meta: 'React, Redux, MongoDB, Node, Express',
    extra: 'https://staccato-music-theory.netlify.com/',
  },
  {
    childKey: 2,
    image: require('../../images/noteful-preview1.png'),
    header: 'Noteful',
    description: 'A note taking app, which I built the backend four times to learn four different ways of storing data including SQL and noSQL.',
    meta: 'MongoDB, PostgreSQL, Node, Express, Jquery, HTML, CSS',
    extra: 'https://kevin-noteful-v4.herokuapp.com/',
  },
  {
    childKey: 3,
    image: require('../../images/petful-preview.png'),
    header: 'Petful',
    description: 'An app using a algorithm to set up a queue based data structure allowing you to adopt animals from a shelter.',
    meta: 'MongoDB, React, Node, Express, CSS',
    extra: 'https://petful-kj.netlify.com/',
  },
  {
    childKey: 4,
    image: require('../../images/bookmark-app-preview.png'),
    header: 'Bookmark App',
    description: 'A simple app to bookmark websites. This was my first fullstack app and it\'s cool to look back and see how far I\'ve come',
    meta: 'Node, Express, Jquery, HTML, CSS',
    extra: 'https://bookmark-app.netlify.com/',
  },
]

const ItemExampleProps = () => (
  <Item.Group items={items} />
)

export default ItemExampleProps