import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I lost the bounty, but my success rate at losing bounties is now a flawless 100%. Technically, that is a perfect record.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
