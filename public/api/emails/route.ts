import Welcome from "../../../src/emails/Welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'gillesalainwaffo@gmail.com',
      subject: subject || 'New message from portfolio contact form',
      react: Welcome({ name, email, message }),
    });

    return Response.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

