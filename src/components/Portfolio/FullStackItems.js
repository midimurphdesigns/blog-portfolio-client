import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: require('../../images/musixchange-preview.png'),
    header: 'Musixchange',
    description: 'A full stack app that facilitates buying and selling of music gear. This app allowed me to combine two main passions of mine; music and web development.',
    meta: 'musixchange.netlify.com',
    extra: 'React, Redux, MongoDB, Node, Express',
  },
  {
    childKey: 1,
    image: '/assets/images/wireframe/image.png',
    header: 'Staccato',
    description: 'An app to help learn music theory. This app is cool because of the algorithm involving linked lists used to suggest new questions.',
    meta: 'staccato-music-theory.netlify.com',
    extra: 'React, Redux, MongoDB, Node, Express',
  },
  {
    childKey: 2,
    image: '/assets/images/wireframe/image.png',
    header: 'Noteful',
    description: 'A note taking app, which I built the backend four times to learn four different ways of storing data including SQL and noSQL.',
    meta: 'https://kevin-noteful-v4.herokuapp.com/',
    extra: 'MongoDB, PostgreSQL, Node, Express, Jquery, HTML, CSS',
  },
  {
    childKey: 3,
    image: '/assets/images/wireframe/image.png',
    header: 'Bookmark App',
    description: 'A simple app to bookmark websites. This was my first fullstack app and it\'s cool to look back and see how far I\'ve come',
    meta: 'placeholder',
    extra: 'Node, Express, Jquery, HTML, CSS',
  },
]

const ItemExampleProps = () => (
  <Item.Group items={items} />
)

export default ItemExampleProps