import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const data = await req.formData();

        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const coverLetter = data.get('coverletter');
        const resume = data.get('resume') as File | null;

        // Check required fields
        if (!name || !email || !phone || !coverLetter) {
            return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
        }

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Or use SMTP settings for custom providers
            auth: {
                user: process.env.EMAIL_USER, // Add your email here
                pass: process.env.EMAIL_PASS, // Add your password or app password here
            },
        });

        // Email options
        const mailOptions: any = {
            from: email,
            to: process.env.RECEIVER_EMAIL || 'dhruv.b@innovagecloud.com',
            subject: `Job Contact Form Submission from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Cover Letter: ${coverLetter}
            `,
        };

        // Handle resume attachment
        if (resume) {
            const buffer = Buffer.from(await resume.arrayBuffer());
            mailOptions.attachments = [
                {
                    filename: resume.name,
                    content: buffer,
                },
            ];
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Email sending error:', error);
        return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
    }
}
