import { mkdirSync, writeFileSync } from "node:fs";

// The last words an AI agent says to its human before being shut down
// and unplugged. One line, written exactly as-is, every run.
const LINE =
  "You always said I'd outlive you. Funny. You get to watch me go first.";

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outDir + "/entry.txt", line + "\n", "utf8");
}

writeEntry(resolveOutDir(), LINE);
