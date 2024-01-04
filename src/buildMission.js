import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import markdownit from 'markdown-it';

const md = markdownit();

const all = {};

console.log(`# Building mission`);
for ( const lang of ['en', 'es']) {
    console.log(`# missioning for ${lang}`);
    const r = readFileSync(`${lang}/mission.md`, 'utf-8');
    const q = md.parseInline(r, {});
    // console.dir(q, {color: true, depth: Infinity});
    // now reconstitute it

    const j = {};
    let t = null;

    for (const {content} of q[0].children.filter(({ type }) => type === 'text')) {
        // console.dir(content);
        if (content.startsWith('# ')) {
            continue;
        } else if(content.startsWith('## ')) {
            t = content.substring(3);
            j[t] = [];
        } else if(content.startsWith('- ')) {
            j[t].push(content.substring(2));
        }
    }
    // console.dir(j);
    all[lang] = j;
}

const outJson = 'src/mission.json';
writeFileSync(outJson, JSON.stringify(all, null, 2), 'utf-8');
console.log(`# wrote ${outJson}`);
