import type { Metadata } from "next"
import "./globals.css"

import Header from "@/components/header/page"
import Footer from "@/components/footer/page"

import { Inter, Crimson_Pro, } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const crimson = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimson',
})


interface RootLayoutProps {
    readonly children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps) => {

    return (
        <html lang="en">
            <body className={`${inter.className} ${crimson.variable} antialiased w-full`}>
                <Header />
                <div className="flex flex-col w-full min-h-screen">
                    {children}
                </div>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout

export const metadata: Metadata = {
    title: 'Veritas Nova',
    description: 'This Website design for Veritas Nova.',
    keywords: [
        'Veritas Nova',
        'Tyres',
    ],
}
