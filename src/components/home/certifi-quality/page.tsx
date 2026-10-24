import React from "react"
import Image from "next/image"

const CertificationsQA = () => {

    const CardItem = ({ title, desc }: { title: string, desc: string }) => {
        return <div className="flex flex-col gap-[24px] mx-auto w-full max-w-[380px] lg:max-w-[350px] px-[30px] py-[73px] bg-white text-black leading-[130%] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image src={'/icons/certifiQA.svg'} priority height={51} width={51} alt={title} />
            <h3 className="text-[25.35px] font-[700]">{title}</h3>
            <p className="text-[22.18px] font-[400]">{desc}</p>
        </div>
    }

    return (
        <section className="flex flex-col w-full relative px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto mt-[176px] py-[86px] mb-10">

            <div className="flex flex-col items-start w-full lg:max-w-[700px] xl:max-w-[800px] mx-auto xl:ml-0 mt-5">
                <h2 className="w-full text-3xl font-[700] mt-[39px] mb-[50px] text-center xl:text-left">
                    Certifications & Quality Assurance
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] xl:gap-[70px] z-[10] mx-auto w-full">
                    <CardItem title="Third-Party Testing" desc="Monthly samples tested at an accredited lab for tensile, elongation, and corrosion." />
                    <CardItem title="In-House QC:" desc="Visual, dimensional, and pull-test checks on every production lot." />
                </div>
            </div>

            <div className="mt-[40px] mx-auto xl:absolute right-0 right-[30px] md:right-[50px] xl:right-[80px] overflow-hidden rounded-lg hover:rounded-none">
                <Image src={'/images/certifiQA.jpg'} priority className="object-end object-center h-auto min-h-[250px] md:h-[540px] md:max-w-[658px] xl:max-w-[600px] shadow-md hover:shadow-lg ease-in-out duration-500" height={570} width={800} alt="" />
            </div>
        </section>
    )
}

export default CertificationsQA
