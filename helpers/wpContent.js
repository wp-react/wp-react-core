import {randomItem} from './randomItem'
import Config from '../Services/Enviorment'
const root = Config.ROOT
const site = Config.SITE

export const placeHolderImg = Config.placeHolder

export const wpContent = (value) => {
  return {
    title: value.title.rendered,
    link: value.link.replace(`${site}`, ''),
    slug: value.slug,
    excerpt: value.excerpt.rendered,
    body: value.content.rendered,
    image: (value.better_featured_image && value.better_featured_image.media_details.sizes['medium_large'] ? value.better_featured_image.media_details.sizes['medium_large'].source_url : randomItem(placeHolderImg))
  }
}
