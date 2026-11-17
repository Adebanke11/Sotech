import { useState } from 'react';
import { imageUrl, imageSrcSet } from '../lib/images';

// Lazy, responsive Cloudflare image with a light placeholder if the file is missing or loading fails.
export default function ResponsiveImage({ imageKey, alt = '', width = 640, height = 480, sizes = '(min-width: 992px) 25vw, (min-width: 576px) 45vw, 80vw', priority = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`st-img-fallback ${className}`} style={{ aspectRatio: `${width}/${height}` }} role={alt ? 'img' : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
        <span>{alt}</span>
      </div>
    );
  }
  return (
    <img
      className={`st-img ${className}`}
      src={imageUrl(imageKey, width)}
      srcSet={imageSrcSet(imageKey)}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
