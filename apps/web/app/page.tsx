import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from '../src/components/Link';
import Aurora from '../src/components/Aurora';
import RollingHeadline from '../src/components/RollingHeadline';
import Wordmark from '../src/components/Wordmark';
import SocialBar from '../src/components/SocialBar';

// Entrance easing + staggered delays (seconds).
const rise = (delay: number) => `jl-rise .8s cubic-bezier(.2,.7,.2,1) ${delay}s both`;

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      <Aurora />

      {/* Hero (centered, grows to fill) */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          flexGrow: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: { xs: 8, md: 10 },
        }}
      >
        <Stack spacing={{ xs: 3, md: 4 }} sx={{ alignItems: 'center', textAlign: 'center' }}>
          {/* Huge brand wordmark (letter-by-letter assemble) */}
          <Wordmark />

          {/* Tagline (word-by-word 3D roll-up, high contrast) */}
          <RollingHeadline />

          {/* CTAs */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            className="jl-animated"
            sx={{
              pt: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '100%', sm: 'auto' },
              animation: rise(0.9),
            }}
          >
            <Button
              component={Link}
              href="/doc"
              size="large"
              variant="contained"
              sx={{
                px: 4,
                py: 1.25,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#fff',
                backgroundImage: 'var(--jl-gradient-brand)',
                backgroundSize: '200% auto',
                boxShadow: '0 10px 30px -8px rgba(139,92,246,0.55)',
                transition:
                  'background-position .45s ease, transform .2s ease, box-shadow .2s ease',
                '&:hover': {
                  backgroundImage: 'var(--jl-gradient-brand)',
                  backgroundPosition: 'right center',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 16px 40px -8px rgba(139,92,246,0.7)',
                },
              }}
            >
              Explore the wiki
            </Button>
            <Button
              component={Link}
              href="/doc/how-it-works"
              size="large"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.25,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'text.primary',
                borderColor: 'divider',
                backdropFilter: 'blur(6px)',
                transition: 'border-color .2s ease, transform .2s ease, background .2s ease',
                '&:hover': {
                  borderColor: 'text.primary',
                  transform: 'translateY(-2px)',
                  background: 'color-mix(in srgb, var(--jl-color-text) 5%, transparent)',
                },
              }}
            >
              How it works
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        className="jl-animated"
        sx={{ position: 'relative', zIndex: 1, pb: 3, pt: 2, animation: rise(1.2) }}
      >
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <SocialBar />
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Educational reference. Not medical advice.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}
