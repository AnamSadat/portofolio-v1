import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  // Konfigurasi transporter SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true untuk 465, false untuk port lain
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Template email HTML
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pesan Kontak Baru</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f4f4f4;
        }
        .container {
          background-color: #ffffff;
          border-radius: 10px;
          padding: 30px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          border-bottom: 3px solid #00ff99;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .header h1 {
          color: #1c1c22;
          margin: 0;
          font-size: 28px;
        }
        .header p {
          color: #666;
          margin: 10px 0 0 0;
          font-size: 16px;
        }
        .content {
          margin-bottom: 30px;
        }
        .field {
          margin-bottom: 20px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #00ff99;
        }
        .field-label {
          font-weight: bold;
          color: #1c1c22;
          margin-bottom: 5px;
          display: block;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .field-value {
          color: #333;
          font-size: 16px;
          word-wrap: break-word;
        }
        .message-field {
          background-color: #f0f9ff;
          border-left-color: #0ea5e9;
        }
        .footer {
          text-align: center;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
          font-size: 14px;
        }
        .footer a {
          color: #00ff99;
          text-decoration: none;
        }
        .timestamp {
          background-color: #e7f3ff;
          padding: 10px;
          border-radius: 5px;
          font-size: 12px;
          color: #666;
          text-align: center;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📧 Pesan Kontak Baru</h1>
          <p>Dari Portfolio Website Anam Sadat</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="field-label">👤 Nama Pengirim</span>
            <div class="field-value">${data.name}</div>
          </div>
          
          <div class="field">
            <span class="field-label">📧 Email</span>
            <div class="field-value">
              <a href="mailto:${
                data.email
              }" style="color: #00ff99; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>
          
          <div class="field">
            <span class="field-label">📝 Subjek</span>
            <div class="field-value">${data.subject}</div>
          </div>
          
          <div class="field message-field">
            <span class="field-label">💬 Pesan</span>
            <div class="field-value" style="white-space: pre-wrap;">${
              data.message
            }</div>
          </div>
        </div>
        
        <div class="footer">
          <p>
            Pesan ini dikirim otomatis dari form kontak di 
            <a href="${
              process.env.NEXT_PUBLIC_SITE_URL || 'https://anamsadat.dev'
            }">
              anamsadat.dev
            </a>
          </p>
          <p>
            Untuk membalas, silakan kirim email langsung ke: 
            <a href="mailto:${data.email}">${data.email}</a>
          </p>
        </div>
        
        <div class="timestamp">
          📅 Dikirim pada: ${new Date().toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          })} WIB
        </div>
      </div>
    </body>
    </html>
  `;

  // Konfigurasi email
  const mailOptions = {
    from: `"${data.name}" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
    replyTo: data.email,
    subject: `[Portfolio Contact] ${data.subject}`,
    html: htmlTemplate,
    text: `
Pesan Kontak Baru dari Portfolio

Nama: ${data.name}
Email: ${data.email}
Subjek: ${data.subject}

Pesan:
${data.message}

---
Dikirim pada: ${new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
    })} WIB
    `.trim(),
  };

  try {
    // Kirim email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Gagal mengirim email');
  }
}
