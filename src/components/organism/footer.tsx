'use client';

import { DiscIcon, Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui';
import { useEffect, useState } from 'react';

export function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const NAV_OFFSET = 30; // tinggi kira-kira navbar; sesuaikan jika perlu

  // smooth scroll on click
  const smoothScrollToHash = (hash: string) => {
    const el = document.querySelector<HTMLElement>(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    // update URL hash tanpa reload
    history.pushState(null, '', hash);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);

      // scroll spy
      let current = '#home';
      for (const r of page) {
        const el = document.querySelector<HTMLElement>(r.href);
        if (!el) continue;
        const top = el.offsetTop - (NAV_OFFSET + 20);
        if (window.scrollY >= top) current = r.href;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const sosmed = [
    {
      href: 'https://github.com/AnamSadat',
      label: 'GitHub',
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: 'https://www.linkedin.com/in/anamsadat/',
      label: 'LinkedIn',
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: 'https://instagram.com/anam.sdttt',
      label: 'Instagram',
      icon: <Instagram className="h-4 w-4" />,
    },
    {
      href: 'https://discord.com/users/434200430088683545',
      label: 'Discord',
      icon: <DiscIcon className="h-4 w-4" />,
    },
  ];

  const page = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Portofolio', href: '#portofolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const service = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Cloud Deployment' },
    { id: 3, name: 'API Engineer' },
    { id: 4, name: 'Consulting' },
    { id: 5, name: 'Code Review' },
    { id: 6, name: 'Technical Writing' },
  ];

  return (
    <footer className="bg-[#f9fafb] dark:bg-[#1c1c22] border-t-2 md:px-44 text-white">
      <div className="mx-auto px-10 sm:px-0 py-10 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand + Description + Social Icons */}
          <div className="space-y-4">
            <Image
              src="/logo-as-png-white-crop.png"
              alt="logo"
              width={170}
              height={40}
              className="object-contain"
            />

            <p className="text-sm sm:text-md text-gray-600 dark:text-gray-400">
              Passionate full-stack developer dedicated to creating innovative
              digital solutions that make a difference.
            </p>

            <div className="flex gap-3 pt-1">
              {sosmed.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-neutral-900/70 text-gray-700 dark:text-gray-300 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-600/50 hover:text-black! hover:bg-custom!"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
              {page.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-custom hover:underline hover:underline-offset-1"
                  onClick={(e) => {
                    // cegah lompat, pakai smooth
                    e.preventDefault();
                    smoothScrollToHash(item.href);
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Services
            </h3>
            <div className="flex flex-col space-y-2 text-sm sm:text-md text-gray-600 dark:text-gray-400">
              {service.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
            </div>
          </div>

          {/* Stay Updated / Contact Me */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
              Contact Me
            </h3>
            <p className="text-sm sm:text-md text-gray-600 dark:text-gray-400">
              {
                "Have a project in mind? Let's work together and create something great."
              }
            </p>

            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-full border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-neutral-900/70 text-sm placeholder:text-gray-500 focus-visible:ring-emerald-500"
              />
              <Button
                type="submit"
                className="w-full rounded-full bg-custom text-sm cursor-pointer font-semibold text-black hover:bg-custom-border-button"
              >
                Send a Message
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-8 sm:my-10" />

        {/* Bottom Bar */}
        <div className="text-gray-500 dark:text-gray-400">
          {/* First row → Made with | Privacy | Terms */}
          <div className="flex flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
            <p className="text-xs sm:text-sm text-center md:text-left">
              Made with <span className="text-red-400">♥</span> and ☕ by Anam
              Sadat
            </p>

            <div className="flex items-center gap-4 text-xs sm:text-sm">
              <Link href="/privacy-policy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/term-condition" className="hover:text-gray-300">
                Terms of Service
              </Link>
            </div>
          </div>

          <Separator className="mt-8" />

          {/* Second row → Center copyright */}
          <p className="text-center text-xs sm:text-sm mt-3">
            © {new Date().getFullYear()} Developer Portfolio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
