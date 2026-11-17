// lib/image.js
// Cloudinary Image URL builder for your catalog

const CLOUD_NAME = 'an70jcjq'; // Your Cloudinary cloud name

export const imageUrl = (key, width = 640, quality = 'auto') => {
  // Remove leading slashes and file extensions to match Cloudinary's public ID format
  const safeKey = key.replace(/^\/+/, '').replace(/\.[^/.]+$/, '');

  // Generates an optimized Cloudinary URL with auto-format (WebP/AVIF) and resizing
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},q_${quality},f_auto,c_fit/${safeKey}`;
};

export const imageSrcSet = (key, widths = [320, 480, 640, 960, 1200]) =>
  widths
    .map((w) => `${imageUrl(key, w)} ${w}w`)
    .join(', ');