import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDirectory, { recursive: true });
await copyFile(
  "./entry.png",
  join(outputDirectory, "entry.png"),
);
