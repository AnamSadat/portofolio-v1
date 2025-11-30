# 📧 Setup SMTP untuk Contact Form

## 🚀 Quick Setup

### 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication**

   - Buka [Google Account Security](https://myaccount.google.com/security)
   - Aktifkan 2-Step Verification

2. **Generate App Password**

   - Buka [App Passwords](https://myaccount.google.com/apppasswords)
   - Pilih "Mail" dan "Other (custom name)"
   - Masukkan nama: "Portfolio Contact Form"
   - Copy password yang dihasilkan (16 karakter)

3. **Update .env.local**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   SMTP_FROM=your-email@gmail.com
   CONTACT_EMAIL=anamsadat3@gmail.com
   ```

### 2. Alternative SMTP Providers

#### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

#### Yahoo Mail

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

#### Custom SMTP

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-username
SMTP_PASS=your-password
```

## 🧪 Testing

1. **Start Development Server**

   ```bash
   npm run dev
   ```

2. **Test Contact Form**

   - Buka http://localhost:3000
   - Scroll ke bagian "Mari Berkomunikasi"
   - Isi form dan kirim pesan test

3. **Check Console**
   - Buka Developer Tools → Console
   - Lihat log untuk debug jika ada error

## 🔧 Troubleshooting

### Error: "Invalid login"

- Pastikan 2FA aktif di Gmail
- Gunakan App Password, bukan password biasa
- Cek username/email sudah benar

### Error: "Connection timeout"

- Cek SMTP_HOST dan SMTP_PORT
- Pastikan firewall tidak memblokir port 587
- Coba ganti SMTP_SECURE=true untuk port 465

### Error: "Authentication failed"

- Regenerate App Password di Gmail
- Pastikan tidak ada spasi di password
- Cek SMTP_USER format email benar

### Email tidak masuk

- Cek folder Spam/Junk
- Pastikan CONTACT_EMAIL sudah benar
- Cek quota email provider

## 📝 Features

✅ **HTML Email Template** - Email yang dikirim dalam format HTML yang rapi  
✅ **Auto Reply-To** - Balasan email langsung ke pengirim  
✅ **Timezone Support** - Timestamp dalam WIB  
✅ **Error Handling** - Validasi dan error handling yang proper  
✅ **Security** - Server-side validation dengan Zod  
✅ **Responsive** - Template email responsive

## 🔒 Security Notes

- Jangan commit file `.env.local` ke Git
- Gunakan App Password, bukan password utama
- Validasi input di server-side
- Rate limiting bisa ditambahkan jika perlu

## 📧 Email Template Preview

Email yang dikirim akan berisi:

- Header dengan branding
- Informasi pengirim (nama, email)
- Subjek dan pesan
- Timestamp dalam WIB
- Footer dengan link website

## 🚀 Production Deployment

Untuk production, pastikan environment variables sudah diset di hosting provider:

### Vercel

```bash
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
# ... dst
```

### Netlify

- Buka Site Settings → Environment Variables
- Tambahkan semua SMTP\_\* variables

### Railway/Render

- Tambahkan environment variables di dashboard
