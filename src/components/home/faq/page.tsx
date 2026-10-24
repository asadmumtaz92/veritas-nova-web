import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


const FAQ = () => {

    return (
        <section className="flex flex-col lg:flex-row gap-12 w-full px-[30px] md:px-[50px] xl:px-[80px] max-w-[1440px] mx-auto pt-[156px] pb-10">
            <div className="flex w-full max-w-[550px]">
                <h1 className='font-crimson text-[#1B3A4B] text-[60.94px] leading-[100%] font-[700]'>Frequently Asked Questions</h1>
            </div>
            <div className="flex w-full ">
                <Accordion
                    type="multiple"
                    // collapsible // enable for single
                    className="w-full"
                    defaultValue={["item-1", "item-2", "item-3"]}
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='font-[600] text-black text-[16px] leading-[100%]'>1. What’s your minimum order quantity?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='font-[400] text-black text-[16px] leading-[100%]'>
                                Standard MOQ is 5,000 ties; smaller pilot runs available on request.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className='!my-[20px]'>
                        <AccordionTrigger className='font-[600] text-black text-[16px] leading-[100%]'>2. Lead time?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='font-[400] text-black text-[16px] leading-[100%]'>
                                Typical turnaround is 2–4 weeks after order confirmation and payment.
                            </p>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className='font-[600] text-black text-[16px] leading-[100%]'>3. Custom sizes?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                            <p className='font-[400] text-black text-[16px] leading-[100%]'>
                                Available—just send your specs.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div >
        </section >
    )
}

export default FAQ
