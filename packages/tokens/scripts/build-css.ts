/**
 * Generates `tokens.css` from `src/index.ts`.
 * Run via `bun run build` inside packages/tokens (wired into Turbo's build task).
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildTokensCss } from '../src/index.ts';

const here = dirname(fileURLToPath(import.meta.url));
const outPath = join(here, '..', 'tokens.css');

writeFileSync(outPath, buildTokensCss(), 'utf8');
console.log(`[@julia/tokens] wrote ${outPath}`);
