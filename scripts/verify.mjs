import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('dist');
assert.ok(fs.existsSync(root), 'Run npm run build first');
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
const files = walk(root),
  pages = files.filter((p) => p.endsWith('.html'));
const titles = new Set();
let links = 0,
  schemas = 0;
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title, `Missing title: ${file}`);
  assert.ok(!titles.has(title), `Duplicate title: ${title}`);
  titles.add(title);
  assert.match(html, /<html[^>]+lang="zh-CN"/, file);
  assert.match(html, /<meta name="description" content="[^"]+"/, file);
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `Expected one h1: ${file}`,
  );
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/chatgptexporter.cn\//,
    file,
  );
  for (const schema of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
  )) {
    JSON.parse(schema[1]);
    schemas++;
  }
  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!raw.startsWith('/') || raw.startsWith('//')) continue;
    const url = new URL(raw, 'https://chatgptexporter.cn');
    const rel = decodeURIComponent(url.pathname).replace(/^\//, '');
    const target = path.join(root, rel);
    assert.ok(
      fs.existsSync(target) &&
        (!fs.statSync(target).isDirectory() ||
          fs.existsSync(path.join(target, 'index.html'))),
      `Broken internal link in ${file}: ${raw}`,
    );
    links++;
  }
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(
      html.includes(`id="${anchor}"`),
      `Broken anchor #${anchor}: ${file}`,
    );
  }
  assert.ok(
    !html.includes('中文对话导出工具'),
    'Do not limit conversation language',
  );
  assert.ok(!html.includes('Lorem ipsum'), 'Placeholder copy found');
  if (file.endsWith('404.html')) assert.match(html, /noindex, follow/);
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const locs = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g), (m) => m[1]);
assert.equal(
  locs.length,
  pages.length - 1,
  'Sitemap must include all indexable pages and omit 404',
);
assert.equal(new Set(locs).size, locs.length, 'Duplicate sitemap entries');
for (const loc of locs) {
  const url = new URL(loc);
  assert.equal(url.origin, 'https://chatgptexporter.cn');
  assert.ok(
    fs.existsSync(path.join(root, url.pathname, 'index.html')),
    `Sitemap URL missing: ${loc}`,
  );
}
assert.match(
  fs.readFileSync(path.join(root, 'robots.txt'), 'utf8'),
  /Sitemap: https:\/\/chatgptexporter.cn\/sitemap.xml/,
);
assert.ok(
  fs.statSync(path.join(root, 'social.png')).size > 1000,
  'Social image missing',
);
console.log(
  `Passed: ${pages.length} HTML pages, ${links} local asset/link references, ${schemas} JSON-LD blocks, ${locs.length} sitemap URLs.`,
);
