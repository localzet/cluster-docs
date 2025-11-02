import {useRouter} from 'next/router'

const guides = [
    {
        href: '/install/install',
        title: 'Установка',
        description: 'Установка и базовая настройка Cluster',
    },
    {
        href: '/architecture/overview',
        title: 'Архитектура',
        description: 'Понимание архитектуры Gateway-Worker',
    },
    {
        href: '/must-read',
        title: 'Ключевые концепции',
        description: 'Основные концепции и принципы работы',
    },
    {
        href: '/example',
        title: 'Примеры',
        description: 'Практические примеры использования',
    },
]

export function Guides() {
    let router = useRouter()

    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
            {guides.map((guide) => (
                <div key={guide.href}>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {guide.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                        {guide.description}
                    </p>
                    <p className="mt-4">
                        <a
                            href={guide.href}
                            className="text-sm font-semibold text-sky-500 hover:text-sky-600 dark:text-sky-400"
                        >
                            Читать →
                        </a>
                    </p>
                </div>
            ))}
        </div>
    )
}
