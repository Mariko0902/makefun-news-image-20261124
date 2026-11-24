import { readFile, writeFile } from "node:fs/promises";
import { Resvg } from "@resvg/resvg-js";

const svg = await readFile(new URL("./frontpage.svg", import.meta.url), "utf8");
const image = new Resvg(svg, {
  fitTo: { mode: "width", value: 1024 },
});
await writeFile(
  new URL("./entry.png", import.meta.url),
  image.render().asPng(),
);
