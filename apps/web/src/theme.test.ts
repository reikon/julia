import { describe, it, expect } from 'vitest';
import { tokens } from '@julia/tokens';
import theme from './theme';

describe('MUI theme ← design tokens', () => {
  it('uses the shared sans font token', () => {
    expect(theme.typography.fontFamily).toBe(tokens.font.sans);
  });

  it('applies the shared base border radius', () => {
    expect(theme.shape.borderRadius).toBe(8);
  });
});
