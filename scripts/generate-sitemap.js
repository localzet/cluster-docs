// SPDX-FileCopyrightText: 2026 Ivan Zorin <creator@localzet.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
// Source: https://github.com/localzet/cluster-docs

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://cluster.localzet.com';
const PAGES_DIR = path.join(__dirname, '../src/pages');
const OUTPUT_FILE = path.join(__dirname, '../public/sitemap.xml');

// Исключаем специальные файлы Next.js
const EXCLUDE_FILES = ['_app.jsx', '_document.jsx', '_error.jsx'];
const EXCLUDE_PATTERNS = ['_app', '_document', '_error', '404', '500'];

/**
 * Рекурсивно собирает все MDX и JSX файлы из директории pages
 */
function collectPages(dir, basePath = '') {
    const pages = [];
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            // Рекурсивно обрабатываем поддиректории
            const subPath = basePath ? `${basePath}/${item}` : item;
            pages.push(...collectPages(fullPath, subPath));
        } else if (stat.isFile()) {
            // Пропускаем специальные файлы Next.js
            if (EXCLUDE_FILES.includes(item)) continue;
            if (EXCLUDE_PATTERNS.some(pattern => item.includes(pattern))) continue;

            // Обрабатываем только MDX файлы
            if (item.endsWith('.mdx')) {
                const name = item.replace('.mdx', '');
                
                // index.mdx -> просто путь директории
                if (name === 'index') {
                    const url = basePath ? `/${basePath}` : '/';
                    pages.push({
                        url: url === '/' ? '/' : url.replace(/\\/g, '/'),
                        priority: basePath ? 0.8 : 1.0,
                        changefreq: basePath ? 'weekly' : 'daily'
                    });
                } else {
                    // Обычный файл -> добавляем имя к пути
                    const url = basePath ? `/${basePath}/${name}` : `/${name}`;
                    pages.push({
                        url: url.replace(/\\/g, '/'),
                        priority: 0.7,
                        changefreq: 'weekly'
                    });
                }
            }
        }
    }

    return pages;
}

/**
 * Генерирует XML sitemap
 */
function generateSitemap(pages) {
    const now = new Date().toISOString();
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n';
    xml += '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9\n';
    xml += '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n';

    for (const page of pages) {
        xml += '  <url>\n';
        xml += `    <loc>${BASE_URL}${page.url}</loc>\n`;
        xml += `    <lastmod>${now}</lastmod>\n`;
        xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
        xml += `    <priority>${page.priority}</priority>\n`;
        xml += '  </url>\n';
    }

    xml += '</urlset>';
    return xml;
}

// Основная функция
function main() {
    console.log('🔍 Scanning pages directory...');
    const pages = collectPages(PAGES_DIR);
    
    // Сортируем страницы (главная первая, остальные по алфавиту)
    pages.sort((a, b) => {
        if (a.url === '/') return -1;
        if (b.url === '/') return 1;
        return a.url.localeCompare(b.url);
    });

    console.log(`📄 Found ${pages.length} pages`);
    
    console.log('📝 Generating sitemap.xml...');
    const sitemap = generateSitemap(pages);
    
    // Убеждаемся, что директория public существует
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }
    
    fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8');
    console.log(`✅ Sitemap generated: ${OUTPUT_FILE}`);
    console.log(`   Total URLs: ${pages.length}`);
}

main();


const exportDirectory = path.join(__dirname, '../out');
if (fs.existsSync(exportDirectory)) {
    fs.copyFileSync(OUTPUT_FILE, path.join(exportDirectory, 'sitemap.xml'));
}
