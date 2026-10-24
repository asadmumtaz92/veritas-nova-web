import { Inter, Crimson_Pro, } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const crimson = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimson',
})

export const Fonts = {
    'inter': inter.className,
    'crimson': crimson.variable,
}
