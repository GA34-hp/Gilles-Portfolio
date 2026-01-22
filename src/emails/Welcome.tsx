import { Button, Html, Head, Body, Text, Container, Section, Heading } from "@react-email/components";
import * as React from "react";

interface WelcomeProps {
  name?: string;
  email?: string;
  message?: string;
}

export default function Welcome({ name, email, message }: WelcomeProps = {}) {
  return (
    <Html>
      <Head />
      <Body style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: 0, padding: 20 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px', borderRadius: '8px' }}>
          <Section style={{ textAlign: 'center', marginBottom: '30px' }}>
            <Heading style={{ color: '#333333', fontSize: '24px' }}>New Message from Portfolio Contact Form</Heading>
          </Section>
          
          <Section style={{ marginBottom: '20px' }}>
            <Text style={{ fontSize: '16px', color: '#666666', marginBottom: '10px' }}>
              <strong>Name:</strong> {name || 'Not provided'}
            </Text>
            <Text style={{ fontSize: '16px', color: '#666666', marginBottom: '10px' }}>
              <strong>Email:</strong> {email || 'Not provided'}
            </Text>
            <Text style={{ fontSize: '16px', color: '#666666', marginBottom: '10px' }}>
              <strong>Message:</strong>
            </Text>
            <Text style={{ fontSize: '16px', color: '#333333', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '5px', whiteSpace: 'pre-wrap' }}>
              {message || 'No message provided'}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}