import { ImageResponse } from 'next/og';

// Static, build-safe OG image. No remote fonts or images are fetched: it relies on
// ImageResponse's default font and inline styles only, so the build works offline.
export const runtime = 'nodejs';

export const alt = 'Peptidia: the trusted intelligence network for peptides.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Brand tokens (pink, violet, blue) and the signature pink to violet to blue gradient.
const PINK = '#ec4899';
const VIOLET = '#8b5cf6';
const BLUE = '#3b82f6';
const INK = '#0f172a';
const MUTED = '#475569';
const BRAND_GRADIENT = `linear-gradient(135deg, ${PINK} 0%, ${VIOLET} 50%, ${BLUE} 100%)`;

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        padding: '72px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Top accent bar: the brand gradient. */}
      <div
        style={{
          display: 'flex',
          width: '180px',
          height: '14px',
          borderRadius: '9999px',
          backgroundImage: BRAND_GRADIENT,
        }}
      />

      {/* Wordmark, with the gradient clipped to the text. */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            fontSize: '150px',
            fontWeight: 800,
            letterSpacing: '-4px',
            lineHeight: 1,
            backgroundImage: BRAND_GRADIENT,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Peptidia
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '28px',
            fontSize: '46px',
            fontWeight: 600,
            color: INK,
            maxWidth: '960px',
          }}
        >
          The trusted intelligence network for peptides.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '16px',
            fontSize: '30px',
            fontWeight: 400,
            color: MUTED,
            maxWidth: '960px',
          }}
        >
          Evidence-backed, source-cited. Educational, not medical advice.
        </div>
      </div>

      {/* Bottom row: gradient dots plus a quiet domain mark. */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', gap: '12px' }}>
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '9999px',
              backgroundColor: PINK,
            }}
          />
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '9999px',
              backgroundColor: VIOLET,
            }}
          />
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '9999px',
              backgroundColor: BLUE,
            }}
          />
        </div>
        <div style={{ display: 'flex', fontSize: '30px', fontWeight: 600, color: MUTED }}>
          peptidia
        </div>
      </div>
    </div>,
    { ...size },
  );
}
