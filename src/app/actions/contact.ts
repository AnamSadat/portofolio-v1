'use server';

import { z } from 'zod';
import { sendContactEmail } from '@/lib/email';

// Schema validasi untuk server action
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Nama minimal 2 karakter' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  subject: z.string().min(3, { message: 'Subjek minimal 3 karakter' }),
  message: z.string().min(10, { message: 'Pesan minimal 10 karakter' }),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    // Ambil data dari FormData
    const rawData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    // Validasi data
    const validatedData = contactSchema.parse(rawData);

    // Kirim email
    await sendContactEmail(validatedData);

    return {
      success: true,
    };
  } catch (error) {
    console.error('Contact form error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return {
        error: 'Data tidak valid',
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    // Handle email sending errors
    return {
      error:
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat mengirim pesan',
    };
  }
}

// Alternative: Direct server action (tanpa useFormState)
export async function sendContactMessage(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    // Validasi data
    const validatedData = contactSchema.parse(data);

    // Kirim email
    const result = await sendContactEmail(validatedData);

    return {
      success: true,
      message: 'Pesan berhasil dikirim! Terima kasih sudah menghubungi.',
      messageId: result.messageId,
    };
  } catch (error) {
    console.error('Send contact message error:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: 'Data tidak valid',
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat mengirim pesan',
    };
  }
}
