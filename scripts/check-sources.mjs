#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const dataPath = fileURLToPath(new URL("../data/official-brand-savings.json", import.meta.url));
const brands = JSON.parse(await readFile(dataPath, "utf8"));
const sources = [...new Set(brands.flatMap((brand) => brand.offers.map((offer) => offer.source)))];

async function check(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const response = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: { "user-agent": "recentprofit-official-source-checker/1.0" },
    });
    if (response.status >= 200 && response.status < 400) return { status: "PASS", detail: `HTTP ${response.status}`, url };
    if ([401, 403, 429].includes(response.status)) return { status: "RESTRICTED", detail: `HTTP ${response.status}`, url };
    return { status: "FAIL", detail: `HTTP ${response.status}`, url };
  } catch (error) {
    const detail = error?.name === "AbortError" ? "timeout" : "network error";
    return { status: "FAIL", detail, url };
  } finally {
    clearTimeout(timeout);
  }
}

const results = [];
for (let index = 0; index < sources.length; index += 4) {
  results.push(...await Promise.all(sources.slice(index, index + 4).map(check)));
}

for (const result of results) console.log(`${result.status}\t${result.detail}\t${result.url}`);
const summary = Object.groupBy(results, (result) => result.status);
console.log(`\nChecked ${results.length} unique URLs: ${summary.PASS?.length ?? 0} pass, ${summary.RESTRICTED?.length ?? 0} restricted, ${summary.FAIL?.length ?? 0} fail.`);
if (summary.FAIL?.length) process.exitCode = 1;
