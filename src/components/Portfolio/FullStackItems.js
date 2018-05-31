import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: '/assets/images/wireframe/image.png',
    header: 'Musixchange',
    description: 'Description',
    meta: 'MongoDB, Express, React, Node',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: '/assets/images/wireframe/image.png',
    header: 'Final Capstone',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 2,
    image: '/assets/images/wireframe/image.png',
    header: 'Staccato',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 3,
    image: '/assets/images/wireframe/image.png',
    header: 'Noteful',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 4,
    image: '/assets/images/wireframe/image.png',
    header: 'Bookmark App',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const ItemExampleProps = () => (
  <Item.Group items={items} />
)

export default ItemExampleProps