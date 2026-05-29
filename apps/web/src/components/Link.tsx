'use client';
// Next.js 16 forbids passing the server `next/link` directly into a Client
// Component's `component` prop (e.g. MUI's <Button component={Link} />).
// Re-exporting it from a 'use client' module makes it safe to use that way.
import NextLink from 'next/link';

export default NextLink;
