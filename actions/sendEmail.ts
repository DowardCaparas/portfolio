'use server'

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import { validateString } from "@/utils/validation"; // Make sure this import path is correct

if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not defined');
}

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail') as string;
    const message = formData.get('message') as string;

    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email'
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message'
        };
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
        return { success: true };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            error: 'Failed to send email'
        };
    }
};

export default sendEmail;
