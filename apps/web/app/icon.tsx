import { ImageResponse } from 'next/og';

// Generated favicon: a "P" on the brand gradient. Build-safe (no remote fetch).
export const runtime = 'nodejs';

export const size = { width: 512, height: 512 };
export const contentType = 'image/png';

const BRAND_GRADIENT = 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: BRAND_GRADIENT,
        color: '#ffffff',
        fontSize: '360px',
        fontWeight: 800,
        fontFamily: 'sans-serif',
      }}
    >
      P
    </div>,
    { ...size },
  );
}
