import Image from 'next/image'

export function Logo() {
    return (
        <div className="h-8 w-full">
            <Image src='/logo-light.png' className="block dark:hidden w-full h-auto max-h-8 mt-1" alt="Triangle Web"></Image>
            <Image src='/logo-dark.png' className="hidden dark:block w-full h-auto max-h-8 mt-1" alt="Triangle Web"></Image>
        </div>
    )
}
