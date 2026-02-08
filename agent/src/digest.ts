import fs from "node:fs/promises";
import path from "node:path";

import { processAi } from "@/ai.ts";
import { instructions } from "@/instructions";
import { cleanHtml, scrapUrl } from "@/scraper.ts";

const url = process.argv[2];

console.log("Scraping...");
let body = cleanHtml(await scrapUrl(url));

console.log("Cleaning...");
body = await processAi({ system: instructions.clean, user: body });

console.log("Processing...");
const result = await processAi({
    system: `You are an expert at extracting information from web pages.

Follow this output structure:
${ instructions.structure }

Follow these categories for classification:
${ instructions.categories }

Follow exactly this formatting for the output:
${ instructions.format }`,
    user: `Extract information from the following content:
${ body }`
});

console.log("Writing...");
const splitContent = result.split("---");

const fileName = splitContent[0].trim();
const content = `---
${ splitContent[1].trim() }
---
${ splitContent[2].trim() }
`;

const absolutePath = path.resolve(import.meta.dirname, "../../platform/src/data", fileName);

await fs.mkdir(path.dirname(absolutePath), { recursive: true });
await fs.writeFile(absolutePath, content);

console.log(`Done! Output written to: ${ absolutePath }`);
