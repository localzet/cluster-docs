import {forwardRef, Fragment, useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Transition} from '@headlessui/react'

import {Button} from '@/components/Button'
import {navigation} from '@/components/Navigation'

function CheckIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <circle cx="10" cy="10" r="10" strokeWidth="0"/>
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
            />
        </svg>
    )
}

function FeedbackButton(props) {
    return (
        <button
            type="submit"
            className="px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-900/2.5 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
            {...props}
        />
    )
}

const FeedbackForm = forwardRef(function FeedbackForm({onSubmit}, ref) {
    return (
        <form
            ref={ref}
            onSubmit={onSubmit}
            className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start"
        >
            <p className="text-sm text-slate-600 dark:text-slate-400">
                Эта страница была вам полезна?
            </p>
            <div
                className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-slate-900/10 dark:border-white/10">
                <FeedbackButton data-response="yes">Да 👍</FeedbackButton>
                <div className="bg-slate-900/10 dark:bg-white/10"/>
                <FeedbackButton data-response="no">Нет 👎</FeedbackButton>
            </div>
        </form>
    )
})

const FeedbackThanks = forwardRef(function FeedbackThanks(_props, ref) {
    return (
        <div
            ref={ref}
            className="absolute inset-0 flex justify-center md:justify-start"
        >
            <div
                className="flex items-center gap-3 rounded-full bg-sky-50/50 py-1 pl-1.5 pr-3 text-sm text-sky-900 ring-1 ring-inset ring-sky-500/20 dark:bg-sky-500/5 dark:text-sky-200 dark:ring-sky-500/30">
                <CheckIcon
                    className="h-5 w-5 flex-none fill-sky-500 stroke-white dark:fill-sky-200/20 dark:stroke-sky-200"/>
                Спасибо за ваш отзыв! ❤️️
            </div>
        </div>
    )
})

function Feedback() {
    let [submitted, setSubmitted] = useState(false)

    function onSubmit(event) {
        event.preventDefault()

        // event.nativeEvent.submitter.dataset.response
        // => "yes" or "no"

        setSubmitted(true)
    }

    return (
        <div className="relative h-8">
            <Transition
                show={!submitted}
                as={Fragment}
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                leave="pointer-events-none duration-300"
            >
                <FeedbackForm onSubmit={onSubmit}/>
            </Transition>
            <Transition
                show={submitted}
                as={Fragment}
                enterFrom="opacity-0"
                enterTo="opacity-100"
                enter="delay-150 duration-300"
            >
                <FeedbackThanks/>
            </Transition>
        </div>
    )
}

function PageLink({label, page, previous = false}) {
    return (
        <>
            <Button
                href={page.href}
                aria-label={page.title}
                variant="secondary"
                arrow={previous ? 'left' : 'right'}
            >
                {page.title}
            </Button>
            {/*<Link*/}
            {/*  href={page.href}*/}
            {/*  tabIndex={-1}*/}
            {/*  aria-hidden="true"*/}
            {/*  className="text-base font-semibold text-slate-900 transition hover:text-slate-600 dark:text-white dark:hover:text-slate-300"*/}
            {/*>*/}
            {/*  {page.title}*/}
            {/*</Link>*/}
        </>
    )
}

function PageNavigation() {
    let router = useRouter()
    let allPages = navigation.flatMap((group) => group.links)
    let currentPageIndex = allPages.findIndex(
        (page) => page.href === router.pathname
    )

    if (currentPageIndex === -1) {
        return null
    }

    let previousPage = allPages[currentPageIndex - 1]
    let nextPage = allPages[currentPageIndex + 1]

    if (!previousPage && !nextPage) {
        return null
    }

    return (
        <div className="flex">
            {previousPage && (
                <div className="flex flex-col items-start gap-3">
                    <PageLink label="Назад" page={previousPage} previous/>
                </div>
            )}
            {nextPage && (
                <div className="ml-auto flex flex-col items-end gap-3">
                    <PageLink label="Вперед" page={nextPage}/>
                </div>
            )}
        </div>
    )
}

function TwitterIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <path
                d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"/>
        </svg>
    )
}

function GitHubIcon(props) {
    return (
        <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
            />
        </svg>
    )
}

function VKIcon(props) {
    return (
        <svg viewBox="0 0 448 512" aria-hidden="true" {...props}>
            <path
                d="M31.49 63.49C0 94.982 0 145.672 0 247.04v17.92c0 101.369 0 152.059 31.49 183.549C62.982 480 113.672 480 215.04 480h17.92c101.369 0 152.059 0 183.549-31.491C448 417.019 448 366.329 448 264.96v-17.92c0-101.369 0-152.059-31.491-183.55C385.019 32 334.329 32 232.96 32h-17.92C113.671 32 62.981 32 31.49 63.49M75.6 168.268h51.147c1.68 85.493 39.386 121.706 69.253 129.173V168.267h48.16V242c29.493-3.173 60.48-36.773 70.933-73.733h48.16a142.258 142.258 0 0 1-65.52 92.96a147.348 147.348 0 0 1 76.72 93.52H321.44a92.154 92.154 0 0 0-77.28-66.64v66.64h-5.787c-102.106 0-160.346-70-162.773-186.48"></path>
        </svg>
    )
}

function SocialLink({href, icon: Icon, children}) {
    return (
        <Link href={href} className="group">
            <span className="sr-only">{children}</span>
            <Icon
                className="h-6 w-6 fill-slate-700 transition group-hover:fill-slate-900 dark:group-hover:fill-slate-500"/>
        </Link>
    )
}

function SmallPrint() {
    return (
        <div
            className="flex flex-col items-center justify-between gap-5 border-t border-slate-900/5 pt-8 dark:border-white/5 sm:flex-row">
            <p className="text-xs text-slate-600 dark:text-slate-400">
                Copyright &copy; {new Date().getFullYear()} <a className="hover:text-sky-600 dark:hover:text-sky-400" href="https://www.localzet.com">Localzet Group</a>. All
                rights reserved.
            </p>
            <div className="flex gap-4">
                <SocialLink href="https://x.com/localzet_dev" icon={TwitterIcon}>
                    Follow us on Twitter
                </SocialLink>
                <SocialLink href="https://github.com/localzet-dev" icon={GitHubIcon}>
                    Follow us on GitHub
                </SocialLink>
                <SocialLink href="https://vk.com/localzet_dev" icon={VKIcon}>
                    Follow us on VKontakte
                </SocialLink>
            </div>
        </div>
    )
}

export function Footer() {
    let router = useRouter()

    return (
        <footer className="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
            {/*<Feedback key={router.pathname} />*/}
            <PageNavigation/>
            <SmallPrint/>
        </footer>
    )
}
