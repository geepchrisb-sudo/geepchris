export default async function handler(req, res) {
  // CORS configuration to lock down your endpoint to your own production domain
  res.setHeader('Access-Control-Allow-Origin', 'https://your-dashboard-domain.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle browser pre-flight requests gracefully
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { recipientEmail, recipientName, subject, htmlContent } = req.body;

  // This variable is securely pulled from your Vercel Environment Variables
  const PRIVATE_RESEND_KEY = process.env.EMAIL_API_KEY;

  try {
    // Making a direct secure request to Resend's API endpoint
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PRIVATE_RESEND_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Vintech System <system@yourdomain.com>', // Replace with your verified Resend domain email
        to: [recipientEmail],
        subject: subject,
        html: htmlContent
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send via Resend');
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
