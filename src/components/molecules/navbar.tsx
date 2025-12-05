'use client';

import { ThemeToggle } from '@/components/molecules';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui';
import { Download, Mail, Menu, X } from 'lucide-react'; // Tambahkan Menu & X
import { buttonColor } from '@/lib/button-custom';
import Image from 'next/image';

export function Navbar() {
  const routes = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State untuk menu mobile
  const NAV_OFFSET = 30;

  // smooth scroll on click
  const smoothScrollToHash = (hash: string) => {
    const el = document.querySelector<HTMLElement>(hash);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
    history.pushState(null, '', hash);
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // Handle klik link di mobile (scroll + tutup menu)
  const handleMobileNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    smoothScrollToHash(href);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) setScrolled(isScrolled);

      // Scroll Spy Logic
      // Matikan scroll spy jika menu mobile sedang terbuka agar tidak flickering visualnya (opsional)
      if (isMobileMenuOpen) return;

      let current = '#home';
      for (const r of routes) {
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
  }, [scrolled, isMobileMenuOpen, routes]);

  const baseClass = cn(
    'fixed w-full top-0 z-50 transition-all duration-300',
    scrolled || isMobileMenuOpen
      ? 'border-b bg-background/95 backdrop-blur-md shadow-sm'
      : 'bg-transparent'
  );

  const baseContainer = cn(
    'container mx-auto flex justify-between items-center transition-all duration-300 px-7 md:px-0', // Tambah px agar tidak mepet di mobile
    scrolled ? 'py-3' : 'py-5',
    isMobileMenuOpen ? 'pb-[500px]' : ''
  );

  const primaryButton =
    'cursor-pointer w-full md:w-auto justify-center rounded-full bg-green-200 border-2 border-green-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-emerald-900 dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';
  const secondaryButton =
    'cursor-pointer w-full md:w-auto justify-center rounded-full bg-green-200 border-2 border-emerald-500 text-green-800 hover:bg-green-300 dark:border-emerald-400 dark:bg-background dark:text-white dark:hover:bg-emerald-500 transition-all duration-300';

  return (
    <div className={baseClass}>
      <div className={baseContainer}>
        {/* LOGO */}
        <Link
          href="/"
          className="scroll-m-20 text-center text-3xl font-bold tracking-tight text-balance flex items-center z-50"
          onClick={(e) => {
            e.preventDefault();
            smoothScrollToHash('#home');
            setIsMobileMenuOpen(false);
          }}
        >
          <Image
            src={'/logo-as-png-white-crop.png'}
            alt="logo"
            width={90}
            height={0}
            className="w-[70px] md:w-[90px] h-auto" // Resize logo di mobile
          />
        </Link>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 lg:gap-10 items-center">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollToHash(route.href);
                }}
                className={cn(
                  'relative group dark:text-white font-medium hover:text-custom-hover dark:hover:text-custom-hover transition-all duration-300 text-black text-sm lg:text-base',
                  activeSection === route.href && 'text-custom-hover!'
                )}
              >
                {route.label}
                <span
                  className={cn(
                    'absolute left-0 -bottom-1 w-full h-0.5 bg-chart-2',
                    'scale-x-0 group-hover:scale-x-100',
                    'origin-left group-hover:origin-left',
                    'transition-transform duration-300 ease-out',
                    activeSection === route.href && 'scale-x-100'
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP BUTTONS (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4">
          <Button className={primaryButton} asChild>
            <Link
              href="/files/Resume_Anam_Sadat.pdf"
              download="Resume_Anam_Sadat.pdf"
            >
              <Download className="w-4 h-4 mr-2" /> Unduh
            </Link>
          </Button>
          <Button className={secondaryButton} asChild>
            <Link href="mailto:anamsadat3@gmail.com">
              <Mail className="w-4 h-4 mr-2" /> Hire Me
            </Link>
          </Button>
          {/* <ThemeToggle className={secondaryButton} /> */}
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          className="md:hidden text-foreground z-50 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {/* Menggunakan absolute positioning agar menumpuk konten di bawahnya */}
      <div
        className={cn(
          'md:hidden fixed inset-x-0 top-[49px] z-40',
          // overlay + blur
          'border-b border-border shadow-lg bg-[#36363fc1] mx-10 rounded-2xl backdrop-blur-3xl',
          // layout
          'flex flex-col items-center gap-6 px-4 max-h-screen overflow-y-auto',
          'transition-all duration-300 ease-in-out',
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 visible py-3 mt-2'
            : 'opacity-0 -translate-y-2 invisible py-0 pointer-events-none'
        )}
      >
        <ul className="flex flex-col items-center gap-6 w-full">
          {routes.map((route) => (
            <li key={route.href} className="w-full text-center">
              <Link
                href={route.href}
                onClick={(e) => handleMobileNavClick(e, route.href)}
                className={cn(
                  'block text-lg font-medium hover:text-custom-hover dark:text-white transition-colors',
                  activeSection === route.href && 'text-custom-hover font-bold'
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 w-full max-w-xs mt-4 mb-6">
          <Button className={primaryButton} asChild>
            <Link
              href="/files/Resume_Anam_Sadat.pdf"
              download="Resume_Anam_Sadat.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Download className="w-4 h-4 mr-2" /> Unduh Resume
            </Link>
          </Button>
          <Button className={secondaryButton} asChild>
            <Link
              href="mailto:anamsadat3@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Mail className="w-4 h-4 mr-2" /> Hire Me
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
