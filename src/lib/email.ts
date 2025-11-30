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
  <meta charset="UTF-8" />
  <title>Pesan Kontak Baru</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f3f4f6; padding:24px 0;">
    <tr>
      <td align="center">
        
        <!-- Container -->
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background:#ffffff; border-radius:16px; border:1px solid #e5e7eb; box-shadow:0 4px 18px rgba(0,0,0,0.06);">

          <!-- HEADER -->
          <tr>
            <td style="padding:20px 24px; border-bottom:1px solid #e5e7eb;">
              <table width="100%">
                <tr>

                  <!-- Brand -->
                  <td align="left">
                    <table>
                      <tr>
                        <td align="center" style="
                          width:40px;
                          height:40px;
                          border-radius:50%;
                          background:#2563eb;
                          font-size:15px;
                          color:#ffffff;
                          font-weight:600;
                          font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
                          line-height:40px;
                        ">
                          AS
                        </td>
                        <td width="12"></td>
                        <td style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                          <div style="font-size:15px; font-weight:600; color:#111827;">Anam Sadat · Portfolio</div>
                          <div style="font-size:12px; color:#6b7280;">Notifikasi Formulir Kontak</div>
                        </td>
                      </tr>
                    </table>
                  </td>

                  <!-- Badge -->
                  <td align="right">
                    <span style="
                      padding:6px 12px;
                      border-radius:8px;
                      background:#ecfdf5;
                      color:#059669;
                      border:1px solid #a7f3d0;
                      font-size:11px;
                      letter-spacing:0.05em;
                      font-weight:600;
                      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
                    ">
                      CONTACT FORM
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:22px 24px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">

              <h1 style="margin:0 0 4px 0; font-size:20px; font-weight:600; color:#111827;">
                Pesan baru diterima
              </h1>
              <p style="margin:0; font-size:13px; color:#6b7280;">
                Anda menerima pesan melalui formulir kontak di ${
                  process.env.NODE_ENV === 'development'
                    ? process.env.NEXT_PUBLIC_SITE_URL
                    : 'https://anamsadat.vercel.app'
                }.
              </p>

              <div style="
                margin-top:14px;
                display:inline-block;
                padding:4px 12px;
                background:#f3f4f6;
                border:1px solid #e5e7eb;
                border-radius:6px;
                font-size:11px;
                color:#6b7280;
              ">
                Channel: Website Portfolio
              </div>

              <!-- SECTION INFO -->
              <table width="100%" style="margin-top:24px; border:1px solid #e5e7eb; border-radius:14px;">
                <tr>
                  <td style="padding:18px 18px 14px 18px;">

                    <div style="font-size:12px; font-weight:600; color:#6b7280; margin-bottom:12px; letter-spacing:0.08em; text-transform:uppercase;">
                      Informasi Pengirim
                    </div>

                    <div style="margin-bottom:14px;">
                      <div style="font-size:12px; color:#6b7280;">Nama</div>
                      <div style="font-size:15px; color:#111827;">${
                        data.name
                      }</div>
                    </div>

                    <div style="margin-bottom:14px;">
                      <div style="font-size:12px; color:#6b7280;">Email</div>
                      <div style="font-size:15px; color:#111827;">
                        <a href="mailto:${
                          data.email
                        }" style="color:#2563eb; text-decoration:none;">
                          ${data.email}
                        </a>
                      </div>
                    </div>

                    <div style="margin-bottom:14px;">
                      <div style="font-size:12px; color:#6b7280;">Subjek</div>
                      <div style="font-size:15px; color:#111827;">
                        ${data.subject}
                      </div>
                    </div>

                    <!-- MESSAGE -->
                    <div style="margin-bottom:4px;">
                      <div style="font-size:12px; color:#6b7280; margin-bottom:4px;">Pesan</div>

                      <!-- Message box updated (less centered) -->
                      <div style="
                        padding:12px 14px;
                        background:#f8fafc;
                        border:1px solid #e2e8f0;
                        border-radius:10px;
                        font-size:14px;
                        color:#111827;
                        line-height:1.6;
                        white-space:pre-wrap;
                        text-align:left;
                      ">
                        ${data.message}
                      </div>
                    </div>

                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:16px 24px 20px 24px; border-top:1px solid #e5e7eb; background:#fafafa;">

              <p style="margin:0 0 6px 0; font-size:12px; color:#6b7280;">
                Email ini dikirim otomatis oleh sistem portfolio <strong style="color:#111827;">Anam Sadat</strong>.
              </p>

              <p style="margin:0 0 6px 0; font-size:12px; color:#6b7280;">
                Untuk membalas: 
                <a href="mailto:${
                  data.email
                }" style="color:#2563eb; text-decoration:none;">
                  ${data.email}
                </a>
              </p>

              <!-- TIME BADGE -->
              <div style="margin-top:10px;">
                <span style="
                  display:inline-block;
                  padding:6px 12px;
                  background:#eef2ff;
                  border:1px solid #c7d2fe;
                  color:#4338ca;
                  font-size:11px;
                  font-weight:600;
                  border-radius:8px;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
                ">
                  Dikirim pada: ${new Date().toLocaleString('id-ID', {
                    timeZone: 'Asia/Jakarta',
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })} WIB
                </span>
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
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
