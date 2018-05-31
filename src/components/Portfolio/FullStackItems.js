import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: '/assets/images/wireframe/image.png',
    header: 'Musixchange',
    description: 'A full stack app to buy and sell music gear',
    meta: 'musixchange.netlify.com',
    extra: 'MongoDB, Express, React, Node',
  },
  {
    childKey: 1,
    image: '/assets/images/wireframe/image.png',
    header: 'Staccato',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit totam incidunt aperiam, officia aspernatur nisi sapiente provident deleniti iusto optio amet at numquam veritatis eaque magnam, voluptates doloribus! Expedita, dolorem.',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 2,
    image: '/assets/images/wireframe/image.png',
    header: 'Noteful',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 3,
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