import React from 'react'
import Image from 'next/image'

interface ROWPROPS {
    col1: string
    col2: string
    col3: string
    col4: string
}

const SpecificationsSection = () => {

    const tableData = [
        {
            col1: '2000',
            col2: '2.5',
            col3: '1,200',
            col4: 'Black Annealed',
        }, {
            col1: '3000',
            col2: '3.0',
            col3: '1,400',
            col4: 'Galvanized',
        }, {
            col1: '4000',
            col2: '3.1~3.6',
            col3: '1,600',
            col4: 'Galvanized + Phosphate',
        }, {
            col1: '5000',
            col2: '4.0',
            col3: '1,800',
            col4: 'Galvanized Heavy-Duty',
        },
    ]

    const ArrowIcon = () => <Image
        src="/icons/arrow-circle.svg" priority
        width={25} height={25} alt="Baled materials"
        className="w-[25px] h-[25px] object-cover rounded"
    />
    const TableRow = ({ col1, col2, col3, col4 }: ROWPROPS) => {
        return <tr className="border-b-[2px] border-[#D9D9D9] h-[41px] font-[400] text-black text-[18px] leading-[100%] leading-[0%] text-nowrap">
            <td className="py-3 px-4">{col1}</td>
            <td className="py-3 px-4">{col2}</td>
            <td className="py-3 px-4">{col3}</td>
            <td className="py-3 px-4">{col4}</td>
        </tr>
    }

    return (
        <section id="specifications" className="pt-[155px] px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1B3A4B]">
                Specifications & Application Table
            </h2>

            <div className="w-full overflow-hidden overflow-x-scroll">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-[#17394F] text-white text-left h-[65px] text-nowrap">
                            <th className="py-3 px-4 font-[700] text-[20px] leading-[100%]">Length (mm)</th>
                            <th className="py-3 px-4 font-[700] text-[20px] leading-[100%]">Wire Diameter (mm)</th>
                            <th className="py-3 px-4 font-[700] text-[20px] leading-[100%]">Tensile Strength (kgf/mm²)</th>
                            <th className="py-3 px-4 font-[700] text-[20px] leading-[100%]">Final</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm md:text-base !bg-[#F3EFEA]">
                        {tableData?.map((item: ROWPROPS) => <TableRow key={item?.col1} {...item} />)}
                    </tbody>
                </table>
            </div>

            {/* Industry Applications */}
            <div className="w-full pt-[174px] pb-5 flex flex-col lg:flex-row items-center">
                <Image
                    src="/images/industry-pplications.jpg" priority
                    width={600} height={400} alt="Baled materials"
                    className="w-[100%] max-w-[600px] max-h-[514px] lg:max-w-[480px] xl:max-w-[600px] lg:max-h-[414px] object-cover hover:rounded-md hover:drop-shadow-2xl ease-in-out duration-500"
                />

                <div className='w-full max-w-[600px] mt-[50px] lg:mt-0 lg:ml-[40px]'>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#17394F] mb-4">
                        Industry Applications
                    </h3>

                    <ul className="space-y-4 text-sm md:text-base">
                        <li className="flex gap-3">
                            <ArrowIcon />
                            <p>
                                <strong>Textile Recycling:</strong> <br /> Secure cotton and polyester bales with minimal breakage.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <ArrowIcon />
                            <p>
                                <strong>Tire Recycling:</strong> <br /> Hold bulky tire bundles for efficient storage and transport.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <ArrowIcon />
                            <p>
                                <strong>Paper & Pulp:</strong> <br /> Reinforce high-stack paper bales to avoid shifting.
                            </p>
                        </li>
                        <li className="flex gap-3">
                            <ArrowIcon />
                            <p>
                                <strong>Agricultural Processing:</strong> <br /> Bundle cotton, wool, and jute for safe export.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SpecificationsSection
