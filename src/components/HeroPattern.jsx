import Image from 'next/image'

export function HeroPattern() {
    return (
        <div className="absolute inset-0 -z-10 mx-0 max-w-none flex justify-center overflow-hidden">
            <div className="w-[108rem] flex-none flex justify-end">
                <picture>
                    <source srcSet="/images/docs@30.8b9a76a2.avif" type="image/avif" className="not-prose"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image
                        src="/images/docs@tinypng.d9e4dcdc.png" alt=""
                        className="not-prose w-[71.75rem] flex-none max-w-none dark:hidden" decoding="async"/>
                </picture>
                <picture>
                    <source srcSet="/images/docs-dark@30.1a9f8cbf.avif" type="image/avif" className="not-prose"/>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <Image src="/images/docs-dark@tinypng.1bbe175e.png" alt=""
                         className="not-prose w-[90rem] flex-none max-w-none hidden dark:block" decoding="async"/>
                </picture>
            </div>
        </div>


    )
}
