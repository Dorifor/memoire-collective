import fs from "node:fs/promises";
import path from "node:path";

import { processAi } from "@/ai.ts";
import { instructions } from "@/instructions";
import { getCleanHtml } from "@/scraper.ts";

const url = process.argv[2];

let body = "";

if (/https?:\/\//.test(url)) {
    body = await getCleanHtml(url);
}
else {
    body = await fs.readFile(path.resolve(import.meta.dirname, "../", url), "utf-8");
}

console.log("Processing...");
let result = await processAi({
    system: `You are an expert at extracting information from web pages.

Follow this output structure:
${ instructions.structure }

Follow these categories for classification:
${ instructions.categories }

Follow exactly this exact formatting for the output:
${ instructions.format }`,
    user: `Extract information from the following content (url: ${ url }):
${ body }`
});

console.log("Writing...");

try {
    if (result.includes("```")) {
        result = result.split("```")[1].trim();
    }

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
}
catch (error) {
    console.log("Error while writing file.");
    console.log("---");
    console.log(rawBody);
    console.log("---");
    console.log(result);
    console.error(error);
}
