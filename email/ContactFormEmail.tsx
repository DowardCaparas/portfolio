import React from 'react'
import {
    Html, Body, Head, Heading, Hr, Container, Preview, Section, Text
}from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

const ContactFormEmail = ({message, senderEmail}: ContactFormEmailProps) => {
  return (
    <Html>
        <Head />
        <Preview>New message from your portfolio</Preview>
            <Tailwind>
                <Body>
                    <Container>
                        <Section>
                            <Heading></Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender&apos;s email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
     </Html>
  )
  
}

export default ContactFormEmail