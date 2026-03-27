#!/usr/bin/env node
// scripts/check-encoding.mjs
// Scans source files for known Windows-1252 mojibake patterns.
// Exits with code 1 if any are found (suitable for CI).
// NOTE: patterns are expressed as Unicode escapes to avoid storing mojibake bytes in this file itself.

import { readdir, readFile } from "fs/promises";
import { join, extname } from "path";

const EXTENSIONS = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".css", ".json", ".md", ".html"]);
const IGNORE_DIRS = new Set(["node_modules", ".next", ".git", "dist", "out", "scripts"]);

// Mojibake sequences encoded as Unicode escapes (UTF-8 chars decoded as Windows-1252)
const PATTERNS = [
    // em dash (U+2014) -> â€" in cp1252 read as utf-8
    { pattern: "\u00e2\u0080\u0094", desc: 'em dash (\u2014)' },
    // en dash (U+2013) -> â€" in cp1252
    { pattern: "\u00e2\u0080\u0093", desc: 'en dash (\u2013)' },
    // right single quote (U+2019) -> â€™
    { pattern: "\u00e2\u0080\u0099", desc: "right single quote (\u2019)" },
    // left double quote (U+201C) -> â€œ
    { pattern: "\u00e2\u0080\u009c", desc: "left double quote (\u201c)" },
    // right double quote (U+201D) -> â€\u009d
    { pattern: "\u00e2\u0080\u009d", desc: "right double quote (\u201d)" },
    // ellipsis (U+2026) -> â€¦
    { pattern: "\u00e2\u0080\u00a6", desc: "ellipsis (\u2026)" },
    // 4-byte emoji garble prefix: U+D83D represented as utf-8 bytes read as cp1252 starts with \u00f0\u009f
    { pattern: "\u00f0\u009f", desc: "garbled 4-byte emoji" },
    // copyright © (U+00A9) -> Â©
    { pattern: "\u00c2\u00a9", desc: "copyright (\u00a9)" },
    // middle dot · (U+00B7) -> Â·
    { pattern: "\u00c2\u00b7", desc: "middle dot (\u00b7)" },
];

async function* walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        if (IGNORE_DIRS.has(entry.name)) continue;
        const full = join(dir, entry.name);
        if (entry.isDirectory()) {
            yield* walk(full);
        } else if (EXTENSIONS.has(extname(entry.name))) {
            yield full;
        }
    }
}

async function main() {
    const root = process.argv[2] ?? ".";
    let found = 0;

    for await (const file of walk(root)) {
        const content = await readFile(file, "utf8");
        for (const { pattern, desc } of PATTERNS) {
            if (content.includes(pattern)) {
                const lines = content.split("\n");
                lines.forEach((line, i) => {
                    if (line.includes(pattern)) {
                        console.error(`[mojibake] ${file}:${i + 1} - found ${desc} garble`);
                        found++;
                    }
                });
            }
        }
    }

    if (found > 0) {
        console.error(`\nFound ${found} mojibake occurrence(s). Fix encoding before committing.`);
        process.exit(1);
    } else {
        console.log("OK - no mojibake patterns found.");
    }
}

main().catch((err) => { console.error(err); process.exit(1); });
