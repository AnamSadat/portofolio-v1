'use client';
import * as React from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ExternalLink,
  Download,
} from 'lucide-react';
import { ContactItem, Header, Persuasif } from '../molecules';
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
import { Description } from '../molecules/description';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/isMobile';

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
  const baseClass = cn(
    'w-full mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-0',
    className
  );

  const WA_NUMBER = '+62895343428566';
  const EMAIL = 'anamsadat3@gmail.com';
  const LOCATION = 'Kuningan, Jawa Barat';

  const waLink = `https://wa.me/${WA_NUMBER.replace(/[^0-9]/g, '')}`;
  const mailto = `mailto:${EMAIL}`;
  const gmaps = 'https://maps.google.com/maps?q=-6.9939379+108.4861106';

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

  const isMobile = useIsMobile();

  return (
    <section className={baseClass} id="contact">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <Header
            title="Mari"
            titleColor="Berkomunikasi"
            className="text-4xl font-bold tracking-tight md:text-5xl md:font-bold"
            classNameTitleColor="text-custom"
            space
          />
          <Description>
            Punya ide, kolaborasi, atau butuh bantuan? Kirim pesan langsung atau
            hubungi melalui WhatsApp & email.
          </Description>
        </header>

        {/* 2 kolom di desktop, 1 kolom di mobile/tablet */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Informasi kontak */}
          <div className="transition-transform duration-300 hover:-translate-y-1 md:max-h-80">
            <Card
              className="rounded-2xl border border-border bg-background hover:shadow-custom-hover transition-all duration-300 h-auto"
              data-aos={'fade-up'}
              data-aos-delay="100"
              data-aos-once="true"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">
                  Informasi Kontak
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 sm:space-y-7 text-sm sm:text-base">
                <ContactItem
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value={EMAIL}
                  description="Untuk pertanyaan umum dan diskusi project"
                  actionLabel="Send Email"
                  actionHref={mailto}
                />

                <ContactItem
                  icon={<Phone className="h-5 w-5" />}
                  label="WhatsApp"
                  value={WA_NUMBER}
                  description="Untuk komunikasi cepat dan urgent"
                  actionLabel="Send Message"
                  actionHref={waLink}
                  actionExternal
                />

                <ContactItem
                  icon={<MapPin className="h-5 w-5" />}
                  label="Location"
                  value={LOCATION}
                  description="Available for remote work worldwide"
                  actionLabel="View Map"
                  actionHref={gmaps}
                  actionExternal
                  iconMaps={<ExternalLink size={16} />}
                />
              </CardContent>
            </Card>
          </div>

          {/* Kirim Pesan (RHF + Zod + shadcn Field + InputGroup) */}
          <div className="transition-transform duration-300 hover:-translate-y-1">
            <Card
              className="rounded-2xl border border-border bg-background hover:shadow-custom-hover transition-all duration-300"
              data-aos={'fade-up'}
              data-aos-delay="100"
              data-aos-once="true"
            >
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">
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
                          {/* Nama */}
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
                            </InputGroup>
                            {errors.name && (
                              <FieldDescription className="text-red-500 text-xs sm:text-sm">
                                {errors.name.message}
                              </FieldDescription>
                            )}
                          </Field>

                          {/* Email */}
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
                            </InputGroup>
                            {errors.email && (
                              <FieldDescription className="text-red-500 text-xs sm:text-sm">
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
                        {/* Subjek */}
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
                          </InputGroup>
                          {errors.subject && (
                            <FieldDescription className="text-red-500 text-xs sm:text-sm">
                              {errors.subject.message}
                            </FieldDescription>
                          )}
                        </Field>

                        {/* Message */}
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
                              <InputGroupText className="tabular-nums text-xs sm:text-sm">
                                {messageValue.length}/10
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                          <FieldDescription className="text-xs sm:text-sm">
                            Minimal 10 Karakter
                          </FieldDescription>
                          {errors.message && (
                            <FieldDescription className="text-red-500 text-xs sm:text-sm">
                              {errors.message.message}
                            </FieldDescription>
                          )}
                        </Field>
                      </FieldGroup>
                    </FieldSet>

                    <FieldSet>
                      <FieldGroup>
                        {/* Checkbox agree */}
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
                            className="font-normal text-xs sm:text-sm"
                            style={{ cursor: 'pointer' }}
                          >
                            Saya setuju untuk dihubungi kembali dan data saya
                            diproses sesuai kebijakan privasi.
                          </FieldLabel>
                        </Field>

                        {errors.agree && (
                          <FieldDescription className="text-red-500 text-xs sm:text-sm">
                            {errors.agree.message}
                          </FieldDescription>
                        )}

                        {/* Buttons */}
                        <Field orientation="horizontal">
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Button
                              type="submit"
                              disabled={!agree || isSubmitting || !isValid}
                              className={cn(
                                secondaryButton,
                                'dark:bg-emerald-500 dark:hover:bg-emerald-700 min-w-[370px] md:min-w-0 text-sm sm:text-base'
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
                                'dark:hover:bg-red-500 dark:hover:border-red-500 w-full sm:w-auto text-sm sm:text-base'
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

        <div className="mt-14 sm:mt-16">
          <Persuasif
            className={cn(
              'text-center border-2 border-emerald-700 bg-emerald-950/30 px-4'
            )}
            title="Tertarik untuk"
            span="Kolaborasi?"
            classNameSpan="text-emerald-500"
            classNameTitle="text-2xl sm:text-3xl font-bold"
            description="Saya siap membantu mulai dari perencanaan, desain, hingga pengembangan aplikasi berbasis web maupun cloud."
            classNameDescription="text-sm sm:text-base max-w-2xl mx-auto"
            classNameChildren="flex flex-col sm:flex-row gap-3 sm:gap-5 mx-auto justify-center mt-4"
          >
            <Button
              asChild
              className={cn(
                secondaryButton,
                'text-sm sm:text-base min-w-sm md:min-w-0 sm:px-8'
              )}
            >
              <Link
                href="/files/Resume-Anam-Sadat.pdf"
                download="Resume-Anam-Sadat.pdf"
              >
                <Download className="w-4 h-4" /> Download CV
              </Link>
            </Button>
            <Button
              asChild
              className={cn(primaryButton, 'text-sm sm:text-base px-6 sm:px-8')}
            >
              <Link href="mailto:anamsadat3@gmail.com">
                <Mail className="w-4 h-4" /> Lets start project
              </Link>
            </Button>
          </Persuasif>
        </div>
      </div>
    </section>
  );
}
