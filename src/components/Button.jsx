import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            />
        </svg>
    )
}

const variantStyles = {
    primary:
        'rounded-full bg-slate-900 py-1 px-3 text-white hover:bg-slate-700 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-1 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300',
    secondary:
        'rounded-full bg-slate-100 py-1 px-3 text-slate-900 hover:bg-slate-200 dark:bg-slate-800/40 dark:text-slate-400 dark:ring-1 dark:ring-inset dark:ring-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-300',
    filled:
        'rounded-full bg-slate-900 py-1 px-3 text-white hover:bg-slate-700 dark:bg-sky-500 dark:text-white dark:hover:bg-sky-400',
    outline:
        'rounded-full py-1 px-3 text-slate-700 ring-1 ring-inset ring-slate-900/10 hover:bg-slate-900/2.5 hover:text-slate-900 dark:text-slate-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
    text: 'text-sky-500 hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-500',
}

export function Button({
                           variant = 'primary',
                           className,
                           children,
                           arrow,
                           ...props
                       }) {
    let Component = props.href ? Link : 'button'

    className = clsx(
        'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
        variantStyles[variant],
        className
    )

    let arrowIcon = (
        <ArrowIcon
            className={clsx(
                'mt-0.5 h-5 w-5',
                variant === 'text' && 'relative top-px',
                arrow === 'left' && '-ml-1 rotate-180',
                arrow === 'right' && '-mr-1'
            )}
        />
    )

    return (
        <p>
            <Component className={className} {...props}>
                {arrow === 'left' && arrowIcon}
                {children}
                {arrow === 'right' && arrowIcon}
            </Component>
        </p>
    )
}
