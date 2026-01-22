import express, { Request, Response } from 'express';
import cors from 'cors';
import { Resend } from 'resend';

interface EmailData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY || 're_RdkPpk3V_GPrHakfCDScxiV7LSLLSp6DB');

// Middleware
app.use(cors());
app.use(express.json());

// API endpoint
app.post('/api/emails', async (req: Request<unknown, ApiResponse, EmailData>, res: Response<ApiResponse>) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log('Received email request:', { name, email, subject, message: message?.substring(0, 50) + '...' });

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gillesalainwaffo@gmail.com',
      subject: subject || 'New message from portfolio contact form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333; text-align: center; margin-bottom: 30px;">New Message from Portfolio Contact Form</h2>
          
          <div style="margin-bottom: 20px;">
            <p style="font-size: 16px; color: #666; margin-bottom: 10px;">
              <strong>Name:</strong> ${name || 'Not provided'}
            </p>
            <p style="font-size: 16px; color: #666; margin-bottom: 10px;">
              <strong>Email:</strong> ${email || 'Not provided'}
            </p>
            <p style="font-size: 16px; color: #666; margin-bottom: 10px;">
              <strong>Message:</strong>
            </p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">
              ${message || 'No message provided'}
            </div>
          </div>
        </div>
      `,
    });

    console.log('Email sent successfully:', result);

    res.json({ 
      success: true, 
      message: 'Email sent successfully', 
      data: result 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    res.status(500).json({
      success: false,
      message: errorMessage || 'Failed to send email'
    });
  }
});

// const PORT = 3001;
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
