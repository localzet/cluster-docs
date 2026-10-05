# Localzet Cluster documentation

[Русская версия](README.ru.md)

Next.js/MDX source for https://cluster.localzet.com. The library source is [localzet/Cluster](https://github.com/localzet/Cluster).

## Development

Node.js 22 and npm are the verified toolchain. Use the committed npm lockfile:

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Open http://localhost:3000 during development. Build output is `out/`; the postbuild command generates the sitemap and copies it into the static export. `npm run build` does not publish the site.

## Scope

The existing site pages are in Russian. An English primary handbook with a Russian duplicate remains a separate documentation task. Do not claim that the current site is fully bilingual.

Cluster currently depends on Server ^4.2. Compatibility with the Server 7.x development branch is not established. Shared secrets must be provisioned outside Git; internal ports belong on a trusted network.

## Source layout

- `src/pages`: MDX content and routes.
- `src/components`: navigation, search and layouts.
- `src/mdx`: MDX transforms and local search index generation.
- `public`: static assets.
- `scripts/generate-sitemap.js`: sitemap generation.

CI builds and lints the site on pushes and pull requests. Pages deployment is manual through workflow dispatch. Dependency audit findings and a successful static build are separate checks.

## Author and license

Ivan Zorin (`localzet`), <creator@localzet.com>, https://www.localzet.com. Copyright © 2026 Localzet Group for its contributions. GNU AGPL v3 or later, see [LICENSE](LICENSE). Original attribution and third-party licenses remain applicable; [.github/AUTHORS.md](.github/AUTHORS.md).
