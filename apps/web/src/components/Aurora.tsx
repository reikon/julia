import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

// Decorative animated background, pure CSS (no JS, no libraries):
//  1) a slowly rotating conic glow for continuous color movement
//  2) four large blurred color fields (pink / violet / blue / cyan) drifting
//  3) a crisp masked dot-grid for structure and "tech" sharpness
//  4) a vignette that fades everything into the page background for legibility.
const blob: SxProps<Theme> = {
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(72px)',
  willChange: 'transform',
};

export default function Aurora() {
  return (
    <Box
      aria-hidden
      sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}
    >
      {/* 1. Rotating conic glow */}
      <Box
        className="jl-animated"
        sx={{
          position: 'absolute',
          top: '34%',
          left: '38%',
          width: '110vmax',
          height: '110vmax',
          transform: 'translate(-50%, -50%)',
          background:
            'conic-gradient(from 90deg at 50% 50%, #ec4899, #8b5cf6, #3b82f6, #22d3ee, #ec4899)',
          opacity: 0.16,
          filter: 'blur(90px)',
          willChange: 'transform',
          animation: 'jl-spin 46s linear infinite',
        }}
      />

      {/* 2. Drifting color fields */}
      <Box
        className="jl-animated"
        sx={{
          ...blob,
          width: '44vw',
          height: '44vw',
          minWidth: 340,
          minHeight: 340,
          top: '-12%',
          left: '-8%',
          opacity: 0.55,
          background: 'radial-gradient(circle at center, #ec4899, transparent 64%)',
          animation: 'jl-aurora-1 24s ease-in-out infinite',
        }}
      />
      <Box
        className="jl-animated"
        sx={{
          ...blob,
          width: '50vw',
          height: '50vw',
          minWidth: 400,
          minHeight: 400,
          top: '-10%',
          right: '-14%',
          opacity: 0.5,
          background: 'radial-gradient(circle at center, #8b5cf6, transparent 64%)',
          animation: 'jl-aurora-2 30s ease-in-out infinite',
          animationDelay: '-7s',
        }}
      />
      <Box
        className="jl-animated"
        sx={{
          ...blob,
          width: '46vw',
          height: '46vw',
          minWidth: 360,
          minHeight: 360,
          bottom: '-20%',
          left: '2%',
          opacity: 0.55,
          background: 'radial-gradient(circle at center, #3b82f6, transparent 64%)',
          animation: 'jl-aurora-3 26s ease-in-out infinite',
          animationDelay: '-4s',
        }}
      />
      <Box
        className="jl-animated"
        sx={{
          ...blob,
          width: '34vw',
          height: '34vw',
          minWidth: 260,
          minHeight: 260,
          bottom: '-6%',
          right: '6%',
          opacity: 0.4,
          background: 'radial-gradient(circle at center, #22d3ee, transparent 64%)',
          animation: 'jl-aurora-4 22s ease-in-out infinite',
          animationDelay: '-11s',
        }}
      />

      {/* 3. Legibility vignette (kept tight so the headline sits on clean ground) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(120% 120% at 50% 30%, transparent 36%, var(--jl-color-bg) 92%)',
        }}
      />

      {/* 4. Crisp dot grid, masked to the center and slowly drifting */}
      <Box
        className="jl-animated"
        sx={{
          position: 'absolute',
          inset: '-26px',
          backgroundImage:
            'radial-gradient(circle, color-mix(in srgb, var(--jl-color-text) 16%, transparent) 1px, transparent 1.6px)',
          backgroundSize: '26px 26px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 36%, #000 0%, transparent 70%)',
          maskImage: 'radial-gradient(circle at 50% 36%, #000 0%, transparent 70%)',
          opacity: 0.6,
          animation: 'jl-grid-pan 16s linear infinite',
        }}
      />
    </Box>
  );
}
