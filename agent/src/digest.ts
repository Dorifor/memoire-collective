import { processAi } from "@/ai.ts";
import { instructions } from "@/instructions";
import { cleanHtml, scrapUrl } from "@/scraper.ts";

const url = process.argv[2];

console.log("Scraping...");
const content = cleanHtml(await scrapUrl(url));

console.log("Cleaning...");
const cleanContent = await processAi({ system: instructions.clean, user: content });

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
${ cleanContent }`
});

console.log(result);
