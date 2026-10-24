"use client";
import { useState } from 'react';
import TextInput from '@/components/common-ui/text-input/page';

const ContactForm: React.FC = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const validateField = (name: string, value: any) => {
        let error = ''
        switch (name) {
            case 'name':
                if (!value) {
                    error = "Name is required"
                }
                break
            case 'email':
                if (!value) {
                    error = "Please enter valid email"
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    error = "Please enter valid email."
                }
                break
            case 'subject':
                if (!value) {
                    error = "Product of Interest is required"
                }
                break
            case 'message':
                if (!value) {
                    error = "Message is required"
                }
                break
            default:
                break
        }
        return error
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value, })
        // Clear the error message for the field being edited
        const error = validateField(name, value)
        setErrors({ ...errors, [name]: error, })
    }
    const validateForm = () => {
        const errors: any = {}
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key as keyof typeof formData])
            if (error) {
                errors[key] = error
            }
        })
        return errors
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const errors = validateForm()
        if (Object.keys(errors).length === 0) {
            setLoading(true)
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })

                const result = await res.json()
                if (res.ok) {
                    setSuccessMessage('Contact form submitted successfully!')
                    setLoading(false)
                    setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                    })
                    setTimeout(() => {
                        setSuccessMessage('') // Clear the message after 3 seconds
                    }, 3000)
                } else {
                    setLoading(false)
                    console.log(`Error: ${result.message}`)
                }
            } catch (error) {
                setLoading(false)
                console.log(`Error: ${error}`)
            }
        } else {
            setErrors(errors)
            setSuccessMessage('')
        }
    }

    return (
        <div className="flex w-full justify-center items-center px-[30px] md:px-[50px] xl:px-[80px] w-full max-w-[1440px] mx-auto my-28">
            <div className='max-w-[450px] mx-auto md:max-w-3xl w-full'>
                <form onSubmit={handleSubmit} noValidate className='flex flex-col w-full gap-y-[25px] md:shadow-lg py-12 md:px-20 md:border rounded-md'>
                    <p className='font-crimson text-center font-[500] text-dark-300 text-[3rem] leading-[100%]'>
                        Contact Us
                    </p>
                    <TextInput
                        label={'Name *'}
                        value={formData?.name}
                        id='name'
                        name={'name'}
                        type='text'
                        onChange={handleChange}
                        error={errors?.name}
                    />
                    <TextInput
                        label={'Email *'}
                        id='email'
                        name='email'
                        value={formData?.email}
                        onChange={handleChange}
                        type="email"
                        error={errors?.email}
                        onKeyDown={(e: { key: string; preventDefault: () => void }) => {
                            if (e.key === " ") e.preventDefault(); // Prevent space bar in email field
                        }}
                    />
                    <TextInput
                        label={'Product of Interest *'}
                        id='subject'
                        name={'subject'}
                        value={formData?.subject}
                        onChange={handleChange}
                        type="text"
                        error={errors?.subject}
                    />
                    <div className="flex flex-col mb-4">
                        <label className='text-primary-dark text-[14px] sm:text-[16px] leading-[25px] mb-[10px] font-[600] capitalize font-opensans'>Message <span className='text-red-600'>*</span></label>
                        <textarea
                            id='message'
                            name='message'
                            rows={4}
                            value={formData?.message}
                            onChange={handleChange}
                            className="w-full py-[12px] bg-white text-black text-[16px] leading-[20px] font-[400] font-opensans placeholder-text px-[12px] lg:px-[24px] rounded-[6px] border border-gray-200 !outline-none !ring-none"
                        />
                        {errors.message && <small className="text-left mt-[5px] mx-[5px] text-red-500 text-xs">{errors.message}</small>}
                    </div>

                    <button disabled={loading} type="submit" className="flex items-center uppercase border w-fit px-[34px] h-[40px] rounded-[10px] bg-primary-yellow hover:bg-primary text-center text-blue-dark hover:text-white text-[14px] sm:text-[17px] leading-[16px] font-[700] font-opensans">
                        {loading ? 'Please wait...' : 'Submit'}
                    </button>
                    {successMessage && (
                        <div className="bg-green-100 text-green-600 py-2 px-3 rounded mx-auto w-full text-[1rem] text-center">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ContactForm