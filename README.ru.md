# Документация Localzet Cluster

[English](README.md)

Исходники сайта Next.js/MDX: https://cluster.localzet.com. Код библиотеки: [localzet/Cluster](https://github.com/localzet/Cluster).

## Разработка

Проверенное окружение — Node.js 22 и npm. Используйте закоммиченный npm lock-файл:

```sh
npm ci
npm run dev
npm run lint
npm run build
```

Dev-сайт открывается на http://localhost:3000. Результат сборки — `out/`. Postbuild генерирует sitemap и копирует его в статический экспорт. Сборка не публикует сайт.

## Границы документации

Существующие страницы написаны по-русски. Английский основной справочник с русским дублем остаётся отдельной задачей; текущий сайт ещё не является полностью двуязычным.

Cluster зависит от Server ^4.2. Совместимость с веткой Server 7.x не установлена. Общий секрет хранится вне Git; внутренние порты доступны только доверенным узлам.

## Структура

- `src/pages`: MDX-контент и маршруты.
- `src/components`: навигация, поиск и шаблоны страниц.
- `src/mdx`: преобразования MDX и локальный поисковый индекс.
- `public`: статические файлы.
- `scripts/generate-sitemap.js`: генератор sitemap.

CI собирает сайт и выполняет lint при push и pull request. Деплой Pages запускается вручную через workflow dispatch. Аудит зависимостей и успешная статическая сборка — разные проверки.

## Автор и лицензия

Ivan Zorin (`localzet`), <creator@localzet.com>, https://www.localzet.com. Copyright © 2026 Localzet Group для своих изменений. GNU AGPL v3 или новее, см. [LICENSE](LICENSE). Сохраняются исходное авторство и лицензии сторонних компонентов; [.github/AUTHORS.md](.github/AUTHORS.md).
