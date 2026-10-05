// SPDX-FileCopyrightText: 2026 Ivan Zorin <creator@localzet.com>
// SPDX-License-Identifier: AGPL-3.0-or-later
// Source: https://github.com/localzet/cluster-docs

import Head from 'next/head'
import {Router, useRouter} from 'next/router'
import {MDXProvider} from '@mdx-js/react'

import {Layout} from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import {useMobileNavigationStore} from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'
import Script from "next/script";

function onRouteChange() {
    useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({Component, pageProps}) {
    let router = useRouter()

    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <meta name="language" content="ru, en"/>
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"/>

                {router.pathname === '/' && (pageProps.title || pageProps.pageTitle) ? (
                    <title>Localzet Cluster - Gateway/Business Worker для PHP | Документация</title>
                ) : (
                    <title>{`${pageProps.pageTitle ?? pageProps.title} - Localzet Cluster | Документация`}</title>
                )}

                <meta name="title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Localzet Cluster | Документация` : 'Localzet Cluster - Gateway/Business Worker для PHP | Документация'}/>
                <meta name="description"
                      content={pageProps.description ?? 'Localzet Cluster — распределённая система Gateway/Business Worker для PHP на Localzet Server 4.x. Документация по архитектуре, установке, разработке приложений с поддержкой WebSocket, HTTP, TCP/UDP протоколов. Master-Worker архитектура, многопроцессорность, долгосрочные соединения.'}/>
                
                {/* Enhanced keywords for better discoverability */}
                <meta name="keywords" 
                      content={pageProps.keywords || 'localzet server, localzet, асинхронный php сервер, php event-driven server, php websocket server, php async server, высокопроизводительный php, php многопроцессорность, php master-worker, php event loop, php socket server, php tcp server, php udp server, php реальное время, php чат сервер, php game server, php iot server, веб-сокеты php, асинхронное программирование php, non-blocking php, php concurrent connections, php performance, php scalability'}/>
                
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                
                {/* Additional SEO meta tags */}
                <meta name="rating" content="general"/>
                <meta name="distribution" content="global"/>
                <meta name="revisit-after" content="7 days"/>
                <meta name="googlebot" content="index,follow"/>
                <meta name="bingbot" content="index,follow"/>

                {/* Open Graph - Fixed property names */}
                <meta property="og:locale" content="ru_RU"/>
                <meta property="og:type" content={router.pathname === '/' ? 'website' : 'article'}/>
                <meta property="og:url" content={`https://cluster.localzet.com${router.asPath}`}/>
                <meta property="og:site_name" content="Localzet Cluster Documentation"/>
                <meta property="og:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Localzet Cluster` : 'Localzet Cluster - Gateway/Business Worker для PHP'}/>
                <meta property="og:description"
                      content={pageProps.description ?? 'Localzet Cluster — распределённая система Gateway/Business Worker для PHP на Localzet Server 4.x. Полная документация по архитектуре, установке, разработке приложений с поддержкой WebSocket, HTTP, TCP/UDP протоколов.'}/>
                <meta property="og:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://cluster.localzet.com/favicon.png')}&bgColor=0f172a&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Localzet Cluster')}&category=${encodeURIComponent('Документация - Localzet Cluster')}`}/>
                <meta property="og:image:type" content="image/png"/>
                <meta property="og:image:width" content="1200"/>
                <meta property="og:image:height" content="630"/>
                <meta property="og:image:alt" content={`${pageProps.pageTitle ?? pageProps.title ?? 'Localzet Cluster'} - Документация`}/>

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@localzet"/>
                <meta name="twitter:site" content="@localzet"/>
                <meta name="twitter:url" content={`https://cluster.localzet.com${router.asPath}`}/>
                <meta name="twitter:title"
                      content={(pageProps.pageTitle ?? pageProps.title) ? `${pageProps.pageTitle ?? pageProps.title} - Localzet Cluster` : 'Localzet Cluster - Gateway/Business Worker для PHP'}/>
                <meta name="twitter:description"
                      content={pageProps.description ?? 'Localzet Cluster — распределённая система Gateway/Business Worker для PHP на Localzet Server 4.x. Полная документация по архитектуре, установке и разработке.'}/>
                <meta name="twitter:image"
                      content={`https://cover.pr-cy.io/api/og?logo=${encodeURIComponent('https://cluster.localzet.com/favicon.png')}&bgColor=0f172a&color=E6E7E8&title=${encodeURIComponent(pageProps.title ?? 'Localzet Cluster')}&category=${encodeURIComponent('Документация - Localzet Cluster')}`}/>
                <meta name="twitter:image:alt" content={`${pageProps.pageTitle ?? pageProps.title ?? 'Localzet Cluster'} - Документация`}/>

                {/* Apple */}
                <meta name="apple-mobile-web-app-capable" content="yes"/>
                <meta name="apple-touch-fullscreen" content="yes"/>
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
                <meta name="apple-mobile-web-app-title" content="Localzet Cluster"/>
                <meta name="format-detection" content="telephone=no"/>

                {/* Author and Copyright */}
                <meta name="copyright" content="Localzet Group"/>
                <meta name="reply-to" content="support@localzet.com"/>
                <meta name="owner" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="author" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="creator" content="Ivan Zorin <creator@localzet.com>"/>
                <meta name="designer" content="Ivan Zorin <creator@localzet.com>"/>

                {/* Application */}
                <meta name="application-name" content="Localzet Cluster"/>
                <meta name="subject"
                      content="Localzet Cluster — распределённая система Gateway/Business Worker для PHP на Localzet Server 4.x с поддержкой WebSocket, HTTP, TCP/UDP протоколов, Master-Worker архитектурой и многопроцессорностью"/>
                <meta name="generator" content="Next.js 15"/>
                <meta name="category" content="Software, Programming, PHP, Server, Async, WebSocket"/>

                {/* Theme */}
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0f172a"/>
                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#E6E7E8"/>

                {/* Icons and Links */}
                <link rel="icon" type="image/png" href="https://cluster.localzet.com/favicon.png"/>
                <link rel="canonical" href={`https://cluster.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="ru" href={`https://cluster.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="en" href={`https://cluster.localzet.com${router.asPath}`}/>
                <link rel="alternate" hrefLang="x-default" href={`https://cluster.localzet.com${router.asPath}`}/>
                
                {/* Preconnect for performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                
                {/* Structured Data JSON-LD for better AI/neural network understanding */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: (() => {
                            const currentUrl = `https://cluster.localzet.com${router.asPath}`;
                            const breadcrumbItems = [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Главная",
                                "item": "https://cluster.localzet.com/"
                            }];
                            if (router.asPath !== '/') {
                                breadcrumbItems.push({
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": pageProps.pageTitle ?? pageProps.title ?? "Страница",
                                    "item": currentUrl
                                });
                            }
                            
                            return JSON.stringify({
                                "@context": "https://schema.org",
                                "@graph": [
                                    {
                                        "@type": "SoftwareApplication",
                                        "@id": "https://cluster.localzet.com/#software",
                                        "name": "Localzet Cluster",
                                        "applicationCategory": "ServerApplication",
                                        "operatingSystem": "Linux, Windows, macOS",
                                        "programmingLanguage": "PHP",
                                        "softwareVersion": "4.5",
                                        "description": "Высокопроизводительный асинхронный event-driven сервер для PHP с поддержкой WebSocket, HTTP, TCP/UDP протоколов, Master-Worker архитектурой и многопроцессорностью",
                                        "url": "https://cluster.localzet.com",
                                        "downloadUrl": "https://packagist.org/packages/localzet/server",
                                        "author": {
                                            "@type": "Person",
                                            "name": "Ivan Zorin",
                                            "email": "creator@localzet.com"
                                        },
                                        "offers": {
                                            "@type": "Offer",
                                            "price": "0",
                                            "priceCurrency": "USD"
                                        },
                                        "keywords": "localzet server, асинхронный php сервер, php event-driven server, php websocket server, php async server, высокопроизводительный php, php многопроцессорность, php master-worker, php event loop, php socket server",
                                        "featureList": [
                                            "Асинхронная event-driven архитектура",
                                            "Многопроцессорная обработка (Master-Worker)",
                                            "Поддержка WebSocket, HTTP, TCP, UDP протоколов",
                                            "Долгосрочные соединения",
                                            "Высокая производительность и масштабируемость",
                                            "Неблокирующий I/O",
                                            "Поддержка SSL/TLS",
                                            "Плавный перезапуск без простоя",
                                            "Поддержка пользовательских протоколов"
                                        ]
                                    },
                                    {
                                        "@type": "WebSite",
                                        "@id": "https://cluster.localzet.com/#website",
                                        "url": "https://cluster.localzet.com",
                                        "name": "Localzet Cluster Documentation",
                                        "description": "Полная документация по Localzet Cluster - высокопроизводительному асинхронному PHP серверу",
                                        "publisher": {
                                            "@id": "https://cluster.localzet.com/#organization"
                                        },
                                        "inLanguage": ["ru", "en"],
                                        "potentialAction": {
                                            "@type": "SearchAction",
                                            "target": {
                                                "@type": "EntryPoint",
                                                "urlTemplate": "https://cluster.localzet.com?q={search_term_string}"
                                            },
                                            "query-input": "required name=search_term_string"
                                        }
                                    },
                                    {
                                        "@type": "Organization",
                                        "@id": "https://cluster.localzet.com/#organization",
                                        "name": "Localzet Group",
                                        "url": "https://www.localzet.com",
                                        "logo": "https://cluster.localzet.com/favicon.png"
                                    },
                                    {
                                        "@type": "TechArticle",
                                        "@id": `${currentUrl}#article`,
                                        "headline": pageProps.pageTitle ?? pageProps.title ?? "Localzet Cluster Documentation",
                                        "description": pageProps.description ?? "Документация по Localzet Cluster",
                                        "author": {
                                            "@id": "https://cluster.localzet.com/#organization"
                                        },
                                        "publisher": {
                                            "@id": "https://cluster.localzet.com/#organization"
                                        },
                                        "inLanguage": "ru",
                                        "isAccessibleForFree": true,
                                        "keywords": pageProps.keywords || "localzet server, php, async, websocket, event-driven",
                                        "about": {
                                            "@type": "Thing",
                                            "name": "Localzet Cluster",
                                            "description": "Асинхронный event-driven сервер для PHP"
                                        }
                                    },
                                    {
                                        "@type": "BreadcrumbList",
                                        "@id": `${currentUrl}#breadcrumb`,
                                        "itemListElement": breadcrumbItems
                                    }
                                ]
                            });
                        })()
                    }}
                />
            </Head>

            <Script defer src="https://analytics.localzet.com/pixel/Q8HsjjbsqIOlwJNH"
                    data-ignore-dnt="true"/>

            <MDXProvider components={mdxComponents}>
                <Layout {...pageProps}>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </>
    )
}
