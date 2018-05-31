import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: '/assets/images/wireframe/image.png',
    header: 'Smithsonian Institution',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 1,
    image: '/assets/images/wireframe/image.png',
    header: 'IPRA Foundation',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 2,
    image: '/assets/images/wireframe/image.png',
    header: 'Herndon Friends Meeting',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
  {
    childKey: 3,
    image: '/assets/images/wireframe/image.png',
    header: 'Nation Analytics',
    description: 'Description',
    meta: 'Metadata',
    extra: 'Extra',
  },
]

const ItemExampleProps = () => (
  <Item.Group items={items} />
)

export default ItemExampleProps