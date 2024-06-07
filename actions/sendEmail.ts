'use server'

import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/ContactFormEmail';
import { validateString } from '@/utils/validation';
import React from 'react';

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { senderEmail, message } = req.body;

    if (!validateString(senderEmail, 500)) {
        return res.status(400).json({ error: 'Invalid sender email' });
    }

    if (!validateString(message, 5000)) {
        return res.status(400).json({ error: 'Invalid message' });
    }

    try {
        await resend.emails.send({
            from: 'Contact Form <doward.caparas.com>',
            to: 'caparasdounhuward@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail,
            }),
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
};

export default sendEmail;

