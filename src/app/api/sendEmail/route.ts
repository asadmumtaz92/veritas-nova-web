import { NextResponse } from "next/server"
export const dynamic = "force-dynamic"
export const fetchCache = 'force-no-store'
import nodemailer from 'nodemailer'
const { EMAIL_FROM, PASSWORD, EMAIL_TO, } = process.env

export async function POST(request: Request) {

    try {
        const data = await request.json()
        const email = data?.email
        if (!email) {
            return NextResponse.json({ message: 'Valid e-mail is required.' }, { status: 400 })
        }

        const transporter = nodemailer.createTransport({
            host: 'mail.byteshifted.net',
            port: 465,
            secure: true,
            auth: {
                user: EMAIL_FROM,
                pass: PASSWORD,
            },
        })

        const mailOptions = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
            subject: `New Lead from Veritas Nova Contact Form`,
            html: `
                <h2>New Newsletter Subscription</h2>
                <p><strong>Subscriber Email:</strong> ${email}</p>
                <p style="margin-top: 20px;">Best regards,<br>Veritas Nova Inc.</p>
            `,
            replyTo: email,
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({ message: 'Subscription newsletter successfully done!', status: 200 })
    } catch (error) {
        console.log('Error:', error)
        return NextResponse.json({ error: 'Error while subscription newsletter.' }, { status: 500 })
    }
}
