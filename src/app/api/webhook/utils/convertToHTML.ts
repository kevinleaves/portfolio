import { toHTML } from '@portabletext/to-html'
import { Image, BlockContent } from 'types/interfaces'

// TODO: PASS CUSTOM REACT IMAGE COMPONENT INTO toHTML
export const convertToHTML = (content: BlockContent) => {
  const myPortableTextComponents = {
    types: {
      image: (value: Image) => {
        return `<img src=${value.value.asset.url} alt="Image" />`
      },
    },
  }
  return toHTML(content, { components: myPortableTextComponents })
}
