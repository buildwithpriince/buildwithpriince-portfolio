import type { ResponsiveImage } from '../content/images'

/*
 * A photograph with responsive sources (SPEC §10). AVIF first, WebP as the
 * fallback and as the plain <img> src. Lazy by default: every photo on the
 * site is below the fold.
 */

type Props = {
  image: ResponsiveImage
  alt: string
  /** The rendered width, for the browser to pick a file — see the CSS. */
  sizes: string
  className?: string
}

export function Picture({ image, alt, sizes, className }: Props) {
  return (
    <picture>
      {Object.entries(image.sources).map(([type, srcSet]) => (
        <source key={type} type={type} srcSet={srcSet} sizes={sizes} />
      ))}
      <img
        className={className}
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}
