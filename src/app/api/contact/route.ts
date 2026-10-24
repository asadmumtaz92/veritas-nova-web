import { NextResponse } from "next/server"
export const dynamic = "force-dynamic"
export const fetchCache = 'force-no-store'
const { EMAIL_FROM, PASSWORD, EMAIL_TO, } = process.env
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {

    try {
        const { name, email, message, subject, } = await request.json()
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields must be filled in.' }, { status: 400 })
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

        // Read the HTML template
        const templatePath = path.resolve('src/templates/contact.html');
        let emailTemplate = fs.readFileSync(templatePath, 'utf8');
        // Replace placeholders with actual data
        emailTemplate = emailTemplate.replace('{{name}}', name);
        emailTemplate = emailTemplate.replace('{{email}}', email);
        emailTemplate = emailTemplate.replace('{{subject}}', subject);
        emailTemplate = emailTemplate.replace('{{message}}', message);
        const mailOptions = {
            from: EMAIL_FROM,
            to: EMAIL_TO,
            subject: 'New Lead from Veritas Nova Contact Form',
            html: emailTemplate,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Contact form submitted successfully!', status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to submit contact form.' + error }, { status: 500 });
    }
}
