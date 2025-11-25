'use client';
import * as React from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Persuasif } from '../molecules';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { ClassNameProps } from '@/types';
import { cn } from '@/lib/utils';
import { isColorCard } from '@/constants';

export type ContactProps = ClassNameProps;

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Nama minimal 2 karakter' }),
  email: z.string().email({ message: 'Email tidak valid' }),
  subject: z.string().min(3, { message: 'Subjek minimal 3 karakter' }),
  message: z.string().min(10, { message: 'Pesan minimal 10 karakter' }),
  agree: z.boolean().refine((v) => v === true, {
    message: 'Anda harus menyetujui kebijakan',
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact({ className }: ContactProps) {
  const baseClass = cn(className);

  const WA_NUMBER = '+6281234567890';
  const EMAIL = 'halo@example.com';
  const LOCATION = 'Kuningan, Jawa Barat';

  const waLink = `https://wa.me/${WA_NUMBER.replace(/[^0-9]/g, '')}`;
  const mailto = `mailto:${EMAIL}`;
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    LOCATION
  )}`;

  const secondaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';
  const primaryButton =
    'cursor-pointer rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-zinc-900/50 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  const {
    register,
    handleSubmit,
    control,
    reset,
    watch,
    formState: { isSubmitting, isValid, errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      agree: false,
    },
  });

  const messageValue = watch('message', '');
  const agree = watch('agree', false);

  async function onSubmit(values: ContactFormValues) {
    console.log('FORM VALUES AT SUBMIT:', values);
    const payload = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    console.log('Contact form payload', payload);

    try {
      await new Promise((res) => setTimeout(res, 600));
      toast.success('Pesan terkirim! Terima kasih sudah menghubungi.');
      reset();
    } catch (err) {
      console.error(err);
      toast.error('Terjadi kesalahan saat mengirim pesan.');
    }
  }

  return (
    <section className={baseClass} id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl md:font-bold">
            Mari Berkomunikasi
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Punya ide, kolaborasi, atau butuh bantuan? Kirim pesan langsung atau
            hubungi melalui WhatsApp & email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Informasi Kontak */}
          <div className="transition-transform duration-300 hover:-translate-y-1 max-h-80">
            <Card className="rounded-2xl border border-border bg-background hover:shadow-custom-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <Link
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {WA_NUMBER}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <Link href={mailto} className="hover:underline">
                        {EMAIL}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Lokasi</p>
                      <Link
                        href={gmaps}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {LOCATION}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button asChild className={primaryButton}>
                    <Link href={waLink} target="_blank" rel="noreferrer">
                      <Phone className="mr-2 h-4 w-4" /> Chat WhatsApp
                    </Link>
                  </Button>
                  <Button asChild className={secondaryButton}>
                    <Link href={mailto}>
                      <Mail className="mr-2 h-4 w-4" /> Kirim Email
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kirim Pesan (RHF + Zod + shadcn Field + InputGroup) */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <Card className="rounded-2xl border border-border bg-background hover:shadow-custom-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <FieldGroup>
                    <FieldSet>
                      <FieldLegend>Informasi Pengirim</FieldLegend>
                      <FieldDescription>
                        Isi data di bawah agar kami dapat membalas pesanmu.
                      </FieldDescription>

                      <FieldGroup>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Nama dengan InputGroup (ikon) */}
                          <Field>
                            <FieldLabel htmlFor="name">Nama</FieldLabel>
                            <InputGroup>
                              <Input
                                id="name"
                                {...register('name')}
                                placeholder="Nama lengkap"
                                aria-invalid={!!errors.name}
                                className="rounded-r-md"
                              />
                              {/* <InputGroupAddon align="block-end">
                                <InputGroupText>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                  >
                                    <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
                                    <circle cx="12" cy="7" r="4" />
                                  </svg>
                                </InputGroupText>
                              </InputGroupAddon> */}
                            </InputGroup>
                            {errors.name && (
                              <FieldDescription className="text-red-500">
                                {errors.name.message}
                              </FieldDescription>
                            )}
                          </Field>

                          {/* Email dengan InputGroup (ikon) */}
                          <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <InputGroup>
                              <Input
                                id="email"
                                type="email"
                                {...register('email')}
                                placeholder="email@domain.com"
                                aria-invalid={!!errors.email}
                                className="rounded-r-md"
                              />
                              {/* <InputGroupAddon align="block-end">
                                <InputGroupText>
                                  <Mail className="h-4 w-4" />
                                </InputGroupText>
                              </InputGroupAddon> */}
                            </InputGroup>
                            {errors.email && (
                              <FieldDescription className="text-red-500">
                                {errors.email.message}
                              </FieldDescription>
                            )}
                          </Field>
                        </div>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSet>
                      <FieldLegend>Pesan</FieldLegend>
                      <FieldGroup>
                        {/* Subjek - gunakan InputGroup agar konsisten */}
                        <Field>
                          <FieldLabel htmlFor="subject">Subjek</FieldLabel>
                          <InputGroup>
                            <Input
                              id="subject"
                              {...register('subject')}
                              placeholder="Judul pesan"
                              aria-invalid={!!errors.subject}
                              className="rounded-r-md"
                            />
                            {/* <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums">
                                {watch('subject')?.length ?? 0}/10
                              </InputGroupText>
                            </InputGroupAddon> */}
                          </InputGroup>
                          {errors.subject && (
                            <FieldDescription className="text-red-500">
                              {errors.subject.message}
                            </FieldDescription>
                          )}
                        </Field>

                        {/* Message - ganti Textarea -> InputGroupTextarea + counter */}
                        <Field>
                          <FieldLabel htmlFor="message">Pesan</FieldLabel>
                          <InputGroup>
                            <InputGroupTextarea
                              id="message"
                              {...register('message')}
                              placeholder="Tulis pesanmu di sini..."
                              rows={5}
                              className="min-h-24 resize-none"
                              aria-invalid={!!errors.message}
                            />
                            <InputGroupAddon align="block-end">
                              <InputGroupText className="tabular-nums">
                                {messageValue.length}/10
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <FieldDescription>
                            Minimal 10 Karakter
                          </FieldDescription>
                          {errors.message && (
                            <FieldDescription className="text-red-500">
                              {errors.message.message}
                            </FieldDescription>
                          )}
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSet>
                      <FieldGroup>
                        <Field orientation="horizontal">
                          <Controller
                            control={control}
                            name="agree"
                            defaultValue={false}
                            render={({ field }) => (
                              <Checkbox
                                id="agree"
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                ref={field.ref}
                              />
                            )}
                          />

                          <FieldLabel
                            htmlFor="agree"
                            className="font-normal"
                            style={{ cursor: 'pointer' }}
                          >
                            Saya setuju untuk dihubungi kembali dan data saya
                            diproses sesuai kebijakan privasi.
                          </FieldLabel>
                        </Field>

                        {errors.agree && (
                          <FieldDescription className="text-red-500">
                            {errors.agree.message}
                          </FieldDescription>
                        )}

                        <Field orientation="horizontal">
                          <div className="flex items-center gap-2">
                            <Button
                              type="submit"
                              disabled={!agree || isSubmitting || !isValid}
                              className={cn(
                                secondaryButton,
                                'dark:bg-emerald-500 dark:hover:bg-emerald-700'
                              )}
                            >
                              <Send className="mr-2 h-4 w-4" />
                              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </Button>
                            <Button
                              type="button"
                              onClick={() => reset()}
                              className={cn(
                                primaryButton,
                                'dark:hover:bg-red-500 dark:hover:border-red-500'
                              )}
                            >
                              Cancel
                            </Button>
                          </div>
                        </Field>

                        <Field>
                          <FieldDescription className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                            <CheckCircle className="h-3.5 w-3.5" /> Informasi
                            Anda aman. Kami tidak akan membagikannya.
                          </FieldDescription>
                        </Field>
                      </FieldGroup>
                    </FieldSet>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Persuasif
            className={cn('text-center border-2', isColorCard)}
            title="Siap untuk colaborations"
            classNameTitle="text-2xl font-bold"
            description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
            classNameDescription=""
            classNameChildren="flex gap-5 mx-auto"
          >
            <Button>Download CV</Button>
            <Button>Lets start project</Button>
          </Persuasif>
        </div>
      </div>
    </section>
  );
}
