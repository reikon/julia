'use client';
import { createTheme } from '@mui/material/styles';
import { tokens, semantic } from '@julia/tokens';

// MUI theme built FROM the shared design tokens. The same tokens drive the
// Docusaurus wiki via tokens.css, keeping the landing page and the wiki identical.
//
// `cssVariables.colorSchemeSelector: 'data-theme'` aligns MUI's color-scheme
// switching with the `[data-theme='dark']` selector emitted by @julia/tokens.
const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-theme' },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: semantic.light['color-primary'],
          dark: semantic.light['color-primary-strong'],
          contrastText: semantic.light['color-primary-contrast'],
        },
        secondary: { main: semantic.light['color-accent'] },
        background: {
          default: semantic.light['color-bg'],
          paper: semantic.light['color-surface'],
        },
        text: {
          primary: semantic.light['color-text'],
          secondary: semantic.light['color-text-muted'],
        },
        divider: semantic.light['color-border'],
        success: { main: semantic.light['color-success'] },
        warning: { main: semantic.light['color-warning'] },
        error: { main: semantic.light['color-error'] },
        info: { main: semantic.light['color-info'] },
      },
    },
    dark: {
      palette: {
        primary: {
          main: semantic.dark['color-primary'],
          dark: semantic.dark['color-primary-strong'],
          contrastText: semantic.dark['color-primary-contrast'],
        },
        secondary: { main: semantic.dark['color-accent'] },
        background: {
          default: semantic.dark['color-bg'],
          paper: semantic.dark['color-surface'],
        },
        text: {
          primary: semantic.dark['color-text'],
          secondary: semantic.dark['color-text-muted'],
        },
        divider: semantic.dark['color-border'],
        success: { main: semantic.dark['color-success'] },
        warning: { main: semantic.dark['color-warning'] },
        error: { main: semantic.dark['color-error'] },
        info: { main: semantic.dark['color-info'] },
      },
    },
  },
  shape: { borderRadius: 8 },
  typography: { fontFamily: tokens.font.sans },
});

export default theme;
