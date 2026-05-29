import { describe, it, expect } from 'vitest';
import { buildTokensCss, semantic, tokens } from './index';

describe('design tokens → CSS', () => {
  const css = buildTokensCss();

  it('emits a :root block carrying the primary color', () => {
    expect(css).toContain(':root');
    expect(css).toContain(`--jl-color-primary: ${semantic.light['color-primary']}`);
  });

  it('includes the brand gradient', () => {
    expect(css).toContain(`--jl-gradient-brand: ${tokens.gradient.brand}`);
  });

  it('emits a dark color-scheme block', () => {
    expect(css).toContain("[data-theme='dark']");
    expect(css).toContain(`--jl-color-bg: ${semantic.dark['color-bg']}`);
  });

  it('flattens nested primitives into prefixed variables', () => {
    expect(css).toContain(`--jl-color-brand-500: ${tokens.color.brand[500]}`);
    expect(css).toContain(`--jl-space-4: ${tokens.space[4]}`);
  });
});
