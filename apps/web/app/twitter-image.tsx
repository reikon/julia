// The Twitter card reuses the OpenGraph image (1200x630, summary_large_image).
// The default export (the image generator) and the metadata fields are re-exported
// from opengraph-image to keep a single source of truth. `runtime` is NOT re-exported:
// Next's static analyzer requires route-segment config to be declared locally, so it
// is set directly here.
export const runtime = 'nodejs';
export { default, alt, size, contentType } from './opengraph-image';
