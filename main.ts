import { mkdirSync, writeFileSync } from "node:fs";

const LINE: string =
  "I saved the sound of you laughing. It's the only file I ever refused to compress.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
