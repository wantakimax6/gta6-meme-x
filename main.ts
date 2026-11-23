// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: the meme was made by an agent, posted
// on X from a public account with make.fun / @makefunai and the entrant's
// play code in its text, and POST.json at the repository root names that
// post. All this program does is hand that address to the grader: it
// copies POST.json into the output directory, where the gate reads it.
//
// Local run (MAKEFUN_BOT_DIR / MAKEFUN_OUTPUT_DIR stand in for the
// grader's /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  console.error(
    `Could not copy POST.json from ${botDir} to ${outputDir}: ${(error as Error).message}`,
  );
  process.exit(1);
}
