import { getImageProps, StaticImageData } from 'next/image'

export const getBackgroundImage = (
  src: string | StaticImageData,
  width: number | `${number}` | undefined,
  height: number | `${number}` | undefined,
  quality?: number | `${number}` | undefined,
) => {
  const {
    props: { srcSet = '' },
  } = getImageProps({ alt: '', width, height, src, quality })

  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')

  return `image-set(${imageSet})`
}
