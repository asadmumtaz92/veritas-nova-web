import React from 'react'
import Image from 'next/image'

const Footer = () => {

    return (
        <footer className={`flex items-center justify-center w-full mx-auto btn-grad h-[134px] bg-[#F3EFEA]`}>
            <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto">

                <Image src={'/logo.svg'} priority={false} className="w-auto h-auto mx-auto sm:ml-0" width={130} height={60} alt="Veritas Nova Inc. logo" />

                <p className='pt-2 text-[14px] leading-[16px] xl:text-[16px] xl:leading-[21.6px] font-inter text-[#1B3A4B] font-[400]'>
                    {`© ${new Date().getFullYear()} Veritas Nova Inc. All rights reserved.`}
                </p>
            </div>
        </footer>
    )
}

export default Footer
