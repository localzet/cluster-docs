// zinc => slate
// emerald => sky
module.exports = ({theme}) => ({
    DEFAULT: {
        css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.sky.500'),
            '--tw-prose-links-hover': theme('colors.sky.600'),
            '--tw-prose-links-underline': theme('colors.sky.500 / 0.3'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-counters': theme('colors.slate.500'),
            '--tw-prose-bullets': theme('colors.slate.300'),
            '--tw-prose-hr': theme('colors.slate.900 / 0.05'),
            '--tw-prose-quotes': theme('colors.slate.900'),
            '--tw-prose-quote-borders': theme('colors.slate.200'),
            '--tw-prose-captions': theme('colors.slate.500'),
            '--tw-prose-code': theme('colors.slate.900'),
            '--tw-prose-code-bg': theme('colors.slate.100'),
            '--tw-prose-code-ring': theme('colors.slate.300'),
            '--tw-prose-th-borders': theme('colors.slate.300'),
            '--tw-prose-td-borders': theme('colors.slate.200'),

            '--tw-prose-invert-body': theme('colors.slate.400'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.sky.400'),
            '--tw-prose-invert-links-hover': theme('colors.sky.500'),
            '--tw-prose-invert-links-underline': theme('colors.sky.500 / 0.3'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.slate.400'),
            '--tw-prose-invert-bullets': theme('colors.slate.600'),
            '--tw-prose-invert-hr': theme('colors.white / 0.05'),
            '--tw-prose-invert-quotes': theme('colors.slate.100'),
            '--tw-prose-invert-quote-borders': theme('colors.slate.700'),
            '--tw-prose-invert-captions': theme('colors.slate.400'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-code-bg': theme('colors.slate.700 / 0.15'),
            '--tw-prose-invert-code-ring': theme('colors.white / 0.1'),
            '--tw-prose-invert-th-borders': theme('colors.slate.600'),
            '--tw-prose-invert-td-borders': theme('colors.slate.700'),

            // Base
            color: 'var(--tw-prose-body)',
            fontSize: theme('fontSize.base')[0],
            ...theme('fontSize.base')[1],
            lineHeight: theme('lineHeight.7'),

            // Layout
            '> *': {
                maxWidth: theme('maxWidth.2xl'),
                marginLeft: 'auto',
                marginRight: 'auto',
                '@screen lg': {
                    maxWidth: theme('maxWidth.3xl'),
                    marginLeft: `calc(50% - min(50%, ${theme('maxWidth.lg')}))`,
                    marginRight: `calc(50% - min(50%, ${theme('maxWidth.lg')}))`,
                },
            },

            // Text
            p: {
                marginTop: theme('spacing.6'),
                marginBottom: theme('spacing.6'),
            },

            // Lists
            ol: {
                listStyleType: 'decimal',
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
                paddingLeft: '1.625rem',
            },
            ul: {
                listStyleType: 'disc',
                marginTop: theme('spacing.5'),
                marginBottom: theme('spacing.5'),
                paddingLeft: '1.625rem',
            },
            li: {
                marginTop: theme('spacing.2'),
                marginBottom: theme('spacing.2'),
            },
            ':is(ol, ul) > li': {
                paddingLeft: theme('spacing[1.5]'),
            },

            // Horizontal rules
            hr: {
                borderColor: 'var(--tw-prose-hr)',
                borderTopWidth: 1,
                marginTop: theme('spacing.16'),
                marginBottom: theme('spacing.16'),
            },

            // Headings
            h1: {
                color: 'var(--tw-prose-headings)',
                fontWeight: '700',
                fontSize: theme('fontSize.2xl')[0],
                ...theme('fontSize.2xl')[1],
                marginBottom: theme('spacing.2'),
            },
            h2: {
                color: 'var(--tw-prose-headings)',
                fontWeight: '600',
                fontSize: theme('fontSize.lg')[0],
                ...theme('fontSize.lg')[1],
                marginTop: theme('spacing.16'),
                marginBottom: theme('spacing.2'),
            },
            h3: {
                color: 'var(--tw-prose-headings)',
                fontSize: theme('fontSize.base')[0],
                ...theme('fontSize.base')[1],
                fontWeight: '600',
                marginTop: theme('spacing.10'),
                marginBottom: theme('spacing.2'),
            },

            // Inline elements
            a: {
                color: 'var(--tw-prose-links)',
                textDecoration: 'underline transparent',
                fontWeight: '500',
                transitionProperty: 'color, text-decoration-color',
                transitionDuration: theme('transitionDuration.DEFAULT'),
                transitionTimingFunction: theme('transitionTimingFunction.DEFAULT'),
                '&:hover': {
                    color: 'var(--tw-prose-links-hover)',
                    textDecorationColor: 'var(--tw-prose-links-underline)',
                },
            },
            strong: {
                color: 'var(--tw-prose-bold)',
                fontWeight: '600',
            },
            code: {
                color: 'var(--tw-prose-code)',
                borderRadius: theme('borderRadius.lg'),
                paddingTop: theme('padding.1'),
                paddingRight: theme('padding[1.5]'),
                paddingBottom: theme('padding.1'),
                paddingLeft: theme('padding[1.5]'),
                boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
                backgroundColor: 'var(--tw-prose-code-bg)',
                fontSize: theme('fontSize.2xs'),
            },
        },
    },
    invert: {
        css: {
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-links-hover': 'var(--tw-prose-invert-links-hover)',
            '--tw-prose-links-underline': 'var(--tw-prose-invert-links-underline)',
            '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders': 'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
            '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
            '--tw-prose-th-borders': 'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders': 'var(--tw-prose-invert-td-borders)',
        },
    },
})
