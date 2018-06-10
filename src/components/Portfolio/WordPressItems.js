import React from 'react'
import { Item } from 'semantic-ui-react'

const items = [
  {
    childKey: 0,
    image: require('../../images/smithsonian-preview.png'),
    header: 'Smithsonian Institution',
    description: 'After graduating from UVM, I used my anthropology BA to land an internship at the Smithsonian Institution in Washington, DC. I worked on three of their websites, which were the first websites I\'ve ever worked on. This was my intro to web development.',
    meta: 'WordPress, website maintenance, responsive design',
    extra: 'https://folklife.si.edu/ | https://folkways.si.edu/ | https://festival.si.edu/',
  },
  {
    childKey: 1,
    image: require('../../images/ipraf-logo1.png'),
    header: 'IPRA Foundation',
    description: 'The IPRA Foundation approached me with concerns about their website and asked me to create modern, responsive layouts for ~200 pages with the goal of increasing donations.',
    meta: 'WordPress, website maintenance, responsive design, donations',
    extra: 'http://iprafoundation.org/',
  },
  {
    childKey: 2,
    image: require('../../images/hfm-preview.png'),
    header: 'Herndon Friends Meeting',
    description: 'In order to facilitate the sale of Christmas oranaments for charity I made a website and online storefront including product photography/image editing.',
    meta: 'WordPress, responsive design, e-commerce, product photography',
    extra: 'http://hfmprojects.org/',
  },
  {
    childKey: 3,
    image: require('../../images/nation-analytics-preview.png'),
    header: 'Nation Analytics',
    description: 'As an upcoming business analytics startup, they needed a website to become visible and accessible. I made the initial website for them. However, in the long run they went with another dev team.',
    meta: 'WordPress, website maintenance, responsive design',
    extra: 'http://nationanalytics.com/',
  },
]

const ItemExampleProps = () => (
  <Item.Group items={items} />
)

export default ItemExampleProps