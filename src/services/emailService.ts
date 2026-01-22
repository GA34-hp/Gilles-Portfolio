export const sendEmail = async (formData: { name: string; email: string; subject?: string; message: string }) => {
  try {
    console.log('Sending email with data:', formData);
    
    const response = await fetch('/api/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    const responseText = await response.text();
    console.log('Response text:', responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('Failed to parse JSON response:', responseText);
      return { success: false, message: 'Server returned invalid response' };
    }

    if (response.ok) {
      return { success: true, message: 'Email sent successfully' };
    } else {
      return { success: false, message: result.message || 'Failed to send email' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again later.' };
  }
};
