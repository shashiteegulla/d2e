import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const CONTACT_RECIPIENT = 'shashikumar.teegulla@gmail.com';
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const fromEmail = process.env.FROM_EMAIL || process.env.EMAIL_USER;

// Middleware
app.use(cors());
app.use(express.json());

// Create SMTP transporter (used as fallback when RESEND_API_KEY is not configured)
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
    try {
        const { name, email, company, project } = req.body;

        // Validation
        if (!name || !email || !company || !project) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Email content
        const subject = `New Contact Form Submission from ${name}`;
        const html = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Project Details:</strong></p>
        <p>${project.replace(/\n/g, '<br>')}</p>
      `;

        if (resend) {
            await resend.emails.send({
                from: fromEmail,
                to: [CONTACT_RECIPIENT],
                subject,
                html,
                replyTo: email,
            });
        } else {
            const mailOptions = {
                from: fromEmail,
                to: CONTACT_RECIPIENT,
                subject,
                html,
                replyTo: email,
            };

            // Send email
            await transporter.sendMail(mailOptions);
        }

        res.json({
            success: true,
            message: 'Email sent successfully'
        });
    } catch (error) {
        const rawMessage = String(error?.message || 'Unknown email error');
        let userMessage = 'Unable to send email right now. Please try again later.';

        if (rawMessage.includes('SmtpClientAuthentication is disabled')) {
            userMessage = 'Email service authentication is disabled for this mailbox. Please contact support.';
        } else if (rawMessage.toLowerCase().includes('resend') && rawMessage.toLowerCase().includes('api key')) {
            userMessage = 'Email provider API key is missing or invalid. Please contact support.';
        } else if (rawMessage.includes('You can only send testing emails to your own email address')) {
            userMessage = 'Your Resend account is in testing mode. Verify a sender domain to send to external recipients.';
        } else if (rawMessage.toLowerCase().includes('invalid login') || rawMessage.includes('535')) {
            userMessage = 'Email service credentials are invalid. Please contact support.';
        }

        console.error('Email error:', rawMessage);
        res.status(200).json({
            success: false,
            message: userMessage
        });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
