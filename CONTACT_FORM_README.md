# 📧 Contact Form dengan SMTP Email

## ✅ Fitur yang Sudah Diimplementasikan

### 🚀 **Server Action Integration**

- ✅ Server action untuk mengirim email (`src/app/actions/contact.ts`)
- ✅ Validasi server-side dengan Zod schema
- ✅ Error handling yang proper
- ✅ Type-safe dengan TypeScript

### 📧 **SMTP Email System**

- ✅ Nodemailer integration (`src/lib/email.ts`)
- ✅ HTML email template yang responsive
- ✅ Auto reply-to ke pengirim
- ✅ Timestamp dalam WIB
- ✅ Professional email formatting

### 🎨 **UI/UX Improvements**

- ✅ Form tetap menggunakan React Hook Form + Zod
- ✅ Toast notifications untuk feedback
- ✅ Loading states saat mengirim
- ✅ Consistent dengan tema website (green accent)

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install nodemailer @types/nodemailer
```

### 2. Setup Environment Variables

Copy `.env.example` ke `.env.local` dan isi dengan kredensial SMTP Anda:

```env
# Gmail Setup (Recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=anamsadat3@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Gmail App Password Setup

1. Enable 2-Factor Authentication di Gmail
2. Buka [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate password untuk "Mail" → "Other (Portfolio)"
4. Copy 16-character password ke `SMTP_PASS`

### 4. Test Contact Form

```bash
npm run dev
```

- Buka http://localhost:3000
- Scroll ke section "Mari Berkomunikasi"
- Isi form dan test kirim pesan

## 📁 File Structure

```
src/
├── app/
│   └── actions/
│       └── contact.ts          # Server action untuk contact form
├── lib/
│   └── email.ts               # SMTP email utility
├── components/
│   └── organism/
│       └── contact.tsx        # Contact form component (updated)
├── .env.example              # Environment variables template
├── .env.local               # Your actual environment variables
└── SMTP_SETUP.md           # Detailed SMTP setup guide
```

## 🔄 How It Works

1. **User fills form** → React Hook Form handles validation
2. **Form submission** → Calls server action `sendContactMessage()`
3. **Server validation** → Zod schema validates data
4. **Email sending** → Nodemailer sends HTML email via SMTP
5. **Response** → Toast notification shows success/error

## 📧 Email Template Features

- **Professional HTML design** dengan branding
- **Responsive layout** untuk mobile/desktop
- **Sender information** (nama, email, subjek, pesan)
- **Timestamp** dalam format Indonesia (WIB)
- **Reply-to** otomatis ke email pengirim
- **Footer** dengan link website

## 🛡️ Security Features

- ✅ **Server-side validation** dengan Zod
- ✅ **Environment variables** untuk kredensial
- ✅ **Input sanitization** otomatis
- ✅ **Error handling** yang aman
- ✅ **No client-side credentials** exposure

## 🚀 Production Deployment

### Vercel

```bash
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add SMTP_FROM
vercel env add CONTACT_EMAIL
```

### Environment Variables Required

- `SMTP_HOST` - SMTP server hostname
- `SMTP_PORT` - SMTP port (587 untuk TLS)
- `SMTP_USER` - SMTP username/email
- `SMTP_PASS` - SMTP password/app password
- `SMTP_FROM` - From email address
- `CONTACT_EMAIL` - Where messages will be sent

## 🔍 Troubleshooting

### Common Issues:

1. **"Invalid login"**

   - Pastikan menggunakan App Password, bukan password biasa
   - Enable 2FA di Gmail terlebih dahulu

2. **"Connection timeout"**

   - Cek SMTP_HOST dan SMTP_PORT
   - Pastikan firewall tidak block port 587

3. **Email tidak masuk**

   - Cek folder Spam/Junk
   - Pastikan CONTACT_EMAIL benar
   - Cek console untuk error logs

4. **Build errors**
   - Pastikan semua dependencies terinstall
   - Cek TypeScript errors di console

## 📝 Next Steps (Optional)

- [ ] Rate limiting untuk prevent spam
- [ ] Email queue untuk high volume
- [ ] Email templates untuk different types
- [ ] Admin dashboard untuk manage messages
- [ ] Auto-reply email ke pengirim

## 🎯 Testing Checklist

- [ ] Form validation works (client-side)
- [ ] Server action receives data correctly
- [ ] Email sends successfully
- [ ] HTML template renders properly
- [ ] Toast notifications work
- [ ] Error handling works
- [ ] Mobile responsive
- [ ] Production deployment works

Sekarang contact form Anda sudah siap dengan SMTP email yang professional! 🚀
