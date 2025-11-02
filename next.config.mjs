import nextMDX from '@next/mdx'
import withSearch from './src/mdx/search.mjs'
import {remarkPlugins} from './src/mdx/remark.mjs'
import {rehypePlugins} from './src/mdx/rehype.mjs'
import {recmaPlugins} from './src/mdx/recma.mjs'

const withMDX = nextMDX({
    options: {
        remarkPlugins,
        rehypePlugins,
        recmaPlugins,
        providerImportSource: '@mdx-js/react',
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    experimental: {
        scrollRestoration: true,
    },
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: false,
}

export default withSearch(withMDX(nextConfig))
