import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A Wi-Fi network name that tells a whole story in 25 characters:
// she left, and she took the router and the dog.
const ENTRY = "SheTookTheRouterAndTheDog";

// The gate: 1 to 32 characters, not only white space.
if (ENTRY.length < 1 || ENTRY.length > 32 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-32 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
