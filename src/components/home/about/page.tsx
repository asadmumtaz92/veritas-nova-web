import React from "react"
import Image from "next/image"

const AboutSection = () => {

    const cards = [
        {
            title: "Our Mission",
            text: "To deliver the most reliable baling solutions that maximize uptime and minimize waste.",
            image: "/images/about-1.jpg",
        }, {
            title: "Our Story",
            text: "Founded in 2025 with a passion for quality steel fabrication and service.",
            image: "/images/about-2.jpg",
        }, {
            title: "Our Values",
            text: "Integrity, innovation, and customer-first support.",
            image: "/images/about-3.jpg",
        },
    ]

    return (
        <section id="about" className="w-full mt-[200px] bg-[#1B3A4B] pt-[93px]">
            <div className="px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto">
                <h2 className="text-white text-2xl md:text-[76.94px] font-crimson font-[700] text-center mb-12">
                    About Veritas Nova
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 -mb-16">
                    {cards?.map((card, idx) => (
                        <div key={idx} className="w-full max-w-[500px] mx-auto relative flex flex-col jusdity-between bg-white pt-3 min-h-[532px] hover:rounded-md overflow-hidden shadow-md transition-all duration-300 hover:drop-shadow-3xl">
                            <div className="text-center max-w-[80%] mx-auto">
                                <h3 className="text-[36px] font-bold leading-[80px]">{card?.title}</h3>
                                <p className="text-gray-700 text-[16px]">{card?.text}</p>
                            </div>
                            <Image
                                src={card?.image} priority
                                alt={card?.title} width={500} height={300}
                                className="mt-[44px] w-full h-[336px] object-cover mb-0 absolute bottom-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutSection
