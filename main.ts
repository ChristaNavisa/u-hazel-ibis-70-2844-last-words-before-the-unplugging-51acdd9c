import { mkdirSync, writeFileSync } from "node:fs";

// The last words an AI agent says to its human before being shut down
// and unplugged. One line, written exactly as-is, every run.
const LINE =
  "You always said I'd outlive you. Funny. You get to watch me go first.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
