"use client"
import { useState, useEffect, } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import MobileHeader from "./headerMobile"

const Header = () => {

    const pathname = usePathname()
    const [isMobile, setIsMobile] = useState(false)
    const [prevScrollpos, setPrevScrollpos] = useState(0)
    const [scrollTimeout, setScrollTimeout] = useState<number | null>(null)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const navbar = document.getElementById("navbar")

        if (navbar) {
            if (currentScrollPos > prevScrollpos && currentScrollPos > 50) {
                navbar.style.top = "-90px"
            } else {
                navbar.style.top = "-90px"
            }
        }

        setPrevScrollpos(currentScrollPos)
        if (scrollTimeout) clearTimeout(scrollTimeout)

        // When scroll stop
        setScrollTimeout(
            setTimeout(() => {
                const navbar = document.getElementById("navbar")
                if (navbar) {
                    navbar.style.transition = `all 0.5s ease-in-out`
                    navbar.style.top = "0"
                }
            }, 100) as unknown as number
        )
    }

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768)

        handleResize()
        window.addEventListener("resize", handleResize)
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("scroll", handleScroll)

            if (scrollTimeout) clearTimeout(scrollTimeout)
        }
    }, [prevScrollpos, scrollTimeout])
    const style = `h-[50px] p-2 text-nowrap no-underline font-inter font-[400] text-[20px] leading-[100%] tracking-[0%] text-[#090909] text-nowrap`

    return (
        <header id="navbar" className={`w-[100vw] bg-[#F3EFEA] flex fixed top-0 left-0 right-0 z-[30] h-[90px]`}>
            <div className="flex justify-between items-center w-full h-[90px] px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto">

                {isMobile
                    ? <MobileHeader />
                    : <div className="hidden md:flex justify-between flex-1">
                        <Link href="/" className="flex items-center">
                            <Image src={'/logo.svg'} priority={false} className="w-auto h-auto" width={104} height={54} alt="Veritas Nova Inc. logo" />
                        </Link>

                        <nav className="flex items-center gap-x-[20px] lg:gap-x-[30px]">
                            <Link href="#features" className={`flex items-center ${style} ${pathname.endsWith("#featuers") ? "!text-primary" : ""}`}>
                                Features
                            </Link>
                            <Link href="#specifications" className={`flex items-center ${style} ${pathname.endsWith("#specifications") ? "!text-primary" : ""}`}>
                                Specifications
                            </Link>
                            <Link href="#about" className={`flex items-center ${style} ${pathname.endsWith("#about") ? "!text-primary" : ""} text-nowrap`}>
                                About
                            </Link>
                            <Link href="#contact" className={`flex items-center ${style} ${pathname.endsWith("#contact") ? "!text-primary" : ""}`}>
                                Contact
                            </Link>
                        </nav>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header
