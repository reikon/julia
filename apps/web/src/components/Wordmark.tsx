import Box from '@mui/material/Box';
import type { CSSProperties } from 'react';

// The huge brand wordmark, assembled letter by letter: each glyph flies in from a
// scattered position, rotation, and scale, then settles, carrying the brand
// gradient. Pure CSS (per-letter custom properties drive the keyframe), so it
// renders as a server component and degrades to static text under reduced-motion.
const WORD = 'Peptidia';

// Deterministic pseudo-random (no Math.random) so server and client markup match.
function noise(seed: number): number {
  const x = Math.sin(seed * 999.13) * 10000;
  return x - Math.floor(x); // 0..1
}

export default function Wordmark() {
  return (
    <Box
      aria-label={WORD}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'nowrap',
        perspective: '900px',
        userSelect: 'none',
      }}
    >
      {WORD.split('').map((char, i) => {
        const tx = `${Math.round((noise(i + 1) * 2 - 1) * 320)}px`;
        const ty = `${Math.round((noise(i + 7) * 2 - 1) * 280)}px`;
        const rot = `${Math.round((noise(i + 13) * 2 - 1) * 640)}deg`;
        const delay = (0.05 + i * 0.06).toFixed(2);
        return (
          <Box
            key={i}
            component="span"
            aria-hidden
            className="jl-animated"
            style={{ ['--tx']: tx, ['--ty']: ty, ['--rot']: rot } as CSSProperties}
            sx={{
              display: 'inline-block',
              fontWeight: 850,
              fontSize: 'clamp(2.75rem, 13vw, 11rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              pb: '0.05em',
              transformOrigin: 'center',
              willChange: 'transform',
              backgroundImage: 'var(--jl-gradient-brand)',
              backgroundSize: '250% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              animation: `jl-assemble .85s cubic-bezier(.16,.84,.3,1) ${delay}s both, jl-shimmer 7s ease-in-out ${(Number(delay) + 1).toFixed(2)}s infinite`,
            }}
          >
            {char}
          </Box>
        );
      })}
    </Box>
  );
}
