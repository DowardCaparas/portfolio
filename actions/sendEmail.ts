'use server'

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    //simple server side validation
    /*
        if(!validateString(senderEmail, 500)) {
            return {
                error: 'Invalid sender email'
            }
        }

        if(!validateString(message, 5000)) {
            return {
                error: 'Invalid message'
            }
        }
    */

    try {
        await resend.emails.send({
            from: 'Contact Form <doward.caparas.com>',
            to: 'caparasdounhuward@gmail.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
    
        });
    } catch (error) {
        console.log(error);
    }

};

export default sendEmail