'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Persuasif } from '../molecules';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export function Contact() {
  const WA_NUMBER = '+6281234567890';
  const EMAIL = 'halo@example.com';
  const LOCATION = 'Kuningan, Jawa Barat';

  const waLink = `https://wa.me/${WA_NUMBER.replace(/[^0-9]/g, '')}`;
  const mailto = `mailto:${EMAIL}`;
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    LOCATION
  )}`;

  const [agree, setAgree] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agree || loading) return;
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    console.log('Contact form payload', payload);

    setTimeout(() => {
      setLoading(false);
      alert('Pesan terkirim! Terima kasih sudah menghubungi.');
      e.currentTarget.reset();
      setAgree(false);
    }, 600);
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-28" id="contact">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Mari Berkomunikasi
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Punya ide, kolaborasi, atau butuh bantuan? Kirim pesan langsung atau
            hubungi melalui WhatsApp & email.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Informasi Kontak */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          >
            <Card className="rounded-2xl border border-border bg-background shadow-sm">
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
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {WA_NUMBER}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href={mailto} className="hover:underline">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Lokasi</p>
                      <a
                        href={gmaps}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        {LOCATION}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  <Button asChild variant="outline">
                    <a href={waLink} target="_blank" rel="noreferrer">
                      <Phone className="mr-2 h-4 w-4" /> Chat WhatsApp
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={mailto}>
                      <Mail className="mr-2 h-4 w-4" /> Kirim Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Kirim Pesan */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 250, damping: 18 }}
          >
            <Card className="rounded-2xl border border-border bg-background shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  Kirim Pesan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Nama lengkap"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="email@domain.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subjek</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="Judul pesan"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tulis pesanmu di sini..."
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="agree"
                      checked={agree}
                      onCheckedChange={(v) => setAgree(!!v)}
                    />
                    <Label htmlFor="agree" className="text-sm">
                      Saya setuju untuk dihubungi kembali dan data saya diproses
                      sesuai kebijakan privasi.
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={!agree || loading}
                    className="w-full sm:w-auto"
                  >
                    <Send className="mr-2 h-4 w-4" />{' '}
                    {loading ? 'Mengirim...' : 'Kirim Pesan'}
                  </Button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                    <CheckCircle className="h-3.5 w-3.5" /> Informasi Anda aman.
                    Kami tidak akan membagikannya.
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16">
          <Persuasif
            className="text-center bg-[#282830] border-2"
            title="Siap untuk colaborations"
            classNameTitle="text-2xl font-bold"
            description="Mari berdiskusi tentang proyek selanjutnya dan bagaimana saya dapat membantu mewujudkan visi digital Anda."
            classNameDescription=""
          />
        </div>
      </div>
    </section>
  );
}
