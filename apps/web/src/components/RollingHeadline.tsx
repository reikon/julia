import Box from '@mui/material/Box';

// The tagline under the wordmark, animated word by word: each word rolls up in 3D
// (rotateX) with a stagger. Rendered in a solid high-contrast color so it stays
// crisp and readable beneath the gradient wordmark. Pure CSS, server component.
const LINES = ['A trusted intelligence', 'network for peptides.'];

export default function RollingHeadline() {
  let idx = -1;
  return (
    <Box
      component="h1"
      sx={{
        m: 0,
        perspective: '900px',
        textAlign: 'center',
        color: 'text.primary',
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: 1.18,
        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
      }}
    >
      {LINES.map((line, li) => (
        <Box key={li} component="span" sx={{ display: 'block' }}>
          {line.split(' ').map((word) => {
            idx += 1;
            const delay = 0.15 + idx * 0.07;
            return (
              <Box
                key={`${word}-${idx}`}
                component="span"
                className="jl-animated"
                sx={{
                  display: 'inline-block',
                  mr: '0.24em',
                  pb: '0.08em',
                  transformOrigin: '50% 100%',
                  animation: `jl-word-roll .85s cubic-bezier(.2,.85,.25,1) ${delay.toFixed(2)}s both`,
                }}
              >
                {word}
              </Box>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
