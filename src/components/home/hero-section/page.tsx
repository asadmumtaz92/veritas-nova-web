import Link from "next/link"
import React from "react"

const HeroSection = () => {

    const style = `leading-[100%] tracking-[0%] ease-in-out duration-500`

    return (
        <div className="flex justify-centeritems-center min-h-screen bg-[url('/images/hero-section.jpg')] bg-center bg-cover py-36">
            <div className="flex flex-col justify-center items-start text-white px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto">
                <h1 className={`${style} md:max-w-[80%] font-crimson font-[700] text-[40px] md:text-[55px] lg:text-[76.94px]`}>
                    Unmatched Strength. Ultimate Reliability. Quick Link Steel Baling Ties
                </h1>
                <p className={`${style} mt-[25px] mb-[75px] md:max-w-[47%] font-[500] text-[24px]`}>
                    Industry-leading tensile strength, corrosion resistance, and on-time delivery across North America
                </p>

                <Link href={'#contact'} className={`${style} flex items-center justify-center bg-[#F3EFEA] rounded-full w-[303px] h-[69px] text-[#1B3A4B] text-[21px] font-[700]`}>
                    Get Your Free Quote
                </Link>
            </div>
        </div>
    )
}

export default HeroSection
