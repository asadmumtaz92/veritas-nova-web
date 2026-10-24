'use client'
import { Mail } from "lucide-react"
import React, { useState, } from "react"
import Form from "./form"

const ContactSection = () => {

    const [apiResp, setApiResp] = useState({
        email: '',

        loading: false,
        error: '',
        success: '',
    })

    const newsLetterHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (apiResp?.email == '' || apiResp?.email?.length < 10) {
            setApiResp(prev => ({ ...prev, error: 'Please enter valid e-mail address.', }))
        } else {
            try {
                setApiResp(prev => ({ ...prev, error: '', loading: true, }))
                const formData = {
                    email: apiResp?.email
                }
                const res = await fetch('/api/sendEmail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })

                const result = await res.json()
                if (res.ok) {
                    setApiResp(prev => ({ ...prev, email: '', error: '', loading: false, success: 'Thank you! You’ve successfully subscribed to our newsletter.', }))
                    setTimeout(() => {
                        setApiResp(prev => ({ ...prev, success: '', }))
                    }, 2000)

                } else {
                    setApiResp(prev => ({ ...prev, loading: false, error: result?.message, }))
                }
            } catch (error) {
                console.log("Error:", error)
                setApiResp(prev => ({ ...prev, error: '', loading: false, }))
            }
        }
    }

    return (
        <div id="contact">
            <Form />
            <div className="bg-[#1B3A4B] py-[94px] flex justify-center items-center min-h-[577px]">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-10 px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto">
                    <div className="flex flex-col items-center lg:items-start w-full text-white">
                        <h1 className="font-crimson font-[700] text-[56.94px] lg:text-[76.94px] leading-[100%]">Find us here!</h1>
                        <p className="font-[700] text-[20px] leading-[100%] mt-4">5900 Balcones Dr Suite 100, Austin, TX 78731</p>
                        <hr className="w-full max-w-[550px] h-[1px] bg-[#E6E6E6] my-[42px]" />

                        <h3 className="font-[700] text-[18px] leading-[28px]">Join Our Newsletter</h3>
                        <p className="font-[400] text-[16px] leading-[24px]">Be the first to know about our latest updates, exclusive offers, and more.</p>

                        <form onSubmit={newsLetterHandler} className={`${apiResp?.loading && "opacity-[0.6]"} flex gap-[8px] w-full max-w-[442px] mt-[42px]`}>
                            <input
                                placeholder="Enter your e-mail address"
                                value={apiResp?.email}
                                id="email"
                                name="email"
                                type="email"
                                onChange={(e) => setApiResp(prevState => ({ ...prevState, email: e?.target?.value }))}
                                className="border-[1px] rounded-[8px] p-3 h-[44px] w-full max-w-[320px]"
                                required={true}
                            />
                            <button disabled={apiResp?.loading} type="submit" className="bg-[#EFEAE3] rounded-[8px] h-[44px] max-w-[110px] py-[12px] px-[20px] font-[400] text-[14px] leading-[20px] text-[#1B3A4B]">Subscribe</button>
                        </form>
                        {apiResp?.error && <p className="!text-left w-full max-w-[442px] text-red-600 mt-2 first-letter:uppercase">{apiResp?.error}</p>}
                        {apiResp?.success && <p className="!text-left w-full max-w-[442px] text-green-600 mt-2 first-letter:uppercase">{apiResp?.success}</p>}

                        <hr className="w-full max-w-[550px] h-[1px] bg-[#E6E6E6] my-[42px]" />

                        <div className="flex flex-wrap justify-between w-full max-w-[550px]">
                            <a href="mailto:sales@veritasnova.com" className="flex items-center gap-2">
                                <Mail /> sales@veritasnova.com
                            </a>
                            {/* <a href="tel:+1770880-5516" target="_blank" className="flex items-center gap-2">
                            <Image src={'/icons/phone.svg'} priority width={24} height={24} alt="phone icon" /> +1 (770) 880-5516
                        </a> */}
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-end w-full">
                        <div className="w-full flex items-center justify-center h-[337px] lg:h-[437px] max-w-[650px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.330390834493!2d-97.7575295236201!3d30.34155887477533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644cae2f96fffff%3A0x893fa7795b7d5f91!2s5900%20Balcones%20Dr%20Suit%20100%2C%20Austin%2C%20TX%2078731%2C%20USA!5e0!3m2!1sen!2s!4v1750067300514!5m2!1sen!2s"
                                width="600"
                                height="450"
                                className="w-full h-full rounded"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
