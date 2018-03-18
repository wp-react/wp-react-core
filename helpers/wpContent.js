import {randomItem} from './randomItem'
import Config from '../Services/Enviorment'
const root = Config.ROOT
const site = Config.SITE

export const placeHolderImg = [
  `${root}Images/placeholder/sc9Img1.jpg`,
  `${root}Images/placeholder/sc9Img2.jpg`,
  `${root}Images/placeholder/sc9Img3.jpg`,
  `${root}Images/placeholder/sc9Img4.jpg`,
  `${root}Images/placeholder/sc9Img5.jpg`,
  `${root}Images/placeholder/sc9Img6.jpg`,
  `${root}Images/placeholder/sc9Img7.jpg`,
  `${root}Images/placeholder/sc9Img8.jpg`,
  `${root}Images/placeholder/sc9Img9.jpg`
]

export const wpContent = (value) => {
  return {
    title: value.title.rendered,
    link: value.link.replace(`${site}`, ''),
    slug: value.slug,
    excerpt: value.excerpt.rendered,
    body: value.content.rendered,
    image: (value.better_featured_image ? value.better_featured_image.media_details.sizes['medium_large'].source_url : randomItem(placeHolderImg))
  }
}
