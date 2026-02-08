import * as cheerio from "cheerio";
import { chromium } from "playwright";

export async function scrapUrl(url: string) {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    await browser.close();
    return content;
}

export function cleanHtml(html: string) {
    const $ = cheerio.load(html);

    $("script, noscript, meta, style").remove();
    $('nav, [role="navigation"], [role="alertdialog"], [role="dialog"]').remove();

    $("h1").each((_, el) => {
        $(el).prepend("# ");
    });
    $("h2").each((_, el) => {
        $(el).prepend("## ");
    });
    $("h3").each((_, el) => {
        $(el).prepend("### ");
    });
    $("h4").each((_, el) => {
        $(el).prepend("#### ");
    });
    $("h5").each((_, el) => {
        $(el).prepend("##### ");
    });
    $("h6").each((_, el) => {
        $(el).prepend("###### ");
    });

    $("li").each((_, el) => {
        $(el).prepend("- ");
    });

    $("strong, b").each((_, el) => {
        $(el).replaceWith(`**${ $(el).text() }**`);
    });
    $("em, i").each((_, el) => {
        $(el).replaceWith(`*${ $(el).text() }*`);
    });

    $("a").each((_, el) => {
        const href = $(el).attr("href");
        const text = $(el).text().trim();
        if (href && text) {
            $(el).replaceWith(`[${ text }](${ href })`);
        }
    });

    $("p, h1, h2, h3, h4, h5, h6, div, li").after("\n").before("\n");

    return $("body").text()
        .replace(/[ \t]+/g, " ")
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0)
        .join("\n")
        .replace(/\n{2,}/g, "\n")
        .trim();
}
