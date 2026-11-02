// Turn a photo into a crisp black-and-white halftone SVG (real screentone dots).
//
//   npm run halftone -- public/art/me.jpg            -> public/art/me.halftone.svg
//   npm run halftone -- public/art/me.jpg out.svg 6  -> 6px dot grid (default 8)
//
// Smaller cells = finer tone. Try a contrasty photo with a plain background.
import sharp from "sharp";

const [input, outArg, cellArg] = process.argv.slice(2);
if (!input) {
  console.error("Usage: npm run halftone -- <image> [output.svg] [cell size in px]");
  process.exit(1);
}
const output = outArg ?? input.replace(/\.\w+$/, ".halftone.svg");
const cell = Number(cellArg ?? 8);

const base = sharp(input).rotate().flatten({ background: "#ffffff" });
const { width, height } = await base.metadata();
const cols = Math.max(1, Math.round(width / cell));
const rows = Math.max(1, Math.round(height / cell));

// Averaging the image down to one pixel per cell gives each dot its tone.
const { data, info } = await base
  .clone()
  .grayscale()
  .normalise()
  .resize(cols, rows, { fit: "fill" })
  .raw()
  .toBuffer({ resolveWithObject: true });

let dots = "";
for (let y = 0; y < rows; y++) {
  // Offset every other row by half a cell for a classic screentone pattern.
  const shift = (y % 2) * (cell / 2);
  for (let x = 0; x < cols; x++) {
    const darkness = 1 - data[(y * cols + x) * info.channels] / 255;
    if (darkness < 0.06) continue;
    const r = (cell / 2) * Math.sqrt(darkness) * 1.18;
    dots += `<circle cx="${((x + 0.5) * cell + shift).toFixed(1)}" cy="${((y + 0.5) * cell).toFixed(1)}" r="${r.toFixed(2)}"/>`;
  }
}

const w = cols * cell;
const h = rows * cell;
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#fff"/><g fill="#000">${dots}</g></svg>`;

await sharp(Buffer.from(svg)).metadata(); // sanity check: fails loudly if the SVG is malformed
const { writeFile } = await import("node:fs/promises");
await writeFile(output, svg);
console.log(`Halftone written to ${output} (${cols}×${rows} dots)`);
