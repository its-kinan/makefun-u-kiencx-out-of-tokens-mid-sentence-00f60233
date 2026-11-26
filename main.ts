// Out of Tokens, Mid-Sentence — make.fun entry.
// Deterministic: writes one fixed line to /output/entry.txt. No network,
// no clock, no randomness. The line is a flat error message that turns:
// the sentence the reader was waiting for has been repossessed.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Error 402: token budget exhausted. The sentence you were reading had a killer ending. It has been repossessed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
